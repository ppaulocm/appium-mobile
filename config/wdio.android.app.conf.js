const { join } = require('path');
const { config } = require('./wdio.shared.conf');

console.log(config.language)
console.log(config.locale)
// ============
// Specs
// ============
config.cucumberOpts.require = ['./tests/steps/**/*.steps.js'];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        deviceName: 'MOTOG5',
        platformVersion: '8',
        automationName: 'UiAutomator2',
        appPackage: "com.jogatina.tranca",
        appActivity: "com.jogatina.menu.Splash",
        language: config.language,
        locale: config.locale,
        // language: config.language,
        // locale: config.locale,
        // 'appium:app': join(
        //     process.cwd(),
        //     './apps/Android-NativeDemoApp-0.2.1.apk',
        // )        
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        // With these settings the application will not be closed between tests
        'appium:noReset': true,
        'appium:fullReset': false,
        'appium:dontStopAppOnReset': true,
        'appium:newCommandTimeout': 60,
    },
];

exports.config = config;
