const {launchBrowser, closeBrowser, existingPage} = require('../utils/puppeteerUtils');
const LoginPage = require('../pages/LoginPage/LoginPage');
const { globals } = require('../../jest.config');
const DashboardPage = require('../pages/DashboardPage/DashboardPage');
const AdminPage = require('../pages/AdminPage/AdminPage');

/*
----------------------------------------------
Base setup for Jest to run the test case
----------------------------------------------
*/

// Globals variables
let browser
let page

// Before each tests suite
beforeAll(async () => {
    browser = await launchBrowser();
    page = await existingPage(browser);
    await page.goto(globals.baseUrl);
    try {
        await this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        await this.page.waitForTimeout(2000);
    } catch (error) {
        console.log(error);
    }
});

// After each tests suite
afterAll(async () => {
    await closeBrowser(browser);
});

/*
----------------------------------------------
Test Suites / Test Plan
----------------------------------------------
*/
describe('Regression Test Suites', () => {
    /*
    ----------------------------------------------
    All Test Cases within this suite
    ----------------------------------------------
    */
   
    it('Login to App', async () => {
        const loginPage = new LoginPage(page);
        await loginPage.loginToApp();
        await loginPage.verifyLogin();
    });

    it('Create an Admin Account', async () => {
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.navigateToAdmin();

        const adminPage = new AdminPage(page);
        await adminPage.navigateToAddUser();
        await adminPage.addNewUser();
        await adminPage.verifyAddUser();
    })

    it('Logout from App', async () => {
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.logoutFromApp();
        await dashboardPage.verifyLogout();
    });

});