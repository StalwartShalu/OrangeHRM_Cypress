import LoginPage from '../support/pageObjects/loginPage';

describe('Verify Menu Links', () => {
    const loginPage = new LoginPage();

    beforeEach(() => {
        loginPage.visit();
    });

    it('should verify menu links for admin user', () => {
        // Login as admin
        loginPage.enterUsername('RaviRavi'); 
        loginPage.enterPassword('@@Pass!23'); 
        loginPage.submit();

        // Verify left menu links for admin user
        const adminLinks = [
            'Admin',
            'PIM',
            'Leave',
            'Time',
            'Recruitment',
            'My Info',
            'Performance',
            'Dashboard',
            'Directory',
            'Maintenance',
            'Buzz'
        ];

        adminLinks.forEach((link) => {
            cy.contains(link).should('be.visible');
        });

        // Log out
        cy.get('.oxd-userdropdown-tab').click();
        cy.contains('Logout').click();
    });

    it('should verify menu links for newly added users', () => {
        cy.fixture('example.json').then((users) => {
            users.forEach((user) => {
                    loginPage.enterUsername(user.username);
                    loginPage.enterPassword(user.password);
                    loginPage.submit();

                    // Verify left menu links for newly added user
                    const userLinks = [
                        'Leave',
                        'Time',
                        'My Info',
                        'Performance',
                        'Dashboard',
                        'Directory',
                        'Buzz'
                    ];

                    userLinks.forEach((link) => {
                        cy.contains(link).should('be.visible');
                    });

                    // Log out
                    cy.get('.oxd-userdropdown-tab').click();
                    cy.contains('Logout').click();
            });
        });
    });
});


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false;
  });
