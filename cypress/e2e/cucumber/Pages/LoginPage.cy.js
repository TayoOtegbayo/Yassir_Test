class LoginPage {
  enterURL() {
    cy.visit("/");
  }
  enterUserNamePassword(username, password) {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    return this;
  }

  enterPassword() {
    return cy.get('input[name="password"]').type("{backspace}");
  }

  enterUsername(username) {
    return cy.get('input[name="username"]').type(username);
  }
  clickSubmitButton() {
    cy.get('[type="submit"]').eq(0).click();
    return this;
  }
  verifyPageTitle() {
    return cy
      .url()
      .should(
        "eq",
        "https://elearning.globalcollege.co.ke/lecturer/Dashboard/index"
      );
  }

  verifyErrorMessage() {
    return cy
      .get(".alert")
      .should("be.visible")
      .and("have.text", "Invalid email or password");
  }

  verifyEmptyCredentialsErrorMessage() {
    return cy
      .get(".alert")
      .should("be.visible")
      .and(
        "have.text",
        "Password must contains an uppercase and a special character"
      );
  }
}
const login = new LoginPage();
export default login;
