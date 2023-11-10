const locators = require('../locators/dashboard_page')
const Page = require('./page')

class DashboardPage extends Page {
    get userAvatar() {
        return $(locators.left_menu.top.avatar)
    }

    get nameDisplay() {
        return $(locators.left_menu.top.name_display)
    }

    get emailInUserDetailPopup() {
        return $(locators.left_menu.top.user_detail_popup.email)
    }

    get activateStatusInUserDetailPopup() {
        return $(locators.left_menu.top.user_detail_popup.active_status)
    }

    get logoutButton() {
        return $(locators.left_menu.top.user_detail_popup.logout)
    }

    get listMenuItems() {
        return $$(locators.left_menu.midde.list_menu)
    }

    get dashboardMenuItem() {
        return $(locators.left_menu.midde.dashboard)
    }

    get reportsMenuItem() {
        return $(locators.left_menu.midde.reports)
    }

    get rewardsMenuItem() {
        return $(locators.left_menu.midde.rewards)
    }

    get campaignsMenuItem() {
        return $(locators.left_menu.midde.campaigns)
    }

    get loyaltyMenuItem() {
        return $(locators.left_menu.midde.loyalty)
    }

    get rulesMenuItem() {
        return $(locators.left_menu.midde.rules)
    }

    get merchantsMenuItem() {
        return $(locators.left_menu.midde.merchants)
    }

    get customersMenuItem() {
        return $(locators.left_menu.midde.customers)
    }

    get bulkActionsMenuItem() {
        return $(locators.left_menu.midde.bulk_actions)
    }

    get settingsMenuItem() {
        return $(locators.left_menu.midde.settings)
    }

    get toggleMenu() {
        return $(locators.left_menu.bottom.toggle_menu)
    }

    get errorTitle(){
        return $(locators.main.error.title)
    }

    get errorContent(){
        return $(locators.main.error.content)
    }

    async clickMenuItem(menuitem){
        const item = await menuitem
        item.scrollIntoView()
        item.click()
    }

}

module.exports = new DashboardPage()
