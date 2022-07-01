/// <reference types="cypress" />

const { tabNavigation, setDebuggingPort } = require('../support/utils/tabNavigation');

module.exports = (on, config) => {

	on('before:browser:launch', (browser = {}, launchOptions) => {
		if (browser.name === 'chrome' || browser.name === 'chromium') {
			const debuggingPort = launchOptions.args.find(
				(arg) => arg.slice(0, 23) === '--remote-debugging-port',
			);
			setDebuggingPort(debuggingPort.split('='));
		}
		return launchOptions;
	});
	on('task', {
		tabNavigation
	});

}

// https://docs.cypress.io/plugins/directory

/*
  cypress-drag-drop
  cypress-file-upload
  cypress-xpath
  cypress-wait-until
  cypress-iframe
*/