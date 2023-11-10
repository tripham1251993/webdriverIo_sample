module.exports = Object.freeze(
	{
		title: '//main//strong',
		create_new_button: '//main//button',
		language: {
			en: '//label[contains(@class, "ant-radio-button-wrapper") and span[text()="en"]]',
			th: '//label[contains(@class, "ant-radio-button-wrapper") and span[text()="th"]]',
			zh: '//label[contains(@class, "ant-radio-button-wrapper") and span[text()="zh"]]',
			vi: '//label[contains(@class, "ant-radio-button-wrapper") and span[text()="vi"]]',
			zh_hans: '//label[contains(@class, "ant-radio-button-wrapper") and span[text()="zh-Hans"]]',
			zh_hant: '//label[contains(@class, "ant-radio-button-wrapper") and span[text()="zh-Hant"]]'
		},
		rewards: {
			first_result: {
				name: {
					name: '//td[1]/a',
					id: '//td[1]/div[contains(@class, "styles__TableSecondaryText")]'
				},
				merchant: '//tr/td[2]',
				status: '//tr/td[3]/span',
				balance: '//tr/td[4]',
				selling_from: {
					date: '//tr/td[5]//div[contains(@class, "styles__TableMainText")]',
					time: '//tr/td[5]//div[contains(@class, "styles__TableSecondaryText")]'
				},
				selling_to: '//tr/td[6]',
				action: {
					popover_button: '//tr/td[7]//i[contains(@class, "anticon")]',
					edit_action: '//div[contains(@class, "ant-popover-inner-content")]//li[div[text()="Edit"]]',
					download_codes: '//div[contains(@class, "ant-popover-inner-content")]//li[div[text()="Download Codes"]]',
					duplicate_reward: '//div[contains(@class, "ant-popover-inner-content")]//li[div[text()="Duplicate Reward"]]',
					deactivate: '//div[contains(@class, "ant-popover-inner-content")]//li[div[text()="Deactivate"]]'
				}
			}
		},
		create_new_reward_page: {
			reward_details: {
				type: {
					public: '//input[@name="reward_publicity_type" and @value="public"]',
					private: '//input[@name="reward_publicity_type" and @value="private"]',
					system: '//input[@name="reward_publicity_type" and @value="system"]'
				},
				name: '//input[contains(@name, "name")]',
				name_validate: '//div[@style="color: red;"]',
				subtitle: '//input[contains(@name, "subtitle")]',
				discription: '//label[text()="Description"]//following::div[@aria-label="Edit text"][1]',
				steps_to_redeem: '//label[text()="Steps To Redeem"]//following::div[@aria-label="Edit text"][1]',
				terms_and_conditions: '//label[text()="Terms and Conditions"]//following::div[@aria-label="Edit text"][1]',
				tags: {
					options: '//label[text()="Tags"]//following::div[1]//i',
					item: '//ul/li[contains(@class, "select-dropdown-menu-item-active") and text()="__ITEM__"]'
				},
				categories: {
					options: '//label[text()="Categories"]//following::div[1]//*[name()="svg"]',
					item: '//div[contains(@class, "option") and label[text()="__ITEM__"]]/input'
				}
			},
			upload_photo: {
				upload_file_button: '//button[contains(@class, "btn-primary") and span[text()="Upload a File"]]',
				modal: {
					close_button: '//div[@class="ant-modal-content"]//button[@class="ant-modal-close"]',
					choose_file: '//div[@class="ant-modal-content"]//div/label[span[text()="Choose File"]]',
					cancel: '//div[@class="ant-modal-content"]//button[@type="button" and span[text()="Cancel"]]',
					insert: '//div[@class="ant-modal-content"]//button[@type="button" and span[text()="Insert Photo"]]'
				}
			},
			selling_period: {
				start_date: {
					select_date: '//div[label[@title="Start Date"]]//following::i[contains(@class, "anticon-calendar")][1]',
					input_date: '//input[contains(@class, "calendar-input")]',
					select_time: '//div[label[@title="Start Date"]]//following::i[contains(@class, "clock-circle")][1]',
					input_time: '//input[contains(@class, "time-picker-panel-input")]',
					select_zone: '//div[label[@title="Start Date"]]//following::div[contains(@class, "ant-select-selection__rendered")][1]',
					input_zone: '//div[text()="Pick Timezone"]//following::div//input[contains(@class, "search")]'
				},
				end_date: {
					select_date: '//div[label[@title="End Date"]]//following::i[contains(@class, "anticon-calendar")][1]',
					input_date: '//input[contains(@class, "calendar-input")]',
					select_time: '//div[label[@title="End Date"]]//following::i[contains(@class, "clock-circle")][1]',
					input_time: '//input[contains(@class, "time-picker-panel-input")]'
				}
			},
			merchant: {
				select: '//div[label[@title="Merchant"]]//following::span//div[contains(@class, "selection__rendered")]',
				input: '//div[label[@title="Merchant"]]//following::input[1]'
			},
			reward_display: {
				all_checkbox: '//div[@data-testid="reward-display"]//input[contains(@class, "checkbox-input")]'
			},
			selling_price: {
				add_selling_price: '//button[@type="button" and span[text()="Add Selling Price"]]',
				modal: {
					close_button: '//div[contains(@class, "ant-modal-content")]/button[contains(@class, "ant-modal-close")]',
					cash_select: '//div[contains(@class, "ant-modal-content")]//div[contains(@class, "select-selection__rendered")]',
					cash_item: '//li[contains(@class, "select-dropdown-menu-item") and text()="__ITEM__"]',
					price_input: '//div[contains(@class, "ant-modal-content")]//input[contains(@name, "price")]',
					point_input: '//div[contains(@class, "ant-modal-content")]//input[contains(@name, "point")]',
					identifer: '//div[contains(@class, "ant-modal-content")]//input[contains(@name, "identifier")]',
					cancel_button: '//div[contains(@class, "ant-modal-content")]//button[contains(@class, "ant-btn")][1]',
					add_price_button: '//div[contains(@class, "ant-modal-content")]//button[contains(@class, "ant-btn")][2]'
				}
			},
			custom_fields: {
				add_custom_fields: '//button[contains(@class, "btn-dashed")]',
				name_field: '//input[contains(@name, "custom_fields[__INDEX__].name")]',
				value_field: '//input[contains(@name, "custom_fields[__INDEX__].value")]',
				delete_field: '(//label[i[contains(@class, "anticon-delete")]])[__INDEX__]'
			},
			reward_value: {
				select: '//div[@data-testid="reward-value"]//div[contains(@role, "combobox")]',
				item: '//li[@role="option" and text()="__ITEM__"]',
				amount_input: '//div[@data-testid="reward-value"]//input[contains(@name, "reward_cost_amount")]'
			},
			voucher_code_setup: {
				no_code: '//label[span[text()="No Code"]]',
				single: '//label[span[text()="Single"]]',
				system_generated: '//label[span[text()="System Generated"]]',
				user_upload: '//label[span[text()="User Upload"]]',
				type_of_code_selection: '//div[@data-testid="voucher-code-setup"]//span/div/div[contains(@class, "ant-select-selection")]',
				generic_code_inpuct: '//div[@data-testid="voucher-code-setup"]//input[@name="generic_voucher_code"]',
				prefix_for_voucher_code_input: '//div[@data-testid="voucher-code-setup"]//input[@name="voucher_code_prefix"]',
				length_of_code_selection: '//div[@data-testid="voucher-code-setup"]/div[2]/div[2]/div[4]//span/div/div[contains(@class, "ant-select-selection")]',
				code_format_selection: '//div[@data-testid="voucher-code-setup"]/div[2]/div[2]/div[5]//span/div/div[contains(@class, "ant-select-selection")]',
				choose_file: '//div[@data-testid="voucher-code-setup"]//label[@for="file"]'
			},
			limits: {
				reward_limit: '//input[@name="campaign_lifetime_max_available"]',
				reward_limit_per_period: '//input[@name="campaign_interval_max_available"]',
				every_input: '//input[@name="campaign_interval_units"]',
				every_interval_selection: '//div[@data-testid="reward-limits"]//div[contains(@class, "ant-select-selection--single")]',
				interval_option: '/html/body/div[3]//li[text()="__ITEM__"]',
				display_checkbox: '//div[@data-testid="reward-limits"]//input[@type="checkbox"]'
			},
			user_limits: {
				user_limit: '//input[@name="campaign_lifetime_max_available"]',
				user_limit_per_period: '//input[@name="campaign_interval_max_available"]',
				every_input: '//input[@name="campaign_interval_units"]',
				every_interval_selection: '//div[@data-testid="user-limits"]//div[contains(@class, "ant-select-selection--single")]',
				interval_option: '/html/body/div[4]//li[text()="__ITEM__"]',
				display_checkbox: '//div[@data-testid="user-limits"]//input[@type="checkbox"]'
			},
			validity_period: {
				types: {
					period: '//div[@data-testid="validity-period"]//label[span[text()="PERIOD"]]',
					issuance_date: '//div[@data-testid="validity-period"]//label[span[text()="ISSUANCE DATE"]]',
					end_of_month: '//div[@data-testid="validity-period"]//label[span[text()="END OF MONTH"]]'
				},
				start_date: {
					select_date: '//div[@data-testid="validity-period"]/div[2]/div[2]/div[1]//input[@placeholder="Select date"]',
					select_time: '//div[@data-testid="validity-period"]/div[2]/div[2]/div[1]//input[@placeholder="Select time"]',
					input_date: '//input[contains(@class, "ant-calendar-input")]',
					input_time: '//input[contains(@class, "ant-time-picker-panel-input")]'
				},
				end_date: {
					select_date: '//div[@data-testid="validity-period"]/div[2]/div[2]/div[2]//input[@placeholder="Select date"]',
					select_time: '//div[@data-testid="validity-period"]/div[2]/div[2]/div[2]//input[@placeholder="Select time"]',
					input_date: '//input[contains(@class, "ant-calendar-input")]',
					input_time: '//input[contains(@class, "ant-time-picker-panel-input")]',
					select_zone: '//div[@data-testid="validity-period"]//div[contains(@class, "ant-select-selection__rendered")]',
					input_zone: '//div[text()="Pick Timezone"]//following::div//input[contains(@class, "search")]'
				},
				validate_message: '//label[@style="color: red;"]'
			},
			redemption_type: {
				online_option: '//div[@data-testid="redemption-type"]//label[contains(@class, "ant-radio-button-wrapper") and span[input[@value="online"]]]',
				offline_option: '//div[@data-testid="redemption-type"]//label[contains(@class, "ant-radio-button-wrapper") and span[input[@value="offline"]]]',
				merchant_pin_option: '//div[@data-testid="redemption-type"]//label[contains(@class, "ant-radio-button-wrapper") and span[input[@value="pin"]]]',
				online: {
					redemption_url: '//div[@data-testid="redemption-type"]//input[@name="redemption_url"]',
				},
				offline: {
					countdown_timer_units: '//div[@data-testid="redemption-type"]//input[@name="timer_units"]',
					countdown_select: '//div[@data-testid="redemption-type"]//div[@class="ant-select-selection-selected-value"]',
					countdown_item: '//li[@role="option" and text()="__ITEM__"]',
				}
			},
			activation_date: {
				start_date_select: '//div[input[contains(@class, "ant-calendar-picker-input")]]',
				start_date_input: '//input[contains(@class, "ant-calendar-input")]',
				time_select: '//span[input[contains(@class, "ant-time-picker-input")]]',
				time_input: '//input[contains(@class, "ant-time-picker-panel-input")]',
				timezone_select: '//div[@data-testid="reward-activation-date"]//div[@role="combobox"]',
				timezone_input: '//div[@data-testid="reward-activation-date"]//div[contains(@class,"ant-select-search__field")]'
			},
			steps_action: {
				cancel: '//div[@class="steps-action"]//button[span[text()="Cancel"]]',
				back: '//div[@class="steps-action"]//button[span[text()="Back"]]',
				next: '//div[@class="steps-action"]//button[span[text()="Next"]]',
				save: '//div[@class="steps-action"]//button[span[text()="Save"]]',
				save_as_draft: '//div[@class="steps-action"]//button[span[text()="Save as Draft"]]',
				schedule_launch_checkbox: '//div[@class="steps-action"]//input[@type="checkbox"]'
			},
			success_message: '//div[@class="ant-message"]//span[text()="Success"]'
		}
	})