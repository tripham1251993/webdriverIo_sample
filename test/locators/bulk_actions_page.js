module.exports = Object.freeze({
    title: '//main/strong',
    upload_button: '//button[i[contains(@class, "anticon-upload")]]',
    modal: {
        close_button: '//div[contains(@class, "ant-modal")]//button[contains(@class, "ant-modal-close")]',
        action_type_select: '//div[contains(@class, "ant-modal")]//div[contains(@role,"combobox")]',
        item: '//li[@role="option" and text()="__ITEM__"]',
        upload_name_file: '//div[contains(@class, "ant-modal")]//span[contains(@class,"ant-upload-list-item-name")]',
        remove_file_icon: '//div[contains(@class, "ant-modal")]//a[contains(@title,"Remove file")]',
        download_sample: '//div[contains(@class, "ant-modal")]//div/a',
        file_upload_input: '//input[@type="file"]',
        cancel_button: '//div[contains(@class, "ant-modal-footer")]//button[span[text()="Cancel"]]',
        upload_button: '//div[contains(@class, "ant-modal-footer")]//button[span[text()="Upload"]]'
    },
    table: {
        action_name: {
            name: '//tr[__INDEX__]/td/div[contains(@class, "styles__TableMainText")]',
            id: '//tr[__INDEX__]/td/div[contains(@class, "styles__TableSecondaryText")]'
        },
        file_name: '//tr[__INDEX__]/td[@class][2]',
        user: '//tr[__INDEX__]/td[3]',
        status: '//tr[__INDEX__]/td[4]/span',
        processed_at: {
            date: '//tr[__INDEX__]/td[5]//div[contains(@class, "styles__TableMainText")]',
            time: '//tr[__INDEX__]/td[5]//div[contains(@class, "styles__TableSecondaryText")]'
        }
    },
    upload_message: '//div[@class="ant-message"]//span[text()="__MESSAGE__"]'
})