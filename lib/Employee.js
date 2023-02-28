// TODO: Write code to define and export the Employee class

// creates the employee class with property of name, id, and email
class Employee {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email
	}
	// "getters that return the name, ID, email, and role"
	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		//returns employee
		return 'Employee';
	}
}

// exports the employee class
module.exports = Employee;