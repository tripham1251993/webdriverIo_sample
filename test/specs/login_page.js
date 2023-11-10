const Login = require('../resources/login_keyword')


describe('Test Login Page', () => {
    it('Should login with valid credentials', async () => {
        await Login.loginAsAdmin()
        await Login.shouldShowSuccessMessage()
    })

    it('Should get required validate message when not enter email and password', async () => {
        await Login.login('', '')
        await Login.shouldShowEmailRequiredMessage()
        await Login.shouldShowPasswordRequiredMessage()
    })

    it('Should get invalid email adderss when enter invalid email', async () => {
        await Login.login("invalid", "invalid-password")
        await Login.shouldShowInvalidEmailMessage()
    })

    it('Should not login when enter invalid email and password', async () => {
        await Login.login("example@example.com", "example-password")
        await Login.shouldShowInvalidEmailOrPasswordAlert()
    })
})
