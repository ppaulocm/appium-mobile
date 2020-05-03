exports.config = {
    runner: 'local',
    framework: 'cucumber',
    logLevel: 'silent',
    deprecationWarnings: true,
    outputDir: './test-report/output',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    specs: ['tests/features/**/*.feature'],
    suites: {
        connection: [
            'tests/features/Connection.feature'
        ],
        invite: [
            'tests/features/Invite.feature'
        ],
        nickname: [
            'tests/features/Nickname.feature'
        ],
        language: [
            'tests/features/Language.feature'
        ],
    },
    reporters: [
        'spec',
        [
            'allure',
            {
                outputDir: './test-report/allure-result/',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
            },
        ],
    ],
    cucumberOpts: {
        requireModule: ['@babel/register'],
        backtrace: false,
        compiler: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        colors: true,
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tags: [],
        timeout: 100000,
        ignoreUndefinedDefinitions: false,
        tagExpression: 'not @skip'
    },

    // ====================
    // Appium Configuration
    // ====================
    services: ['appium'],
    appium: {
        command: 'appium',
    },

    port: 4723,

    afterStep(uri, feature, scenario) {
        if (scenario.error) {
            driver.takeScreenshot()
        }
    },

    afterScenario() {
        console.log('Test finished now. Generating Report....')
        console.log('App will close after 10s from now...')
        driver.pause(10000)
        driver.closeApp()
    },
};

