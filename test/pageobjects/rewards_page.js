const locators = require('../locators/rewards_page')
const Page = require('./page')

class RewardPage extends Page {
    get title() {
        return $(locators.title)
    }

    get createNewButton() {
        return $(locators.create_new_button)
    }

    get enLanguage() {
        return $(locators.language.en)
    }

    get thLanguage() {
        return $(locators.language.th)
    }

    get zhLanguage() {
        return $(locators.language.zh)
    }

    get viLanguage() {
        return $(locators.language.vi)
    }

    get zhHansLanguage() {
        return $(locators.language.zh_hans)
    }

    get zhHantLanguage() {
        return $(locators.language.zh_hant)
    }

    get firstResultName() {
        return $(locators.rewards.first_result.name.name)
    }

    async clickElement(element) {
        const item = await element
        item.scrollIntoView()
        item.click()
    }

}

module.exports = new RewardPage()