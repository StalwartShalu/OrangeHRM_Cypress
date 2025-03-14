import LoginPage from '../support/pageObjects/loginPage';

describe('Login Tests', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login with different usernames and passwords', () => {
    cy.fixture('emp_data.json').then((users) => {
      users.forEach((user) => {
        loginPage.enterUsername(user.username);
        loginPage.enterPassword(user.password);
        loginPage.submit();
       
      });
    });
  });
});
