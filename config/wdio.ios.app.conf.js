const { join } = require('path');
const { config } = require('./wdio.shared.conf');

config.cucumberOpts.require = ['./tests/steps/**/app*.steps.js'];

config.capabilities = [
    {
        platformName: 'iOS',
        maxInstances: 1,
        'appium:deviceName': 'iPhone X',
        'appium:platformVersion': '12.2',
        'appium:orientation': 'PORTRAIT',
        'appium:automationName': 'XCUITest',
        // 'appium:app': join(
        //     process.cwd(),
        //     '{applicationPath}', 
        // )     
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
    },
];

exports.config = config;
