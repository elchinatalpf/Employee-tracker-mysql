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
        return viewAllEmployees();
      break;
      case "Add Employee":
        return addEmployee();
      break;
      case "Delete Employee":
        return deleteEmployee();
      case "View All Roles":
        return viewAllRoles();
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

// View all employees
const viewAllEmployees = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/employees');
    console.log('Employees', response.data.data);
    mainMenu();
  } catch (err) {
    console.log('Error fetching Employees:', err);
  }
}

// Add employees
const addEmployee = () => {
  inquirer.prompt([
  {
    type: 'input',
    name: 'firstName',
    message: 'Enter first name'
  },
  {
    type: 'input',
    name: 'lastName',
    message: 'Enter last name'
  },
  ]).then(async (answers) => {
    try {
      await axios.post('http://localhost:3001/api/employees', answers);
      console.log('Employee added successfully');
      mainMenu();
    } catch (err) {
      console.log('Error adding employee', err);
    }
  });
}

// Delete employe
const deleteEmployee = async () => {
  try {
    const { data } = await axios.get("http://localhost:3001/api/employees");
    const employees = data.data;
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "deleteEmployee",
        message: "Which employee would you like to delete?",
        choices: employees.map((emp) => `${emp.first_name} ${emp.last_name}`),
      },
    ]);
    const selectedEmployee = employees.find(
      (emp) => `${emp.first_name} ${emp.last_name}` === answer.deleteEmployee
    );

    await axios.delete(
      `http://localhost:3001/api/employees/${selectedEmployee.id}`
    );
    console.log("Employee deleted successfully");
    mainMenu();
  } catch (err) {
    console.log("Error:", err.message);
  }
};
    
    
// View all roles
const viewAllRoles = async () => {
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