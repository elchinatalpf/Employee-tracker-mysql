const inquirer = require('inquirer');
const axios = require ('axios');
function init () {
  mainMenu();
}
// main function with options prompts 
function mainMenu () {
  inquirer.prompt([
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
          "Quit",
        ],
      },
    ])
    .then((answers) => {
      console.log(answers.options);
      // switch (answers.options) {
        // case "View All Employees":
        //   return viewAllEmployees();
        //   break;
        // case "Add Employee":
        //   return addEmployee();
        //   break;
        // case "Delete Employee":
        //   return deleteEmployee();
        // case "View All Roles":
        //   return viewAllRoles();
        //   break;
        // case "Add Role":
        //   return addRole();
        //   break;
        // case "View All Deparments":
        //   return viewAllDepartments();
        //   break;
        // case "Add Deparment":
        //   return addDepartment();
        //   break;
        // case "Quit":
        //   return Quit();
        //   break;
      // }
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

// Delete employee
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
const addRole = async () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of the role?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is its salary?'
    },
    {
      type: 'list',
      name: 'department_id',
      message: 'Which departments does this role belong to?',
      choices: ['1: Marketing', '2: Sales', '3: Finance', '4: Legal', '5: HR', '6: Accounting']
    }
  ])
  .then(async (answers) =>{
    try {
      await axios.post('http://localhost:3001/api/roles', answers);
      console.log('Role addedd succssesfully');
      mainMenu();
    } catch (err) {
      console.log('Error adding role', err);
    }
  });
}

const viewAllDepartments = async () => {
  try {
    const response = await axios.get('http://localhost:3001/api/roles');
    console.log('Departments', response.data.data);
    mainMenu();
  } catch (err) {
    console.log('Error fetching Departments', err);
  }
}

const addDepartment = async () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'department_name',
      message: 'What is the name of the new department?'
    }
  ])
  .then(async (answers) => {
    try {
      await axios.post('http://localhost:3001/api/departments', answers);
      console.log('Department added successfully');
      mainMenu();
    } catch (err) {
      console.log('Error adding department', err);
    }
  });
}

function Quit() {
  console.log('Exitiing application');
  process.exit();
}

module.exports = { init };