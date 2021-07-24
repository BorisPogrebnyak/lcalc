const express = require('express');
const createError = require('http-errors');
const cheerio = require(`cheerio`);
const headParams = require('./services/headParams');

const router = express.Router();

// Получить кол-во пар преподвателя
router.get('/',
  async function (req, res, next) {
    try {
      await page.select('.card-body > #filter-form #timetableform-teacherid', `${req.query.teacherId}`);
      await page.waitForSelector('.card-body > #filter-form #timetableform-teacherid');

      res.writeHead(...headParams);

      // Вернуть кол-во непустых клеточек
      // в расписании выбраного преподавателя
      res.end(`${cheerio.load(await page.content())('#timeTable td [data-content!=""]').length}`); // `` - numberToString
    } catch (err) {
      console.error(`Ошибка при обработке запроса / => : ${err}`);
      next(createError(404));
    }
  });

module.exports = router;