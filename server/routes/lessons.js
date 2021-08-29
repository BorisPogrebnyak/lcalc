const express = require('express');
const createError = require('http-errors');
const cheerio = require(`cheerio`);
const headParams = require('./utils/headParams');

const router = express.Router();

// Иногда сбивается со счета ... ???
// Получить кол-во пар преподвателя
router.get('/',
  async function (req, res, next) {
    try {
      // await page.select('.card-body > #filter-form #timetableform-teacherid', cheerio.load(await page.content())(`#timetableform-teacherid option`)[1].attribs.value);

      // console.log(cheerio.load(await page.content())(`#timetableform-teacherid option`).filter(function (i, el) {
      //   console.log('el.attribs.value: ', el.attribs.value);
      //   console.log('req.query.teacherId: ', req.query.teacherId);
      //   return el.attribs.value === req.query.teacherId;
      // }));

      // Просто задержка?????
      await page.select('.card-body > #filter-form #timetableform-teacherid', cheerio.load(await page.content())(`#timetableform-teacherid option`)[1].attribs.value);

      await page.select('.card-body > #filter-form #timetableform-teacherid', `${req.query.teacherId}`);
      await page.waitForSelector('.card-body > #filter-form #timetableform-teacherid');
      await page.waitForSelector('#timeTable');

      // Кол-во непустых клеточек
      // в расписании преподавателя
      // `` - numberToString
      const lessons = `${cheerio.load(await page.content())('#timeTable td [data-content!=""]').length}`;

      res.writeHead(...headParams);
      res.end(lessons);
    } catch (err) {
      console.error(`Ошибка при обработке запроса / => : ${err}`);
      next(createError());
    }
  });

module.exports = router;