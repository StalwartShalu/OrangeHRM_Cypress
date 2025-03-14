import LoginPage from '../support/pageObjects/loginPage';
import EmployeeListPage from '../support/pageObjects/employeeListPage';

describe('Verify Employee Details', () => {
  const loginPage = new LoginPage();
  const employeeListPage = new EmployeeListPage();

  beforeEach(() => {
    loginPage.visit();
    cy.fixture('emp_data.json').as('employees');
  });

  it('should login and verify employee details', function() {
    // Login as admin
    loginPage.enterUsername('RaviRavi'); 
    loginPage.enterPassword('@@Pass!23'); 
    loginPage.submit();

    // Verify each employee
    this.employees.forEach((employee) => {
      if (employee && employee.empNumber) {
        employeeListPage.navigateToEmployeeList();
        employeeListPage.searchByEmpNumber(employee.empNumber);
        employeeListPage.clickOnEmployee(employee.empNumber);
        employeeListPage.verifyEmployeeDetails(employee);
      }
    });
  });
});
