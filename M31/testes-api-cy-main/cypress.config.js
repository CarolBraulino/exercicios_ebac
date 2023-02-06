const { defineConfig } = require('cypress');
const registerReportPortalPlugin = require('@reportportal/agent-js-cypress/lib/plugin');

module.exports = defineConfig({
  reporter: '@reportportal/agent-js-cypress',
  reporterOptions: {
    endpoint: "https://demo.reportportal.io/api/v1",
    token: "25f773c5-625b-4b0a-a83f-77684129b5b2",
    launch: "Testes de API Cypress",
    project: "carolbraulino_personal",
    description: "Exercicios do M31",
  },
  e2e: {
    setupNodeEvents(on, config) {
      return registerReportPortalPlugin(on, config);
    },
  },
});
module.exports = {
  reporter: "@reportportal/agent-js-cypress",

  reporterOptions: {
    endpoint: "https://demo.reportportal.io/api/v1",
    token: "25f773c5-625b-4b0a-a83f-77684129b5b2",
    launch: "Testes de API Cypress",
    project: "carolbraulino_personal",
    description: "Exercicios do M31",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
