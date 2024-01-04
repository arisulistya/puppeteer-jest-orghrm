const { globals } = require("../../../jest.config")
const { admin } = require("./AdminLocator")
const data = require("./adminData.json")

class AdminPage {
    constructor(page) {
        this.page = page
    }

    async navigateToAddUser() {
        await this.page.locator(admin.addButton).click();
        try {
            await this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });
        } catch (error) {
            console.log(error);
        }
    }

    async addNewUser() {
        await this.page.locator(admin.userRoleSelect).click();
        await this.page.locator(admin.adminSpan).click();
        await this.page.locator(admin.statusSelect).click();
        await this.page.locator(admin.enabledSpan).click();
        await this.page.locator(admin.passwordInput).fill(data[0]["password"]);
        await this.page.waitForTimeout(2000);
        await this.page.locator(admin.userNameInput).fill(data[0]["name"]);
        await this.page.waitForTimeout(2000);
        await this.page.locator(admin.confirmPasswordInput).fill(data[0]["password"]);
        await this.page.waitForTimeout(2000);
        await this.page.locator(admin.employeeNameInput).fill(globals.employeeName);
        await this.page.waitForTimeout(2000);
        await this.page.locator(admin.employeeSpan).click();
        await this.page.waitForTimeout(1000);
        await this.page.locator(admin.saveButton).click();
        try {
            await this.page.waitForNavigation({ waitUntil: 'domcontentloaded' });
            await this.page.waitForTimeout(5000);
        } catch (error) {
            console.log(error);
        }
    }

    async verifyAddUser() {
        await this.page.locator(admin.searchInput).fill(data[0]["name"]);
        await this.page.locator(admin.searchButton).click();
        await this.page.waitForTimeout(5000);
        
        const textValue = await this.page.$eval(admin.searhResult, element => element.textContent);
        await expect(textValue).toBe(data[0]["name"]);
    }
}

module.exports = AdminPage;