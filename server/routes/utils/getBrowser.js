const puppeteer = require(`puppeteer`);

// Вернуть созданный экземпляр браузера
async function getBrowser() {
  console.log('getBrowser puppeteer: ', puppeteer);
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