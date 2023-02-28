// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// requires the employee class from employee.js
const Employee = require("./Employee");

// engineer class becomes an extension of the parent Employee class
class Engineer extends Employee {
	//constructor with name, id, email, and github properties
	constructor(name, id, email, github) {
		// requires the employee class from employee.js
		super(name, id, email);
		this.github = github;
	}
	// "getters" that return github and role
	getGithub() {
		return this.github;
	}

	getRole() {
		return 'Engineer';
	}
}