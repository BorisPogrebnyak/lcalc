const express = require(`express`);
const puppeteer = require(`puppeteer`);
const cheerio = require(`cheerio`);
const dayjs = require(`dayjs`);

const url = `https://erp.kname.edu.ua/time-table/teacher?type=0`;
const port = process.env.PORT || 3001;

let browser;
let page;
const writeHeadParams = [200, {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}];

// Создать экземпляр браузера
async function getBrowser() {
  try {
    console.info(`Создание экземпляра браузера ...`);
    return await puppeteer.launch({
      headless: false,
      args: [`--disable-setuid-sandbox`],
      ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.error(`Не удалось создать экземпляр браузера => : ${err}`);
  }
}

// Загрузить страницу
async function getPage(browser, url) {
  try {
    console.info(`Загрузка страницы  => : ${url}`);
    const page = await browser.newPage();
    await page.goto(url);
    return page;
  } catch (err) {
    console.error(`Ошибка загрузки страницы => : ${err}`);
  }
}

// Загрузить index.html
async function getIndexHtml(req, res) {
  try {
    console.log(`Получен запрос /`);

    res.sendFile(__dirname + 'index.html');
  } catch (err) {
    console.error(`Ошибка при обработке запроса / => : ${err}`);
  }
}

// Получить список кафедр
async function getDepartments(req, res) {
  try {
    console.log(`Получен запрос /getdepartments`);

    browser = await getBrowser();
    page = await getPage(browser, url);

    res.writeHead(...writeHeadParams);

    // Вернуть массив объектов с одним свойством
    // Код кафедры : Название кафедры
    // Без 1-й строки-пустышки
    res.end(JSON.stringify(Array.from(cheerio.load(await page.content())('#timetableform-chairid option'), department => ({
      [department.attribs.value]: department.firstChild.data,
    })).slice(1)));

    // browser.close();
  } catch (err) {
    console.error(`Ошибка при обработке запроса /getdepartments => : ${err}`);
  }
}

// Получить список преподвателей кафедры
// и установить необходимый диапазон дат
async function getTeachers(req, res) {
  try {
    // http://localhost:3001/lessons?selectedDepartmentId=169&teacherId=96&dateStart=123&dateEnd=456
    console.log(`Получен запрос /teachers?selectedDepartmentId=${req.query.selectedDepartmentId}&teacherId=${req.query.teacherId}&dateStart=${req.query.dateStart}&dateEnd=${req.query.dateEnd}`);

    await page.select('.card-body > #filter-form #timetableform-chairid', `${req.query.selectedDepartmentId}`);
    await page.waitForSelector('.card-body > #filter-form #timetableform-teacherid > option');

    // Выбрать любого преподавателя и подождать ...
    await page.select('.card-body > #filter-form #timetableform-teacherid', cheerio.load(await page.content())
      (`#timetableform-teacherid option`)[1].attribs.value);
    await page.waitForSelector('.card-body > #filter-form #timetableform-teacherid');

    await page.$eval('input[name="TimeTableForm[dateStart]"]', (el, dateStart) => el.value = dateStart, dayjs(req.query.dateStart).format('DD.MM.YYYY'));
    await page.$eval('input[name="TimeTableForm[dateEnd]"]', (el, dateEnd) => el.value = dateEnd, dayjs(req.query.dateEnd).format('DD.MM.YYYY'));

    const teachersList = Array.from(cheerio.load(await page.content())
      ("#timetableform-teacherid option"), teacher => ({
        id: teacher.attribs.value,      // Код преподавателя
        name: teacher.children[0].data, // ФИО, должность
        coeffRate: 1,                   // Коэф. ставки
        lessons: null,                  // Кол-во пар
      })).slice(1);                     // Без 1-й строки

    res.writeHead(...writeHeadParams);

    res.end(JSON.stringify(teachersList));

    // browser.close();
  } catch (err) {
    console.error(`Ошибка при обработке запроса /teachers?selectedDepartmentId=${req.query.selectedDepartmentId}&teacherId=${req.query.teacherId}&dateStart=${req.query.dateStart}&dateEnd=${req.query.dateEnd} => : ${err}`);
  }
}

// 1-я загрузка 1-й препод и др. кол-во пар ?????

// Получить кол-во пар преподвателя
async function getLessons(req, res) {
  try {
    console.log(`Получен запрос /lessons?selectedDepartmentId=${req.query.selectedDepartmentId}&teacherId=${req.query.teacherId}`);

    await page.select('.card-body > #filter-form #timetableform-teacherid', `${req.query.teacherId}`);
    await page.waitForSelector('.card-body > #filter-form #timetableform-teacherid');

    res.writeHead(...writeHeadParams);

    // Вернуть кол-во непустых клеточек
    // в расписании выбраного преподавателя
    res.end(`${cheerio.load(await page.content())('#timeTable td [data-content!=""]').length}`); // `` - numberToString

    // browser.close();
  } catch (err) {
    console.error(`Ошибка при обработке запроса /lessons?selectedDepartmentId=${req.query.selectedDepartmentId}&teacherId=${req.query.teacherId} => : ${err}`);
  }
}

express()
  .use(express.static(__dirname + "/public"))
  .get('/', getIndexHtml)
  .get('/departments', getDepartments)
  .get('/teachers', getTeachers)
  .get('/lessons', getLessons)
  .use((req, res) => {
    res.type('text/plain');
    res.status(404);
    res.send('404 — Не найдено');
  })
  .use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 — Ошибка сервера');
  })
  .listen(port,
    () => console.info(`Express server слушает по http://localhost:${port}/`));