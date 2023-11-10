const Reward = require('../resources/rewards_keyword')
const data = require('../data/rewards_page')

describe('Test Reward Page', () => {
    it("A non-authorized user should not have access to the reward detail/edit page even from URL", async () => {
        await Reward.openRewardPageFromURL()
        await Reward.shouldRedirectToLoginPage()
    })

    it('Clicking "+ Create New" button should lead to reward creation page', async () => {
        await Reward.openRewardsPage()
        await Reward.clickCreateNewReward()
        await Reward.shouldBeInCreateRewardPage()
    })

    it('A reward validity period should have both start and end dates', async () => {
        await Reward.openRewardsPage()
        await Reward.clickCreateNewReward()
        await Reward.enterRewardName(
            data.create_reward.reward_data.name
        )
        await Reward.clickNextButton()
        await Reward.shouldHaveStartDateTimeInValidityPeriodsSection()
        await Reward.shouldHaveEndDateTimeInValidityPeriodsSection()
    })

    it('Name validate message should show when leave the name input is empty', async () => {
        await Reward.openRewardsPage()
        await Reward.clickCreateNewReward()
        await Reward.clickNextButton()
        await Reward.shouldShowNameRequiredMessage()
    })

    it('Date validate message should show when leave start date or end date is empty', async () => {
        await Reward.openRewardsPage()
        await Reward.clickCreateNewReward()
        await Reward.enterRewardName(
            data.create_reward.reward_data.name
        )
        await Reward.clickNextButton()
        await Reward.clickNextButton()
        await Reward.shouldShowDateRequiredMessage()
    })

    it('A successful submission only happens when the payload contains all mandatory information.', async () => {
        await Reward.openRewardsPage()
        await Reward.clickCreateNewReward()
        await Reward.createReward(data.create_reward.reward_data)
        await Reward.shouldShowAlertSuccessMessage()
    })

    it('A new created rewards should show in reward list in the first row of table', async () => {
        await Reward.openRewardsPage()
        await Reward.clickCreateNewReward()
        await Reward.createReward(data.create_reward.reward_data)
        await Reward.shouldShowAlertSuccessMessage()
        await Reward.clickOnRewardsMenu()
        await Reward.firstResultShouldHaveName(data.create_reward.reward_data.name)
    })

    it('When change from Single option to No Code option should clear respective information from the form payload', async () => {
        await Reward.openRewardsPage()
        await Reward.clickCreateNewReward()
        await Reward.enterRewardName(
            data.create_reward.reward_data.name
        )
        await Reward.clickNextButton()
        await Reward.clickOnVoucherTypeSingle()
        await Reward.voucherTypeOfCodeSelectionShouldBeDisplayed()
        await Reward.voucherGenericCodeInputShouldBeDisplayed()
        await Reward.clickOnVoucherTypeNoCode()
        await Reward.voucherTypeOfCodeSelectionShouldNotBeDisplayed()
        await Reward.voucherGenericCodeInputShouldNotBeDisplayed()
    })

    it('When change from System Generated option to No Code option should clear respective information from the form payload', async () => {
        await Reward.openRewardsPage()
        await Reward.clickCreateNewReward()
        await Reward.enterRewardName(
            data.create_reward.reward_data.name
        )
        await Reward.clickNextButton()
        await Reward.clickOnVoucherTypeSystemGenerated()
        await Reward.voucherTypeOfCodeSelectionShouldBeDisplayed()
        await Reward.voucherPrefixForVoucherCodeShouldBeDisplayed()
        await Reward.voucherLengthOfCodeSelectionShouldBeDisplayed()
        await Reward.voucherCodeFormatSelectionShouldBeDisplayed()
        await Reward.clickOnVoucherTypeNoCode()
        await Reward.voucherTypeOfCodeSelectionShouldNotBeDisplayed()
        await Reward.voucherPrefixForVoucherCodeShouldNotBeDisplayed()
        await Reward.voucherLengthOfCodeSelectionShouldNotBeDisplayed()
        await Reward.voucherCodeFormatSelectionShouldNotBeDisplayed()
    })

    it('When change from User Upload option to No Code option should clear respective information from the form payload', async () => {
        await Reward.openRewardsPage()
        await Reward.clickCreateNewReward()
        await Reward.enterRewardName(
            data.create_reward.reward_data.name
        )
        await Reward.clickNextButton()
        await Reward.clickOnVoucherTypeUserUpload()
        await Reward.voucherTypeOfCodeSelectionShouldBeDisplayed()
        await Reward.voucherChooseFileShouldBeShow()
        await Reward.clickOnVoucherTypeNoCode()
        await Reward.voucherTypeOfCodeSelectionShouldNotBeDisplayed()
        await Reward.voucherChooseFileShouldNotBeShow()
    })

    it('When the type is private, tag and categories should disappear', async () => {
        await Reward.openRewardsPage()
        await Reward.clickCreateNewReward()
        await Reward.tagSelectionShouldBeDisplayed()
        await Reward.categorySelectionShouldBeDisplayed()
        await Reward.chooseRewardTypePrivate()
        await Reward.tagSelectionShouldNotBeDisplayed()
        await Reward.categorySelectionShouldNotBeDisplayed()
    })
})