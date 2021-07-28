const express = require('express');
const createError = require('http-errors');
const cheerio = require(`cheerio`);
const headParams = require('./services/headParams');
const dayjs = require(`dayjs`);

const router = express.Router();

// Получить список преподвателей кафедры
// и установить необходимый диапазон дат
router.get('/',
  async function (req, res, next) {
    try {
      await page.select('.card-body > #filter-form #timetableform-chairid', `${req.query.selectedDepartmentId}`);
      await page.waitForSelector('.card-body > #filter-form #timetableform-teacherid > option');

      // Выбрать любого преподавателя и подождать ...
      await page.select('.card-body > #filter-form #timetableform-teacherid', cheerio.load(await page.content())(`#timetableform-teacherid option`)[1].attribs.value);
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

      res.writeHead(...headParams);

      res.end(JSON.stringify(teachersList));
    } catch (err) {
      console.error(`Ошибка при обработке запроса / => : ${err}`);
      next(createError());
    }
  });

module.exports = router;