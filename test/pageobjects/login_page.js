const common_data = require('../data/common_data')
const locators = require("../locators/login_page")
const Page = require('./page')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail() {
        return $(locators.emaiL_input);
    }

    get inputPassword() {
        return $(locators.password_input);
    }

    get btnLogin() {
        return $(locators.login_button);
    }

    get infoMessage() {
        return $(locators.info_message)
    }

    get errorMessage() {
        return $(locators.error_message)
    }

    get successMessage() {
        return $(locators.success_message)
    }

    get emailValidateMessage() {
        return $(locators.email_validate_message)
    }

    get passwordValidateMessage() {
        return $(locators.password_validate_message)
    }

    async enterEmail(email){
        await this.inputEmail.setValue(email)
    }

    async enterPassword(password){
        await this.inputPassword.setValue(password)
    }

    async clickLoginButton(){
        const button = await this.btnLogin.$('..')
        button.click()
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using email and password
     */
    async login(email, password) {
        await this.enterEmail(email)
        await this.enterPassword(password)
        await this.clickLoginButton()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open(common_data.signin_page)
    }
}

module.exports = new LoginPage()