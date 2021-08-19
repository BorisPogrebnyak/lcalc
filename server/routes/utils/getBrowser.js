const puppeteer = require(`puppeteer`);

// Вернуть созданный экземпляр браузера
async function getBrowser() {
  try {
    return await puppeteer.launch({
      args: ['--no-sandbox'],
      // headless: false, // Heroku - не работает
    });
  } catch (err) {
    console.error(`Не удалось создать экземпляр браузера => : ${err}`);
  }
}

module.exports = getBrowser;