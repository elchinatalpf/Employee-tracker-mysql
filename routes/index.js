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

  ])
}