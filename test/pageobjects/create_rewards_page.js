const locators = require('../locators/rewards_page')
const Page = require('./page')

class CreateNewRewardPage extends Page {
    get title() {
        return $(locators.title)
    }

    get rewardDetailTypePublic() {
        return $(locators.create_new_reward_page.reward_details.type.public)
    }

    get rewardDetailTypePrivate() {
        return $(locators.create_new_reward_page.reward_details.type.private)
    }

    get rewardDetailTypeSystem() {
        return $(locators.create_new_reward_page.reward_details.type.system)
    }

    get inputName() {
        return $(locators.create_new_reward_page.reward_details.name)
    }

    get inputNameValidate() {
        return $(locators.create_new_reward_page.reward_details.name_validate)
    }

    get inputSubtitle() {
        return $(locators.create_new_reward_page.reward_details.subtitle)
    }

    get inputDescription() {
        return $(locators.create_new_reward_page.reward_details.description)
    }

    get inputStepsToRedeem() {
        return $(locators.create_new_reward_page.reward_details.steps_to_redeem)
    }

    get inputTermsAndConditions() {
        return $(locators.create_new_reward_page.reward_details.terms_and_conditions)
    }

    get tagSelection() {
        return $(locators.create_new_reward_page.reward_details.tags.options)
    }

    get categorySelection() {
        return $(locators.create_new_reward_page.reward_details.categories.options)
    }

    get uploadAFileButton() {
        return $(locators.create_new_reward_page.upload_photo.upload_file_button)
    }

    get closeUploadButton() {
        return $(locators.create_new_reward_page.upload_photo.modal.close_button)
    }

    get chooseFileButton() {
        return $(locators.create_new_reward_page.upload_photo.modal.choose_file)
    }

    get cancelUploadButton() {
        return $(locators.create_new_reward_page.upload_photo.modal.cancel)
    }

    get insertPhotoButton() {
        return $(locators.create_new_reward_page.upload_photo.modal.insert)
    }

    get selectStartDate() {
        return $(locators.create_new_reward_page.selling_period.start_date.select_date)
    }

    get inputStartDateCalendar() {
        return $(locators.create_new_reward_page.selling_period.start_date.input_date)
    }

    get selectStartTime() {
        return $(locators.create_new_reward_page.selling_period.start_date.select_time)
    }

    get inputStartTime() {
        return $(locators.create_new_reward_page.selling_period.start_date.input_time)
    }

    get selectTimezone() {
        return $(locators.create_new_reward_page.selling_period.start_date.select_zone)
    }

    get inputTimezone() {
        return $(locators.create_new_reward_page.selling_period.start_date.input_zone)
    }

    get selectEndDate() {
        return $(locators.create_new_reward_page.selling_period.end_date.select_date)
    }

    get inputEndDateCalendar() {
        return $(locators.create_new_reward_page.selling_period.end_date.input_date)
    }

    get selectEndTime() {
        return $(locators.create_new_reward_page.selling_period.end_date.select_time)
    }

    get inputEndTime() {
        return $(locators.create_new_reward_page.selling_period.end_date.input_time)
    }

    get selectMerchant() {
        return $(locators.create_new_reward_page.merchant.select)
    }

    get inputMerchant() {
        return $(locators.create_new_reward_page.merchant.input)
    }

    get mapRewardToAllCheckbox() {
        return $(locators.create_new_reward_page.reward_display.all_checkbox)
    }

    get addSellingPriceButton() {
        return $(locators.create_new_reward_page.selling_price.add_selling_price)
    }

    get loyaltyCashSelection() {
        return $(locators.create_new_reward_page.selling_price.modal.cash_select)
    }

    get loyaltyCashInput() {
        return $(locators.create_new_reward_page.selling_price.modal.price_input)
    }

    get loyaltyPointInput() {
        return $(locators.create_new_reward_page.selling_price.modal.point_input)
    }

    get loyaltyIdentifier() {
        return $(locators.create_new_reward_page.selling_price.modal.identifer)
    }

    get loyaltyCloseButton() {
        return $(locators.create_new_reward_page.selling_price.modal.close_button)
    }

    get loyaltyCancelButton() {
        return $(locators.create_new_reward_page.selling_price.modal.cancel_button)
    }

    get loyaltyAddPriceButton() {
        return $(locators.create_new_reward_page.selling_price.modal.add_price_button)
    }

    get costPriceSelect() {
        return $(locators.create_new_reward_page.reward_value.select)
    }

    get costPriceAmountInput() {
        return $(locators.create_new_reward_page.reward_value.amount_input)
    }

    get nextButton() {
        return $(locators.create_new_reward_page.steps_action.next)
    }

    get backButton() {
        return $(locators.create_new_reward_page.steps_action.back)
    }

    get cancelButton() {
        return $(locators.create_new_reward_page.steps_action.cancel)
    }

    get saveButton() {
        return $(locators.create_new_reward_page.steps_action.save)
    }

    get saveAsDraft() {
        return $(locators.create_new_reward_page.steps_action.save_as_draft)
    }

    get scheduleLaunchCheckbox() {
        return $(locators.create_new_reward_page.steps_action.schedule_launch_checkbox)
    }

    get voucherNoCodeOption() {
        return $(locators.create_new_reward_page.voucher_code_setup.no_code)
    }

    get voucherSingleOption() {
        return $(locators.create_new_reward_page.voucher_code_setup.single)
    }

    get voucherSystemGeneratedOption() {
        return $(locators.create_new_reward_page.voucher_code_setup.system_generated)
    }

    get voucherUserUploadOption() {
        return $(locators.create_new_reward_page.voucher_code_setup.user_upload)
    }

    get voucherTypeOfCodeSelection() {
        return $(locators.create_new_reward_page.voucher_code_setup.type_of_code_selection)
    }

    get voucherGenericCodeInput() {
        return $(locators.create_new_reward_page.voucher_code_setup.generic_code_inpuct)
    }

    get voucherPrefixForVoucherCodeInput() {
        return $(locators.create_new_reward_page.voucher_code_setup.prefix_for_voucher_code_input)
    }

    get voucherLengthOfCodeSelection() {
        return $(locators.create_new_reward_page.voucher_code_setup.length_of_code_selection)
    }

    get voucherCodeFormatSelection() {
        return $(locators.create_new_reward_page.voucher_code_setup.code_format_selection)
    }

    get voucherChooseFile() {
        return $(locators.create_new_reward_page.voucher_code_setup.choose_file)
    }

    get rewardLimitInput() {
        return $(locators.create_new_reward_page.limits.reward_limit)
    }

    get rewardLimitPerPeriod() {
        return $(locators.create_new_reward_page.limits.reward_limit_per_period)
    }

    get rewardLimitEveryInput() {
        return $(locators.create_new_reward_page.limits.every_input)
    }

    get rewardLimitPeriodType() {
        return $(locators.create_new_reward_page.limits.interval_option)
    }

    get rewardLimitDisplayCheckbox() {
        return $(locators.create_new_reward_page.limits.display_checkbox)
    }

    get userLimitInput() {
        return $(locators.create_new_reward_page.user_limits.user_limit)
    }

    get userLimitPerPeriod() {
        return $(locators.create_new_reward_page.user_limits.user_limit_per_period)
    }

    get userLimitEveryInput() {
        return $(locators.create_new_reward_page.user_limits.every_input)
    }

    get userLimitPeriodType() {
        return $(locators.create_new_reward_page.user_limits.interval_option)
    }

    get userLimitDisplayCheckbox() {
        return $(locators.create_new_reward_page.user_limits.display_checkbox)
    }

    get validityPeriodTypePeriod() {
        return $(locators.create_new_reward_page.validity_period.types.period)
    }

    get validityPeriodTpeIssuanceDate() {
        return $(locators.create_new_reward_page.validity_period.types.issuance_date)
    }

    get validityPeriodTypeEndOfMonth() {
        return $(locators.create_new_reward_page.validity_period.types.end_of_month)
    }

    get validityPeriodStartDateSelection() {
        return $(locators.create_new_reward_page.validity_period.start_date.select_date)
    }

    get validityPeriodStartDateInputDate() {
        return $(locators.create_new_reward_page.validity_period.start_date.input_date)
    }

    get validityPeriodStartDateTimeSelection() {
        return $(locators.create_new_reward_page.validity_period.start_date.select_time)
    }

    get validityPeriodStartDateInputTime() {
        return $(locators.create_new_reward_page.validity_period.start_date.input_time)
    }

    get validityPeriodEndDateSelection() {
        return $(locators.create_new_reward_page.validity_period.end_date.select_date)
    }

    get validityPeriodEndDateInputDate() {
        return $(locators.create_new_reward_page.validity_period.end_date.input_date)
    }

    get validityPeriodEndDateTimeSelection() {
        return $(locators.create_new_reward_page.validity_period.end_date.select_time)
    }

    get validityPeriodEndDateInputTime() {
        return $(locators.create_new_reward_page.validity_period.end_date.input_time)
    }

    get validityPeriodEndDateZoneSelection() {
        return $(locators.create_new_reward_page.validity_period.end_date.select_zone)
    }

    get validityPeriodEndDateInputZone() {
        return $(locators.create_new_reward_page.validity_period.end_date.input_zone)
    }

    get validityPeriodValidateMessage() {
        return $(locators.create_new_reward_page.validity_period.validate_message)
    }

    get activationDateSelection() {
        return $(locators.create_new_reward_page.activation_date.start_date_select)
    }

    get activationDateInputDate() {
        return $(locators.create_new_reward_page.activation_date.start_date_input)
    }

    get activationDateTimeSelection() {
        return $(locators.create_new_reward_page.activation_date.time_select)
    }

    get activationDateInputTime() {
        return $(locators.create_new_reward_page.activation_date.time_input)
    }

    get activationDateZoneSelection() {
        return $(locators.create_new_reward_page.activation_date.timezone_select)
    }

    get activationDateInputZone() {
        return $(locators.create_new_reward_page.activation_date.timezone_input)
    }

    get successMessageAlert() {
        return $(locators.create_new_reward_page.success_message)
    }

    async selectTag(tagName) {
        await this.clickElement($(locators.create_new_reward_page.reward_details.tags.item.replace("__ITEM__", tagName)))
    }

    async selectCategory(categoryName) {
        await this.clickElement($(locators.create_new_reward_page.reward_details.categories.item.replace("__ITEM__", categoryName)))
    }

    async selectCostPrice(costPriceName) {
        await this.clickElement($(locators.create_new_reward_page.reward_value.item.replace("__ITEM__", costPriceName)))
    }

    async selectCash(cashName) {
        await this.clickElement($(locators.create_new_reward_page.selling_price.modal.cash_item.replace("__ITEM__", cashName)))
    }

    async clickElement(element) {
        const item = await element
        item.scrollIntoView()
        item.click()
    }

    async selectRewardPeriodType(periodName) {
        const item = await $(locators.create_new_reward_page.limits.interval_option.replace("__ITEM__", periodName))
        item.click()
    }

    async selectUserPeriodType(periodName) {
        const item = await $(locators.create_new_reward_page.user_limits.interval_option.replace("__ITEM__", periodName))
        item.click()
    }

    async inputText(element, value) {
        const item = await element
        item.scrollIntoView()
        await item.setValue(value)
    }

}

module.exports = new CreateNewRewardPage()
