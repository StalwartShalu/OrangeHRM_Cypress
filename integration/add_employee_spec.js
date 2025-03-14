import LoginPage from '../support/pageObjects/loginPage';
import AddEmployeePage from '../support/pageObjects/addEmployeePage';

describe('Add Employees', () => {
  const loginPage = new LoginPage();
  const addEmployeePage = new AddEmployeePage();

  beforeEach(() => {
    loginPage.visit();
    cy.fixture('example.json').as('users');
  });

  it('should login and add employees', function() {
    // Login as admin
    loginPage.enterUsername('RaviRavi');
    loginPage.enterPassword('@@Pass!23'); 
    loginPage.submit();

    // Add each employee
    this.users.forEach((user) => {
      addEmployeePage.navigateToAddEmployee();
      addEmployeePage.enterFirstName(user.firstName);
      addEmployeePage.enterLastName(user.lastName);
      addEmployeePage.enableLoginDetails();
      addEmployeePage.enterUsername(user.username);
      addEmployeePage.enterPassword(user.password);
      addEmployeePage.confirmPassword(user.password);

      // Upload photo
      const photoPath = '../fixtures/photo.jpg'; 
      addEmployeePage.uploadPhoto(photoPath);

      addEmployeePage.submit();

      // Verify success message
      addEmployeePage.verifySuccessMessage();

      // Get employee number and update emp_data.json
      addEmployeePage.getEmpNumber().then((empNumber) => {
        cy.writeFile('cypress/fixtures/emp_data.json', { firstName: user.firstName, empNumber: empNumber }, { flag: 'a+' });
      });
    });
  });
});
