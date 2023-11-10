const data = require("../data/common_data")
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(page) {
        return browser.url(`${data.base_url}${page}`)
    }
}
