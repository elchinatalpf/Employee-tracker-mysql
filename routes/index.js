const express = require('express');

const employeesRouter = require('./employees');
const departmentsRouter = require('./departments');
const rolesRouter = require('./roles');

const app = express();

app.use('/employees', employeesRouter);
app.use('/departments', departmentsRouter);
app.use('/roles', rolesRouter);

module.exports = app;
