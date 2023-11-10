const Login = require('../resources/login_keyword')
const Dashboard = require('../resources/dashboard_keyword')
const RewardPage = require('../pageobjects/rewards_page')
const CreateRewardPage = require('../pageobjects/create_rewards_page')
const common_data = require('../data/common_data')
const data = require('../data/rewards_page')

class RewardKeyword {
    async openRewardPageFromURL() {
        await CreateRewardPage.open(common_data.rewards_page)
    }

    async loginAsRewardModerator() {
        await Dashboard.loginAsRewardModerator()
    }

    async openRewardsPage() {
        await this.loginAsRewardModerator()
        await this.clickOnRewardsMenu()
    }

    async clickOnRewardsMenu() {
        await Dashboard.clickOnRewardsMenu()
    }

    async clickCreateNewReward() {
        await RewardPage.clickElement(RewardPage.createNewButton)
    }

    async enterRewardName(name) {
        await CreateRewardPage.inputText(
            CreateRewardPage.inputName,
            name
        )
    }

    async clickOnVoucherTypeNoCode() {
        await CreateRewardPage.clickElement(CreateRewardPage.voucherNoCodeOption)
    }

    async clickOnVoucherTypeSingle() {
        await CreateRewardPage.clickElement(CreateRewardPage.voucherSingleOption)
    }

    async clickOnVoucherTypeSystemGenerated() {
        await CreateRewardPage.clickElement(CreateRewardPage.voucherSystemGeneratedOption)
    }

    async clickOnVoucherTypeUserUpload() {
        await CreateRewardPage.clickElement(CreateRewardPage.voucherUserUploadOption)
    }

    async clickNextButton() {
        await CreateRewardPage.clickElement(CreateRewardPage.nextButton)
    }

    async clickSaveButton() {
        await CreateRewardPage.clickElement(CreateRewardPage.saveButton)
    }

    async chooseEndate(endate) {
        await CreateRewardPage.clickElement(CreateRewardPage.validityPeriodEndDateSelection)
        await CreateRewardPage.inputText(
            CreateRewardPage.validityPeriodEndDateInputDate,
            endate
        )
        await browser.keys('Enter')
    }

    async chooseRewardTypePrivate() {
        await CreateRewardPage.clickElement(CreateRewardPage.rewardDetailTypePrivate)
    }

    async createReward(reward_data) {
        await this.openRewardsPage()
        await this.clickCreateNewReward()
        await this.enterRewardName(reward_data.name)
        await this.clickNextButton()
        await this.chooseEndate(reward_data.validity_period.end_date.date)
        await this.clickNextButton()
        await this.clickSaveButton()
    }

    async voucherTypeOfCodeSelectionShouldBeDisplayed() {
        await expect(CreateRewardPage.voucherTypeOfCodeSelection).toBeExisting()
    }

    async voucherTypeOfCodeSelectionShouldNotBeDisplayed() {
        await expect(CreateRewardPage.voucherTypeOfCodeSelection).not.toBeExisting()
    }

    async voucherGenericCodeInputShouldBeDisplayed() {
        await expect(CreateRewardPage.voucherGenericCodeInput).toBeExisting()
    }

    async voucherGenericCodeInputShouldNotBeDisplayed() {
        await expect(CreateRewardPage.voucherGenericCodeInput).not.toBeExisting()
    }

    async voucherPrefixForVoucherCodeShouldBeDisplayed() {
        await expect(CreateRewardPage.voucherPrefixForVoucherCodeInput).toBeExisting()
    }

    async voucherPrefixForVoucherCodeShouldNotBeDisplayed() {
        await expect(CreateRewardPage.voucherPrefixForVoucherCodeInput).not.toBeExisting()
    }

    async voucherLengthOfCodeSelectionShouldBeDisplayed() {
        await expect(CreateRewardPage.voucherLengthOfCodeSelection).toBeExisting()
    }

    async voucherLengthOfCodeSelectionShouldNotBeDisplayed() {
        await expect(CreateRewardPage.voucherLengthOfCodeSelection).not.toBeExisting()
    }

    async voucherCodeFormatSelectionShouldBeDisplayed() {
        await expect(CreateRewardPage.voucherTypeOfCodeSelection).toBeExisting()
    }

    async voucherCodeFormatSelectionShouldNotBeDisplayed() {
        await expect(CreateRewardPage.voucherTypeOfCodeSelection).not.toBeExisting()
    }

    async voucherChooseFileShouldBeShow() {
        await expect(CreateRewardPage.voucherChooseFile).toBeExisting()
    }

    async voucherChooseFileShouldNotBeShow() {
        await expect(CreateRewardPage.voucherChooseFile).not.toBeExisting()
    }

    async firstResultShouldHaveName(name) {
        await expect(RewardPage.firstResultName).toHaveTextContaining(name)
    }

    async shouldShowAlertSuccessMessage() {
        await expect(CreateRewardPage.successMessageAlert).toBeExisting()
    }

    async shouldShowNameRequiredMessage() {
        await expect(CreateRewardPage.inputNameValidate).toBeExisting()
        await expect(CreateRewardPage.inputNameValidate).toHaveTextContaining(
            data.validate_message.name_is_required
        )
    }

    async shouldShowDateRequiredMessage() {
        await expect(CreateRewardPage.validityPeriodValidateMessage).toBeExisting()
        await expect(CreateRewardPage.validityPeriodValidateMessage).toHaveTextContaining(
            data.validate_message.start_end_date_required
        )
    }

    async shouldHaveStartDateTimeInValidityPeriodsSection() {
        await expect(CreateRewardPage.validityPeriodStartDateSelection).toBeExisting()
        await expect(CreateRewardPage.validityPeriodStartDateTimeSelection).toBeExisting()
    }

    async shouldHaveEndDateTimeInValidityPeriodsSection() {
        await expect(CreateRewardPage.validityPeriodEndDateSelection).toBeExisting()
        await expect(CreateRewardPage.validityPeriodEndDateTimeSelection).toBeExisting()
        await expect(CreateRewardPage.validityPeriodEndDateZoneSelection).toBeExisting()
    }

    async shouldBeInCreateRewardPage() {
        await expect(browser).toHaveUrlContaining("rewards/create")
    }

    async shouldRedirectToLoginPage() {
        await Login.shouldBeInTheLoginPage()
    }

    async tagSelectionShouldBeDisplayed() {
        await expect(CreateRewardPage.tagSelection).toBeExisting()
    }

    async tagSelectionShouldNotBeDisplayed() {
        await expect(CreateRewardPage.tagSelection).not.toBeExisting()
    }

    async categorySelectionShouldBeDisplayed() {
        await expect(CreateRewardPage.categorySelection).toBeExisting()
    }

    async categorySelectionShouldNotBeDisplayed() {
        await expect(CreateRewardPage.categorySelection).not.toBeExisting()
    }
}

module.exports = new RewardKeyword()