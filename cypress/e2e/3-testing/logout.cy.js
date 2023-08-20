describe("LogOut", () => {
  const pageURL = "http://127.0.0.1:5500/";

  const USER_DATA = {
    email: "eb_workflow@stud.noroff.no",
    password: "qwerty123456",
  };

  const inputs = {
    logInButton: '#registerForm [data-auth="login"]',
    emailInput: "#loginEmail",
    passwordInput: "#loginPassword",
    submitButton: "#loginForm button[type=submit]",
    logOutButton: '[data-auth="logout"]',
  };

  it("should successfully log in a user", () => {
    cy.visit(pageURL);

    cy.get(inputs.logInButton).should("be.visible").click();

    cy.wait(500);
    cy.get(inputs.emailInput).type(USER_DATA.email);
    cy.get(inputs.passwordInput).type(USER_DATA.password);
    cy.get(inputs.submitButton).click();

    cy.wait(2000);
    cy.get(inputs.logOutButton).click();
  });
});
