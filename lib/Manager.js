// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// requires the employee class from employee.js
const Employee = require("./Employee");

// manager class becomes an extension of the parent Employee class
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		// requires the employee class from employee.js
		super(name, id, email);
		this.officeNumber = officeNumber;
	}

	// "getters" that return role and office number
	getRole() {
		return 'Manager';
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}
// exports the manager class
module.exports = Manager;