const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://elearning.globalcollege.co.ke/lecturer/adminlogin',
    specPattern: "**/*.feature",
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
