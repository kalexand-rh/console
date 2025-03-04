const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotsFolder: '../../../gui_test_screenshots/cypress/screenshots',
  videosFolder: '../../../gui_test_screenshots/cypress/videos',
  video: true,
  reporter: '../../../node_modules/cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  fixturesFolder: 'fixtures',
  defaultCommandTimeout: 30000,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  e2e: {
    // TODO: see https://issues.redhat.com/browse/CONSOLE-3781
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // eslint-disable-next-line global-require
      return require('../../integration-tests-cypress/plugins/index.js')(on, config);
    },
    specPattern: 'tests/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: '../../integration-tests-cypress/support/index.ts',
    baseUrl: 'http://localhost:9000',
    testIsolation: false,
  },
});
