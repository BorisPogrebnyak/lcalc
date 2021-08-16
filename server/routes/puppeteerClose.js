const express = require('express');
const createError = require('http-errors');

const router = express.Router();

// Завершить Puppeteer
router.get('/',
  async function (req, res, next) {
    try {
      await browser.close();
    } catch (err) {
      console.error(`Ошибка при обработке запроса /close => : ${err}`);
      next(createError());
    }
  });

module.exports = router;