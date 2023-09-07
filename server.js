// environment variables on .env file
require('dotenv').config();
// const express = require('express');
// const routes = require('./routes');


const { init } = require('./cli/cli');
const connection = require('./config/connection');

// const PORT = process.env.PORT || 3001;

// const app = express();

// connection.mysql();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// app.use(routes);

// app.use('/cli', init);

// app.use('*', (req, res) => {
//   res.status(404).end();
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
init();