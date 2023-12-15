const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
    viewportHeight: 1280,
    viewportWidth: 1200,
    baseUrl: 'https://www.cypress.io/',
  },
});
