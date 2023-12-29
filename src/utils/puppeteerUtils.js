const puppeteer = require('puppeteer');

async function launchBrowser(headless = false) {
  const browser = await puppeteer.launch({
    headless: headless,
    defaultViewport: { width: 1200, height: 800 },
    devtools: false,
  });
  return browser;
}

async function closeBrowser(browser) {
  await browser.close();
}

async function existingPage(browser) {
  const pages = await browser.pages();
  return pages[0];
}

async function createPage(browser) {
  const page = await browser.newPage();
  return page;
}

async function closePage(page) {
  await page.close();
}

async function gotoPage(page) {
    await page.goto(global.baseUrl);
}

async function teardown(page, browser) {
    await closePage(page);
    await closeBrowser(browser);
}

module.exports = {
    launchBrowser,
    closeBrowser,
    createPage,
    gotoPage,
    closePage,
    teardown,
    existingPage,
  
};
