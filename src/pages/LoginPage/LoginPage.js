const { globals } = require("../../../jest.config.js")
const { login } = require("./LoginLocator.js")
const data = require("./loginData.json")

class LoginPage {
    constructor(page) {
        this.page = page
    }

    async loginToApp() {
        await this.page.locator(login.usernameInput).fill(data.users[0].username);
        await this.page.locator(login.passwordInput).fill(data.users[0].password);
        await this.page.locator(login.loginButton).click();
        try {
            await this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });
            await this.page.waitForTimeout(2000);
        } catch (error) {
            console.log(error);
        }
    }

    async verifyLogin() {
        const currentUrl = await this.page.url();
        await expect(currentUrl).toEqual(globals.dashboardUrl);
        await this.page.waitForTimeout(2000);
    }


}

module.exports = LoginPage;