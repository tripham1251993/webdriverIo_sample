const Login = require('../resources/login_keyword')
const Dashboard = require('../resources/dashboard_keyword')
const BulkActionPage = require('../pageobjects/bulk_actions_page')
const common_data = require('../data/common_data')

class BulkActionKeyword {
    async loginAsAdmin() {
        await Login.loginAsAdmin()
    }

    async openBulkActionsPageFromURL() {
        await BulkActionPage.open(common_data.bulk_actions_page)
    }

    async clickBulkActionsMenu() {
        await Dashboard.clickOnBulkActionsMenu()
    }

    async clickUploadButton() {
        await BulkActionPage.clickElement(BulkActionPage.uploadButton)
    }

    async uploadFile(file_path) {
        await expect(BulkActionPage.fileUploadInput).toBeExisting()
        const fileUpload = await BulkActionPage.fileUploadInput
        await browser.execute(
            // assign style to elem in the browser
            (el) => el.style.display = 'block',
            // pass in element so we don't need to query it again in the browser
            fileUpload
        );
        await fileUpload.waitForDisplayed();
        const remoteFilePath = await browser.uploadFile(file_path)
        await BulkActionPage.fileUploadInput.setValue(remoteFilePath)
    }

    async clickStartUpload() {
        await BulkActionPage.clickElement(BulkActionPage.startUploadButton)
    }

    async startUploadFile(file_name) {
        await this.loginAsAdmin()
        await this.clickBulkActionsMenu()
        await this.clickUploadButton()
        await this.uploadFile(file_name)
        await this.clickStartUpload()
    }

    async alertShouldBeShow(message) {
        const alert = await BulkActionPage.getAlertByMessage(message)
        await this.waitUntilElementIsVisible(alert)
        await expect(alert).toBeExisting()
    }

    async latestFileUploadNameShouldBe(name) {
        await expect(BulkActionPage.latestRecordName).toBeExisting()
        await expect(BulkActionPage.latestRecordName).toHaveTextContaining(name)
    }

    async titleShouldBe(title) {
        await expect(BulkActionPage.title).toBeExisting()
        await expect(BulkActionPage.title).toHaveTextContaining(title)
    }

    async shouldBeRedirectToLoginPage() {
        await Login.shouldBeInTheLoginPage()
    }

    async waitUntilElementIsVisible(element, timeout = 10000) {
        await element.waitForExist(timeout)
        await element.waitForDisplayed(timeout)
    }

}

module.exports = new BulkActionKeyword()