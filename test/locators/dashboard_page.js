module.exports = Object.freeze({
    left_menu: {
        top: {
            avatar: '//div[contains(@class, "tenant-display")]//div[contains(@class, "avatar")]',
            name_display: '//div[contains(@class, "tenant-display")]//div[contains(@class, "name-display")]',
            user_detail_popup: {
                email: '//div[contains(@class, "ant-popover") and @role="tooltip"]//div[@data-testid="UserMenuContent"]/div[1]/div/div[2]',
                active_status: '//div[contains(@class, "ant-popover") and @role="tooltip"]//div[@data-testid="UserMenuContent"]/div[1]/div/div[4]',
                logout: '//div[contains(@class, "ant-popover") and @role="tooltip"]//div[@data-testid="UserMenuLogout"]'
            }
        },
        midde: {
            list_menu: '//li[contains(@role, "menuitem")]',
            dashboard: '//li[@data-key="business_intelligence"]',
            reports: '//li[@data-key="reports"]',
            rewards: '//li[@data-key="rewards"]',
            campaigns: '//li[@data-key="campaigns"]',
            loyalty: '//li[@data-key="loyalties"]',
            rules: '//li[@data-key="transaction_rules"]',
            merchants: '//li[@data-key="merchants"]',
            customers: '//li[@data-key="customer_management"]',
            bulk_actions: '//li[@data-key="bulk_actions"]',
            settings: '//li[@data-key="settings"]',
        },
        bottom: {
            toggle_menu: '//div[@class="ant-layout-sider-trigger"]'
        }
    },
    main: {
        error: {
            title: '//main//h1',
            content: '//main//a'
        }
    }
})