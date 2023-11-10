const start = new Date()
const end = new Date()
end.setDate(end.getDate() + 30)
const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

const start_date = start.getDate() > 10 ? `${start.getDate()}` : `0${start.getDate()}`
const start_month = months[start.getMonth()]
const start_year = start.getFullYear()

const end_date = end.getDate() > 10 ? `${end.getDate()}` : `0${end.getDate()}`
const end_month = months[end.getMonth()]
const end_year = end.getFullYear()

module.exports = Object.freeze({
    validate_message: {
        name_is_required: 'Rewards must have a name.',
        start_end_date_required: 'Start date & end date required'
    },
    create_reward: {
        reward_data: {
            type: 'public',
            name: 'Test Public Reward',
            subtitle: 'Test Subtitle',
            description: 'test description',
            steps_to_redeem: 'Sample steps to redeem',
            terms_and_conditions: 'Saple terms and conditions',
            tags: [
                "tag1"
            ],
            categories: [
                "category1"
            ],
            selling_period: {
                start_date: {
                    date: `${start_date} ${start_month} ${start_year}`,
                    time: "12:00",
                    zone: "Ho Chi Minh"
                },
                end_date: {
                    date: `${end_date} ${end_month} ${end_year}`,
                    time: "12:00"
                }
            },
            code_type: "No Code",
            limits: {
                reward_limit: 100,
                reward_limit_per_period: 10,
                every: 1,
                period_type: 'Days'
            },
            user_limits: {
                user_limit: 100,
                user_limit_per_period: 10,
                every: 1,
                period_type: 'Days'
            },
            validity_period: {
                type: 'PERIOD',
                start_date: {
                    date: `${start_date} ${start_month} ${start_year}`,
                    time: "12:00"
                },
                end_date: {
                    date: `${end_date} ${end_month} ${end_year}`,
                    time: "12:00",
                    zone: "Ho Chi Minh"
                }
            },
            redemption_type: {
                option: 'OFFLINE',
                countdown: 100,
                type: 'second'
            },
            activation_date: {
                date: `${start_date} ${start_month} ${start_year}`,
                time: "12:00",
                zone: "Ho Chi Minh"
            }
        }
    }
})