const DashboardPage = require('../pageobjects/dashboard_page')
const Login = require('../resources/login_keyword')
const data = require('../data/dashboard_page')

class DashboardKeyword {
    async loginAsRewardModerator() {
        await Login.login(
            data.account_only_rewards_permission.email,
            data.account_only_rewards_permission.password
        )
    }

    async open(page) {
        await DashboardPage.open(page)
    }

    async clickOnRewardsMenu() {
        await expect(DashboardPage.rewardsMenuItem).toBeExisting()
        await DashboardPage.clickMenuItem(DashboardPage.rewardsMenuItem)
    }

    async clickOnBulkActionsMenu() {
        await expect(DashboardPage.bulkActionsMenuItem).toBeExisting()
        await DashboardPage.clickMenuItem(DashboardPage.bulkActionsMenuItem)
    }

    async shouldHaveRewardsMenuOnly() {
        const menuItems = await DashboardPage.listMenuItems
        await expect(menuItems).toBeElementsArrayOfSize(1)
        await expect(DashboardPage.rewardsMenuItem).toBeExisting()
    }

    async shouldSeeErrorIfHaveNoPermissionToAccessPage() {
        await expect(DashboardPage.errorTitle).toBeExisting()
        await expect(DashboardPage.errorContent).toBeExisting()
        await expect(DashboardPage.errorTitle).toHaveTextContaining(
            data.do_not_have_permission_error.title
        )
        await expect(DashboardPage.errorContent).toHaveTextContaining(
            data.do_not_have_permission_error.content
        )
    }
}

module.exports = new DashboardKeyword()