const express = require('express');

const departmentsRouter = require('./departments');
const employeesRouter = require('./employees');
const rolesRouter = require('./roles');

const app = express();

app.use('/api', departmentsRouter);
app.use('/api', employeesRouter);
app.use('/', rolesRouter);

module.exports = app;
