/** This option use for a Page Object Design framework example:

import { faker } from '@faker-js/faker';

export default class User {
	private fullName: string;
	private email: string;
	private password: string;
	private token: string;

	constructor() {
		this.fullName = faker.person.fullName();
		this.email = faker.internet.email();
		this.password = '1234';
	}

	getFullName() {
		return this.fullName;
	}
	getEmail() {
		return this.email;
	}
	getPassword() {
		return this.password;
	}
}
*/