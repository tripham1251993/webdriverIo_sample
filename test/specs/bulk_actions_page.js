const BulkActions = require('../resources/bulk_actions_keyword')
const data = require('../data/bulk_actions_page')

describe('Test Bulk Actions Page', () => {
    it('A non-authorized user should not have access to the bulk action page', async () => {
        await BulkActions.openBulkActionsPageFromURL()
        await BulkActions.shouldBeRedirectToLoginPage()
    })

    it('Upload file with extension not in list (.txt, .xlsx, .csv) should receive error alert', async () => {
        await BulkActions.startUploadFile(data.zip_file_path)
        await BulkActions.alertShouldBeShow(data.upload_message.error)
    })

    it('Upload file with extension in list (.txt, .xlsx, .csv) should receive success alert', async () => {
        await BulkActions.startUploadFile(data.csv_file_path)
        await BulkActions.alertShouldBeShow(data.upload_message.success)
    })

    it('After upload file successfully, the file list should reflect the newly uploaded file', async () => {
        await BulkActions.startUploadFile(data.csv_file_path)
        await BulkActions.alertShouldBeShow(data.upload_message.success)
        await BulkActions.openBulkActionsPageFromURL()
        await BulkActions.latestFileUploadNameShouldBe(data.csv_file_name)
    })
})