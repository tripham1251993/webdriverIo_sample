rm -rf allure-*
npx wdio
allure generate --clean && allure open
