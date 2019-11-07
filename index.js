'use strict';

/** NODE PACKAGES
 * Mongoose
 * Dotenv
 */
require('dotenv').config();
const mongoose = require('mongoose');

/** Defines our options for the mongoose database*/
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
};

/** Creates new connection to mongoose */
mongoose.connect(process.env.MONGODB_URL, options);

/** */
const db = mongoose.connection;
db.once('open', _ => {
  console.log('Database connected:', process.env.MONGODB_URL)
});
db.on('error', err => {
  console.error('connection error:', err)
});

/** Requirement of PORT from .env */
require('./src/app.js').start(process.env.PORT);