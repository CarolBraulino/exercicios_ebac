const { join } = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');

exports.config = {
    //hostname: 'localhost',
    //port: 4723,
    //path: '/wd/hub',
    user: "mariacbraulino_SCRjJc",
    key: "ohimU4fCsJFVs6QW9Xs5",
    //services: ['appium'],
    services: ['browserstack'],
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        // "platformName": "Android",
        // "platformVersion": "8.1",
        // "deviceName": "ebac-que",
        // "automationName": "UiAutomator2",
        // "app": join(process.cwd(), './app/android/loja-ebac.apk'),
        // "appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity'
        // 'newCommandTimeout': 240

        'app' : 'bs://1d44a3ceff369f6722a0bfa788521e86e7b2de7e',
        'device' : 'Samsung Galaxy Note 20',
        'os_version' : '10.0',
        'project' : 'Meu primeiro projeto em DeviceFarm',
        'build' : '1',
        'name': 'teste_login'
    }],

    waitforTimeout: 40000,
    mochaOpts: {
        timeout: 90000
    },
    reporters: ['spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
        [video, {
            saveAllVideos: true,       // If true, also saves videos for successful test cases
            videoSlowdownMultiplier: 50, // Higher to get slower videos, lower for faster videos [Value 1-100]
        }],
        ['allure', {
            outputDir: './_results_/allure-raw',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }],
    ],

    onComplete: function () {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function (exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },
    afterStep: function (test, scenario, { error, duration, passed }) {
        if (error) {
            driver.takeScreenshot();
        }
    }
}