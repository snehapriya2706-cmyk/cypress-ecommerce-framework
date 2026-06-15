const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
/*const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: '5pmreo',
  reporter: 'cypress-mochawesome-reporter', //
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports
      {
        pageLoadTimeout: 120000
      }
    },
  },
  });

  export default defineConfig({
  e2e: {
    allowCypressEnv: false
  }
})
/*export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // or whatever your app runs on
  }
});*/
