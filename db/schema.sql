DROP DATABASE IF EXIST employeemanagement_db;

CREATE DATABASE employeemanagement_db;

USE employeemanagement_db;

CREATE TABLE deparment (
  id INT AUTO_INCREMENT Primary key,
  name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE role (
  id INT AUTO_INCREMENT Primary key,
  title VARCHAR(30) UNIQUE NOT NULL,
  salary DECIMAL NOT NULL,
  deparment_id INT NOT NULL,
  FOREIGN KEY (deparment_id) REFERENCES deparment(id) ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT Primary key,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT,
  manager_id INT
  FOREIGN KEY (role_id) REFERENCES employee(id) ON DELETE SET NULL
  FOREIGN key (manager_id) REFERENCES deparment(id) ON DELETE SET NULL
);