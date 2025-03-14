class LoginPage {
  visit() {
    cy.visit('https://cyptrg-osondemand.orangehrm.com/auth/login'); 
  }

  enterUsername(username) {
    cy.get('input[name="username"]').clear().type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]').clear().type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }
}

export default LoginPage;
