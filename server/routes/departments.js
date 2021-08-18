const express = require('express');
const createError = require('http-errors');
const cheerio = require(`cheerio`);

const headParams = require('./utils/headParams');
const getBrowser = require('./utils/getBrowser');
const getPage = require('./utils/getPage');

const router = express.Router();

// Получить список кафедр
router.get('/',
  async function (req, res, next) {
    try {
      if (typeof browser !== 'undefined') {
        await browser.close();
      }
      browser = await getBrowser();
      page = await getPage(browser, req.query.targetUrl);

      res.writeHead(...headParams);

      // Вернуть массив объектов с одним свойством
      // Код кафедры : Название кафедры
      // Без 1-й строки-пустышки
      res.end(JSON.stringify(Array.from(cheerio.load(await page.content())('#timetableform-chairid option'), department => ({
        [department.attribs.value]: department.firstChild.data,
      })).slice(1)));
    } catch (err) {
      console.error(`Ошибка при обработке запроса /getdepartments => : ${err}`);
      next(createError());
    }
  });

module.exports = router;