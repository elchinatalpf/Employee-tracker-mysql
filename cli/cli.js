const inquirer = require('inquirer');
const axios = require ('axios');

const mainMenu = () => {
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

const viewAllEmployees = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/employees');
    console.log('Employees', response.data.data);
    mainMenu();
  } catch (err) {
    console.log('Error fetching Employees:', err);
  }
}
// add employees here


const viewRoles = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/roles');
    console.log('Roles', response.data.data);
    mainMenu();
  } catch (err) {
    console.log('Error fetching Roles', err);
  }
}

// add roels here

const viewDepartments = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/roles');
    console.log('Departments', response.data.data);
    mainMenu();
  } catch (err) {
    console.log('Error fetching Departments', err);
  }
}

mainMenu();