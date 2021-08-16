const express = require('express');
const path = require('path');
const createError = require('http-errors');

const router = express.Router();

// Загрузить index.html
router.get('/',
  async function (req, res, next) {
    try {
      res.sendFile(path.join(__dirname, '../index.html'));
    } catch (err) {
      console.error(`Ошибка при обработке запроса / => : ${err}`);
      next(createError());
    }
  });

module.exports = router;