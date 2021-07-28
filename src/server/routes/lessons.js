const express = require('express');
const createError = require('http-errors');
const cheerio = require(`cheerio`);
const headParams = require('./services/headParams');

const router = express.Router();

// Получить кол-во пар преподвателя
router.get('/',
  async function (req, res, next) {
    try {
      // Иногда сбивается со счета ... ???
      await navigationPromise;
      // await page.select('.card-body > #filter-form #timetableform-teacherid', cheerio.load(await page.content())(`#timetableform-teacherid option`)[req.query.teacherNumber].attribs.value);
      await page.select('.card-body > #filter-form #timetableform-teacherid', `${req.query.teacherId}`);
      await page.waitForSelector('.card-body > #filter-form #timetableform-teacherid');
      await navigationPromise;

      res.writeHead(...headParams);

      // Вернуть кол-во непустых клеточек
      // в расписании преподавателя
      res.end(`${cheerio.load(await page.content())('#timeTable td [data-content!=""]').length}`); // `` - numberToString
    } catch (err) {
      console.error(`Ошибка при обработке запроса / => : ${err}`);
      next(createError());
    }
  });

module.exports = router;