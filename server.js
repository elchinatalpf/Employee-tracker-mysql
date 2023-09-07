require('dotenv').config();

const { init } = require('./cli/cli');
const connection = require('./config/connection');
init();