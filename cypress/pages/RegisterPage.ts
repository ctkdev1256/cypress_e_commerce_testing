/** This option use for a Page Object Design framework example:

import User from "../users/User";

export default class RegisterPage {
	private get fullNameInput() {
		return '#reg_username';
	}

	private get emailInput() {
		return '#reg_email';
	}

	private get passwordInput() {
		return '#reg_password';
	}

	private get registerButton() {
		return 'button[value="Register"]';
	}

	load() {
		cy.visit('/account');
	}

	register(user: User) {
		cy.get(this.fullNameInput).type(user.getFullName());
		cy.get(this.emailInput).type(user.getEmail());
		cy.get(this.passwordInput).type(user.getPassword());
		cy.get(this.registerButton).click();
	}

	// registerUsingAPI(user: User) {
	// 	return new UserAPI().register(user).then((response) => {
	// 		user.setToken(response.body.access_token);
	// 	});
	// }
}
*/