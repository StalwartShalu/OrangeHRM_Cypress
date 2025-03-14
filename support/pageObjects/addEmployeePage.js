class AddEmployeePage {
  navigateToAddEmployee() {
    cy.contains('span', 'PIM').click();
    cy.contains('a', 'Add Employee').click();
  }

  enterFirstName(firstName) {
    cy.get('input[name="firstName"]').clear().type(firstName);
  }

  enterLastName(lastName) {
    cy.get('input[name="lastName"]').clear().type(lastName);
  }
  enableLoginDetails() {
    cy.get('.oxd-switch-input').click();
  }
  enterUsername(username) {
    cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(username);
  }

  enterPassword(password) {
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(password);
  }

  confirmPassword(password) {
    cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(password);
  }

  uploadPhoto(photoPath) {
    cy.get('input[type="file"]').attachFile(photoPath);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  getEmpNumber() {
    
    return cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)').invoke('val');
  }

  verifySuccessMessage() {
    cy.contains('Successfully Saved').should('be.visible');
  }
}

export default AddEmployeePage;
