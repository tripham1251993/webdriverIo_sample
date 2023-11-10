const Dashboard = require('../resources/dashboard_keyword')
const data = require('../data/common_data')

describe('Test Dashboard Page', () => {
    it('Login with account has only create reward permission and it cannot see other menu except reward menu', async () => {
        await Dashboard.loginAsRewardModerator()
        await Dashboard.shouldHaveRewardsMenuOnly()
    })

    it('Account has create rewards cannot access to other menu through URL', async () => {
        await Dashboard.loginAsRewardModerator()
        await Dashboard.open(data.campaigns_page)
        await Dashboard.shouldSeeErrorIfHaveNoPermissionToAccessPage()
    })
})