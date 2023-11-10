# perx automated testing
# Usage
## Installation
- Install nodejs version: 16.15.1+
- Install java and set JAVA_HOME
- Navigate to project directory
- Install command:
```bash
npm install
npm install -g allure-commandline
```

## Structure

    .
    ├── allure-report        # [Optional], reports generated from allure, should ignoge when push
    ├── allure-results       # [Optional], running result files generated from allure, used to generate html report
    ├── node_modules         # Contains test data
    ├── reports              # Contains reports image that manual created
    ├── test                 # Contains libs that can be called in the test resources
        ├── data             # Contains data file for test suites
        ├── files            # Contains files used to upload to server
        ├── locators         # Contains locators of elements in web page
        ├── pageobjects      # Contains PageObject model that help to work with web page
        ├── resources        # Contains keyword that used in test suites
        ├── specs            # Contains your test suite files
    ├── package-lock.json    # Generated by npm
    ├── package.json         # Contains settings and dependency librarries
    ├── run_headless.sh      # helper to run test in unbutu server
    ├── run_helper.sh        # All test cases will be stored here under test suite
    └── wdio.config          # Contains all environment config as environment variable


## Run Test
### Setting to run with browser
- Navigate to project directory and open `wdio.cfg.js` and search for `capabilities`. I already setting up for chrome, firefox and msedge
- If you want to run on which browser just uncomment that browser setting, and comment the other one
- If you want to run on multiple browser just uncomment other browser setting. It would run on both browsers in your config file

### Running command
- Navigate to project directory
- Run command:
```bash
npx wdio
```
- Or you can run by helper file
- Run with xvfb in headless mode
```bash
chmod a+x run_headless.sh
./run_headless.sh
```
- Normal run and see report after running complete
```bash
chmod a+x run_helper.sh
./run_helper.sh
```

- Sample result:
```bash
 "spec" Reporter:
------------------------------------------------------------------
[chrome 103.0.5060.66 windows #0-0] Running: chrome (v103.0.5060.66) on windows
[chrome 103.0.5060.66 windows #0-0] Session ID: 209c90db43aa2dd4220dab13316fb24d
[chrome 103.0.5060.66 windows #0-0]
[chrome 103.0.5060.66 windows #0-0] » \test\specs\bulk_actions_page.js
[chrome 103.0.5060.66 windows #0-0] Test Bulk Actions Page
[chrome 103.0.5060.66 windows #0-0]    ✓ A non-authorized user should not have access to the bulk action page
[chrome 103.0.5060.66 windows #0-0]    ✓ Upload file with extension not in list (.txt, .xlsx, .csv) should receive error alert
[chrome 103.0.5060.66 windows #0-0]    ✓ Upload file with extension in list (.txt, .xlsx, .csv) should receive success alert
[chrome 103.0.5060.66 windows #0-0]    ✓ After upload file successfully, the file list should reflect the newly uploaded file
[chrome 103.0.5060.66 windows #0-0]
[chrome 103.0.5060.66 windows #0-0] 4 passing (46.3s)
------------------------------------------------------------------
[chrome 103.0.5060.66 windows #0-1] Running: chrome (v103.0.5060.66) on windows
[chrome 103.0.5060.66 windows #0-1] Session ID: c3ce148f87f42c0e09c4c9a86e9a9f9e
[chrome 103.0.5060.66 windows #0-1]
[chrome 103.0.5060.66 windows #0-1] » \test\specs\dashboard_page.js
[chrome 103.0.5060.66 windows #0-1] Test Dashboard Page
[chrome 103.0.5060.66 windows #0-1]    ✓ Login with account has only create reward permission and it cannot see other menu except reward menu
[chrome 103.0.5060.66 windows #0-1]    ✓ Account has create rewards cannot access to other menu through URL
[chrome 103.0.5060.66 windows #0-1]
[chrome 103.0.5060.66 windows #0-1] 2 passing (15.4s)
------------------------------------------------------------------
[chrome 103.0.5060.66 windows #0-2] Running: chrome (v103.0.5060.66) on windows
[chrome 103.0.5060.66 windows #0-2] Session ID: 2f0c3ecf1d8923a7fadd8d9a47f0f60a
[chrome 103.0.5060.66 windows #0-2]
[chrome 103.0.5060.66 windows #0-2] » \test\specs\login_page.js
[chrome 103.0.5060.66 windows #0-2] Test Login Page
[chrome 103.0.5060.66 windows #0-2]    ✓ Should login with valid credentials
[chrome 103.0.5060.66 windows #0-2]    ✓ Should get required validate message when not enter email and password
[chrome 103.0.5060.66 windows #0-2]    ✓ Should get invalid email adderss when enter invalid email
[chrome 103.0.5060.66 windows #0-2]    ✓ Should not login when enter invalid email and password
[chrome 103.0.5060.66 windows #0-2]
[chrome 103.0.5060.66 windows #0-2] 4 passing (15.7s)
------------------------------------------------------------------
[chrome 103.0.5060.66 windows #0-3] Running: chrome (v103.0.5060.66) on windows
[chrome 103.0.5060.66 windows #0-3] Session ID: edcd2692cc34441df827fec306743f73
[chrome 103.0.5060.66 windows #0-3]
[chrome 103.0.5060.66 windows #0-3] » \test\specs\rewards_page.js
[chrome 103.0.5060.66 windows #0-3] Test Reward Page
[chrome 103.0.5060.66 windows #0-3]    ✓ A non-authorized user should not have access to the reward detail/edit page even from URL
[chrome 103.0.5060.66 windows #0-3]    ✓ Clicking "+ Create New" button should lead to reward creation page
[chrome 103.0.5060.66 windows #0-3]    ✓ A reward validity period should have both start and end dates
[chrome 103.0.5060.66 windows #0-3]    ✓ Name validate message should show when leave the name input is empty
[chrome 103.0.5060.66 windows #0-3]    ✓ Date validate message should show when leave start date or end date is empty
[chrome 103.0.5060.66 windows #0-3]    ✓ A successful submission only happens when the payload contains all mandatory information.
[chrome 103.0.5060.66 windows #0-3]    ✓ A new created rewards should show in reward list in the first row of table
[chrome 103.0.5060.66 windows #0-3]    ✓ When change from Single option to No Code option should clear respective information from the form payload
[chrome 103.0.5060.66 windows #0-3]    ✓ When change from System Generated option to No Code option should clear respective information from the form payload
[chrome 103.0.5060.66 windows #0-3]    ✓ When change from User Upload option to No Code option should clear respective information from the form payload
[chrome 103.0.5060.66 windows #0-3]
[chrome 103.0.5060.66 windows #0-3] 10 passing (2m 15.8s)


Spec Files:      4 passed, 4 total (100% completed) in 00:04:04
```

## Generate Report And View
- To view reports in HTML. Navigate to project directory then run command:
```bash
allure generate --clean && allure open
```
