// xpath locators
module.exports = Object.freeze({
    emaiL_input: '//input[@id="email"]',
    password_input: '//input[@id="password"]',
    login_button: '//button[@type="submit"]//span[text()="Login"]',
    forgot_password_link: '//a[contains(@href, "/dashboard/pwd")]',
    info_message: '//div[contains(@class, "ant-message-info")]//span',
    error_message: '//div[contains(@class, "ant-message-error")]//span',
    success_message: '//div[contains(@class, "ant-message-success")]//span',
    email_validate_message: '//form/div[1]//div[@class="ant-form-explain"]',
    password_validate_message: '//form/div[2]//div[@class="ant-form-explain"]'
})
