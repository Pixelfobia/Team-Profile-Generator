const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];

startProgram()
async function startProgram() {

	team.push(new Manager("Jane", 1, "test@test.com"))
	team.push(new Engineer("Sergio", 1, "test@test.com"))
	team.push(new Engineer("Lenka", 1, "test@test.com"))
	team.push(new Intern("Angela", 1, "test@test.com"))

	let htmlDoc = render(team)

	await fs.writeFile(outputPath, htmlDoc);
}