'use strict';

/** NODE PACKAGES
 * Express
 * Cors
 * Morgan
 * Apollo-Server-Express
 * Mongoose
 * Dotenv
 */
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const graphQLHttp = require('express-graphql');
const schema = require('./schema');
require('dotenv').config();


/** Running app middleware */
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', graphQLHttp({
  schema: schema,
  graphiql: true,
}));

/** variable to let us know if server is running or not */
let isRunning = false;

/** Call the listen method on the instantiation of our server */
module.exports = {
  server: app,
  start: (port) => {
    if (!isRunning) {
      app.listen(port, () => {
        isRunning = true;
        console.log(`Server up on http://localhost:${port}/`);
      });
    } else {
      console.log('Server is already running');
    }
  },
};