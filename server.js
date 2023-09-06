require('dotenv').config();
const express = require('express');
const connection = require('./config/connection');
const mainMenu = require('./cli/cli');
const apiRoutes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

connection.mysql();

app.use(express.urlencoded({ extended: false }));
app.use(express.json);

app.use(apiRoutes);

app.use('*', (req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  mainMenu();
  console.log(mainMenu());
});
