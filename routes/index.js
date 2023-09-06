const express = require('express');

const employeesRouter = require('./employees');
const deparmentsRouter = require('./deparments');
const rolesRouter = require('./roles');

const app = express();

app.use('/employees', employeesRouter);
app.use('/departments', deparmentsRouter);
app.use('/roles', rolesRouter);

module.exports = app;
