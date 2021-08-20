require('dotenv').config();
const puppeteer = require(`puppeteer`);

// Вернуть созданный экземпляр браузера
async function getBrowser() {
  try {
    return await puppeteer.launch({
      args: ['--no-sandbox'],
      headless: process.env.NODE_ENV === 'development'
        ? false // dev - localhost
        : true, // prod - Heroku
    });
  } catch (err) {
    console.error(`Не удалось создать экземпляр браузера => : ${err}`);
  }
}

module.exports = getBrowser;