const inquirer = require('inquirer');
require("console.table");

const db = require('../config/connection');
function init () {
  db.connect(function () { mainMenu() });
  
}
// main function with options prompts 
function mainMenu () {
  inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message: "Select from the employee's tracking list:",
        choices: [
          "View All Departments",
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
      switch (answers.choice) {
        case "View All Departments":
          return viewAllDepartments();
          break;
          case "View All Roles":
            return viewAllRoles();
            break;
        case "View All Employees":
          return viewAllEmployees();
          break;
          case "Add Department":
            return addDepartment();
            break;
        case "Add Employee":
          return addEmployee();
          break;
          case "Add Role":
            return addRole();
            break;
        case "Update Employee Role":
          return updateEmployee();
        case "Quit":
          return quit();
          break;
      }
    });
};

// View all employees
const viewAllEmployees = async () => {
  const sql = `SELECT * FROM employees`;
  const [rows, fields] = await db.promise().query(sql);
    console.table(rows);
    mainMenu();
}

// Add employees
const addEmployee = async () => {
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
  {
    type: 'input',
    name: 'role_id',
    message: 'Enter role ID'
  },
  {
    type: 'input',
    name: 'manager_id',
    message: 'Enter manager ID'
  }
  ]).then(async (answer) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const params = [answer.first_name, answer.last_name, answer.role_id, answer.manager_id];
    const [newEmp] = await db.promise().query(sql, params);
    console.log('Employee added', newEmp);
  });
  mainMenu();
}

// Delete employee
const updateEmployee = async () => {
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
  const sql = `SELECT * FROM roles`;
  const [rows, fields] = await db.promise().query(sql);
    console.table(rows);
    mainMenu();
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
  const sql = `SELECT * FROM departments`;
  const [rows, fields] = await db.promise().query(sql);
    console.table(rows);
    mainMenu();

}
// add a new department
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

function quit() {
  console.log('Application Ended');
  process.exit();
}

module.exports = { init };