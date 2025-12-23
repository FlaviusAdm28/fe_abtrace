const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  watchForFilesChanges: false,
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  waitForAnimation: true,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 60000,
  video: true,
  failOnStatusCode: false,

    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            return config;
        },
        baseUrl: 'https://main.d31l8y34egt1nb.amplifyapp.com',
        specPattern: 'cypress/e2e/**/*.cy.{js,ts}',
    },
})