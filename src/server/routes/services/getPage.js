// Загрузить и вернуть страницу
async function getPage(browser, url) {
  try {
    const page = await browser.newPage();
    await page.goto(url);
    return page;
  } catch (err) {
    console.error(`Ошибка загрузки страницы => : ${err}`);
  }
}

module.exports = getPage;