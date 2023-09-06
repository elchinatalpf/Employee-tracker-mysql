DROP DATABASE IF EXISTS employeemanagement_db;
CREATE DATABASE employeemanagement_db;
USE employeemanagement_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT Primary key,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT Primary key,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employees (
  id INT AUTO_INCREMENT Primary key,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES employees(id) ON DELETE SET NULL,
  FOREIGN key (manager_id) REFERENCES departments(id) ON DELETE SET NULL
);