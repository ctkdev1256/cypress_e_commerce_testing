import { faker } from '@faker-js/faker'

/** This option use for a Page Object Design framework example:
import User from "../users/User";
import RegisterPage from "../pages/RegisterPage";
*/

it('Register a user', () => {

    /** his option use for a Page Object Design framework example:
    const user = new User();
	const registerPage = new RegisterPage();
	registerPage.load();
	registerPage.register(user);
     */

    // Go to baseUrl/account to Register
    cy.visit('/account')

    // Alias
    cy.get('.woocommerce-Button').as('register')

    // Assert web page contain text Register
    cy.get('@register').then(($register) => {

    // Wrap method  
    cy.wrap($register).parent().should('have.class', 'woocommerce-form-row form-row')

    // Get element of input Username, use to faker-js to input username
    cy.get('#reg_username').type(faker.person.fullName())

    // Get element of input Email address, use to fake input email
    cy.get('#reg_email').type(faker.internet.email())

    // Assert text/paragraph 'TEST MODE ENABLED. DO NOT ENTER YOUR PERSONAL DATA.' is visible
    cy.get('.woocommerce-privacy-policy-text').should('be.visible')

    const password = '1234'
    // Here we will use a     
    cy.get('#reg_password').type(password)

    // Click on Register 
    cy.get('button[value="Register"]').click()

    // Assert link text Logout
    cy.get('.woocommerce-MyAccount-navigation-link--customer-logout').should('exist')
    })
})


