const puppeteer = require(`puppeteer`);

// Вернуть созданный экземпляр браузера
async function getBrowser() {
  try {
    return await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox',
        '--disable-setuid-sandbox'],

      // ignoreHTTPSErrors: true,
    });
  } catch (err) {
    console.error(`Не удалось создать экземпляр браузера => : ${err}`);
  }
}

module.exports = getBrowser;