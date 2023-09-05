const inquirer = require('inquirer');
const axios = require ('axios');

const questions = () => {
  inquirer.prompt ([
    {
      type: "list",
      name: "options",
      message: "Select from the employee's tracking list:",
      choices: [
        "View All Deparments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Employee",
        "Add Role",
        "Update Employee Role",
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
        process.exit();
      break;
    }
  });
};

