class EmployeeListPage {
  navigateToEmployeeList() {
    cy.contains('span', 'PIM').click();
    cy.contains('a', 'Employee List').click();
  }

  searchByEmpNumber(empNumber) {
    cy.get(':nth-child(2) > .oxd-input').clear().type(empNumber);
    cy.get('button[type="submit"]').click();
  }

  clickOnEmployee(empNumber) {
    cy.contains(empNumber).click();
  }

  verifyEmployeeDetails(employee) {
    cy.get('input[name="firstName"]').should('have.value', employee.firstName);
  }
}

export default EmployeeListPage;
