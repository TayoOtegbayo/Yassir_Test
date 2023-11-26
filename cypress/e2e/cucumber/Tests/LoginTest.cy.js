/// <reference types="cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import login from "../Pages/LoginPage.cy";
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

beforeEach("", () => {
  Given("I navigate to the Website", () => {
    login.enterURL();
  });
});

When("I entered valid credential", (datatable) => {
  datatable.hashes().forEach((element) => {
    login.enterUserNamePassword(element.email, element.validpassword);
  });
});
And("User click on sign in button", () => {
  login.clickSubmitButton();
});
Then("Validate the title after login", () => {
  login.verifyPageTitle();
});

When("I entered invalid password credential", (datatable) => {
  datatable.hashes().forEach((element) => {
    login.enterUserNamePassword(element.email, element.invalidpassword);
  });
});
And("User click on sign in button", () => {
  login.clickSubmitButton();
});
Then("Validate the error message after login attempt", () => {
  login.verifyErrorMessage();
});

When("I did not enter any credential", () => {});

And("User click on sign in button", () => {
  login.clickSubmitButton();
});
Then("Validate the error messages after login attempt", () => {
  login.verifyEmptyCredentialsErrorMessage();
});

When("I did not enter any password credential", (datatable) => {
  datatable.hashes().forEach((element) => {
    login.enterUsername(element.email);
    login.enterPassword();
  });
});

And("User click on sign in button", () => {
  login.clickSubmitButton();
});
Then("Validate the password error messages after login attempt", () => {
  login.verifyEmptyCredentialsErrorMessage();
});

/*When("I entered valid credential", (datatable) => {
  datatable.hashes().forEach((element) => {
    login.enterUserNamePassword(element.email, element.validpassword);
  });
});*/
