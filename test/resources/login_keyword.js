const LoginPage = require('../pageobjects/login_page')
const expected_data = require("../data/login_page")
const data = require('../data/common_data')

class LoginKeyword {
    async login(email, password) {
        await LoginPage.open()
        await LoginPage.login(email, password)
    }

    async loginAsAdmin() {
        await this.login(data.admin_email, data.admin_password)
    }

    async shouldBeInTheLoginPage() {
        await expect(LoginPage.inputEmail).toBeExisting()
        await expect(LoginPage.inputPassword).toBeExisting()
    }

    async shouldShowSuccessMessage() {
        await expect(LoginPage.successMessage).toBeExisting()
        await expect(LoginPage.successMessage).toHaveTextContaining(
            expected_data.success_message);
    }

    async shouldShowEmailRequiredMessage() {
        await expect(LoginPage.emailValidateMessage).toBeExisting()
        await expect(LoginPage.emailValidateMessage).toHaveTextContaining(
            expected_data.emmail_required
        )
    }

    async shouldShowInvalidEmailMessage() {
        await expect(LoginPage.emailValidateMessage).toBeExisting()
        await expect(LoginPage.emailValidateMessage).toHaveTextContaining(
            expected_data.invalid_email
        )
    }

    async shouldShowPasswordRequiredMessage() {
        await expect(LoginPage.passwordValidateMessage).toBeExisting()
        await expect(LoginPage.passwordValidateMessage).toHaveTextContaining(
            expected_data.password_required
        )
    }

    async shouldShowInvalidEmailOrPasswordAlert() {
        await expect(LoginPage.infoMessage).toBeExisting()
        await expect(LoginPage.infoMessage).toHaveTextContaining(
            expected_data.invalid_info_message)
        await expect(LoginPage.errorMessage).toBeExisting()
        await expect(LoginPage.errorMessage).toHaveTextContaining(
            expected_data.invalid_error_message)
    }
}

module.exports = new LoginKeyword()