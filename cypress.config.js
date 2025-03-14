module.exports = {
  e2e: {
    baseUrl: 'https://cyptrg-osondemand.orangehrm.com',
    fixturesFolder: 'cypress/fixtures',
    supportFile: 'cypress/support/index.js',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    specPattern: 'cypress/integration/*.js', // Ensure this pattern matches your spec files
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      adminUsername: 'admin', // replace with admin username
      adminPassword: 'admin123' // replace with admin password
    }
  }
};
