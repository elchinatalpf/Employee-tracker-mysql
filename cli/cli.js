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
          "Delete Employee",
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
        case "Delete Employee":
          return deleteEmployee();
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

// Add employees works
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
    message: 'Enter role ID',
    validate: function(value) {
      let valid = !isNaN(parseFloat(value)) && (value >= 1&& value <= 6);
      return valid || 'Please enter a nubmer between 1 and 6';
    }
  }
  ]).then(async (answer) => {
    const sql = `INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)`;
    const params = [answer.firstName, answer.lastName, answer.role_id];
    const [newEmp] = await db.promise().query(sql, params);
    console.table('Employee added', newEmp);
    mainMenu();
  });
  mainMenu();
}

// Delete employee
const deleteEmployee = async () => {
  const { employeeId } = await inquirer.prompt([
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter the employee ID to delete:'
    }
  ]);
  const sql = `DELETE FROM employees WHERE id = ?`;
  const [result] = await db.promise().query(sql, [employeeId]);

  if (result.affectedRows === 0) {
    console.log('No employee found with the given ID.');
  } else {
    console.log('Employee deleted.');
  }
  mainMenu();
}

  // View all roles works
const viewAllRoles = async () => {
  const sql = `SELECT * FROM roles`;
  const [rows, fields] = await db.promise().query(sql);
    console.table(rows);
    mainMenu();
}

// add roles works
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
          choices: ['Marketing', 'Sales', 'Finance', 'Legal', 'HR', 'Accounting']
        }
      ])
      .then(async (answers) => {
        const sql = `SELECT id FROM departments d WHERE d.name = '${answers.department_id}'`;
        const depId = await db.promise().query(sql);
        const insertSql = `INSERT INTO roles (title, salary, department_id) VALUES ('${answers.title}', ${answers.salary}, ${depId[0][0].id})`;
        const newRole = await db.promise().query(insertSql);
        console.log('Role added', newRole);
        mainMenu();
  });
}
// view departments works
const viewAllDepartments = async () => {
  const sql = `SELECT * FROM departments`;
  const [rows, fields] = await db.promise().query(sql);
    console.table(rows);
    mainMenu();

}
// add department works
const addDepartment = async () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'depName',
      message: 'What is the name of the new department?'
    }
  ])
  .then(async (answers) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = [answers.depName];
    const [newDep] = await db.promise().query(sql, params);
    console.log('Department added', newDep);
    mainMenu();
  });
}

function quit() {
  console.log('Application Ended');
  process.exit();
}

module.exports = { init };