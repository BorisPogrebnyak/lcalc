const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

const routerIndex = require('./routes/index');
const routerDepartments = require('./routes/departments');
const routerTeachersAndDateRange = require('./routes/teachersAndDateRange');
const routerLessons = require('./routes/lessons');
const routerPuppeteerClose = require('./routes/puppeteerClose');

const port = normalizePort(process.env.PORT || '3001');

express()
  .use(logger('dev'))

  .use('/', routerIndex)
  .use('/departments', routerDepartments)
  .use('/teachers', routerTeachersAndDateRange)
  .use('/lessons', routerLessons)
  .use('/close', routerPuppeteerClose)

  .use((req, res, next) => next(createError(404)))
  .use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.send(`<h1 align=center>Ошибка ${err.status}</h1>`);
  })
  .listen(port,
    () => console.log(`Express server слушает по http://localhost:${port}/`));

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) { // Именованный канал
    return val;
  }
  if (port >= 0) { // Номер порта
    return port;
  }
  return false;
}