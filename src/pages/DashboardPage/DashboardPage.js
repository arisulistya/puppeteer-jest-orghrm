const { globals } = require("../../../jest.config");
const { dashboard } = require("./DashboardLocator");

class DashboardPage {
    constructor(page) {
        this.page = page
    }

    async logoutFromApp() {
        await this.page.locator(dashboard.profileLogo).click();
        await this.page.locator(dashboard.logoutButton).click();
        try {
            await this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        } catch (error) {
            console.log(error);
        }
    }

    async verifyLogout() {
        const currentUrl = await this.page.url();
        await expect(currentUrl).toEqual(globals.baseUrl);
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    async navigateToAdmin() {
        await this.page.locator(dashboard.adminbutton).click();
        try {
            await this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = DashboardPage;