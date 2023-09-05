const express = require('express');

const empRouter = require('./employees');
const { default: inquirer } = require('inquirer');

const app = express();

app.use('/employees', empRouter);

module.exports = app;

const questions = () => {
  inquirer.prompt ([
    {
      type: "list",
      name: "options",
      message: "Select from the employee's tracking list:",
      choices: [
        "View All Employees",
        "Add Employee",
        "View All Roles",
        "Add Role",
        "View All Deparments",
        "Add Deparment",
        "Quit"
      ]
    }
  ]).then(answers => {
    switch(answers.options) {
      case "View All Employees":

      break;
      case "Add Employee":

      break;
      case "View All Roles":

      break;
      case "Add Role":
      break;
      case "View All Deparments":
      break;
      case "Add Deparment":
      break;
      case "Quit":
      break;
    }
  });
}

async function viewAllEmployees () {
  const employees = await query.viewEmployees
}