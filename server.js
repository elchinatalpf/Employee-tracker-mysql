require('dotenv').config();
const express = require('express');
const connection = require('./config/connection');

// here goes routes stuff
const apiRoutes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

connection.mysql();

app.use(express.urlencoded({ extended: false }));
app.use(express.json);

// app.use('/api', apiRoutes); bring here api from routes.

app.use('*', (req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
