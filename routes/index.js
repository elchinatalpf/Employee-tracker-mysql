const express = require('express');

const empRouter = require('./employees');
const { default: inquirer } = require('inquirer');

const app = express();

app.use('/employees', empRouter);

module.exports = app;
