require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employeemanagement_db'
  },
  console.log('Connected to the employeemanagement_db')
);

module.exports = db;