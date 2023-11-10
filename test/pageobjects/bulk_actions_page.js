const locators = require('../locators/bulk_actions_page')
const Page = require('./page')

class BulkActionsPage extends Page {
    get title() {
        return $(locators.title)
    }

    get uploadButton() {
        return $(locators.upload_button)
    }

    get closeModalButton() {
        return $(locators.modal.close_button)
    }

    get fileUploadInput() {
        return $(locators.modal.file_upload_input)
    }

    get startUploadButton() {
        return $(locators.modal.upload_button)
    }

    get latestRecordName() {
        return this.getNameAtRow(1)
    }

    async clickElement(element) {
        const item = await element
        item.scrollIntoView()
        item.click()
    }

    getAlertByMessage(message) {
        return $(locators.upload_message.replace('__MESSAGE__', message))
    }

    getNameAtRow(index) {
        return $(locators.table.file_name.replace("__INDEX__", `${index}`))
    }
}

module.exports = new BulkActionsPage()