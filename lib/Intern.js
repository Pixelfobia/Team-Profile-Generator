// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// requires the employee class from employee.js
const Employee = require("./Employee");

// Intern class becomes an extension of the parent Employee class
class Intern extends Employee {
	//constructor with name, id, email, and school properties
	constructor(name, id, email, school) {
		// inherits name, id, and email from the Employee parent class
		super(name, id, email);
		this.school = school;
	}
	// "getters" that return school and role
	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}
}

// exports the intern class
module.exports = Intern;