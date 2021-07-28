const puppeteer = require('puppeteer');
const browser = await puppeteer.launch()
const page = await browser.newPage()
const navigationPromise = page.waitForNavigation()

await navigationPromise

await page.goto('https://erp.kname.edu.ua/time-table/teacher?type=0')

await page.setViewport({ width: 1600, height: 825 })

await page.waitForSelector('#select2-timetableform-chairid-container')
await page.click('#select2-timetableform-chairid-container')

await page.waitForSelector('.select2-container--below > .selection > .select2-selection > .select2-selection__arrow > b')
await page.click('.select2-container--below > .selection > .select2-selection > .select2-selection__arrow > b')

await navigationPromise

await page.waitForSelector('.select2-container--below > .selection > .select2-selection > .select2-selection__arrow > b')
await page.click('.select2-container--below > .selection > .select2-selection > .select2-selection__arrow > b')

await navigationPromise

await page.waitForSelector('.select2-container--below > .selection > .select2-selection > .select2-selection__arrow > b')
await page.click('.select2-container--below > .selection > .select2-selection > .select2-selection__arrow > b')

await navigationPromise

await browser.close()