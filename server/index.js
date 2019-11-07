'use strict';

/** NODE PACKAGES
 * Mongoose
 * Dotenv
 */
const mongoose = require('mongoose');
require('dotenv').config();

/** Defines our options for the mongoose database*/
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
};

/** Creates new connection to mongoose */
mongoose.connect(process.env.MONGODB_URL, options);

/** Connects mongodb to the url*/
const db = mongoose.connection;
db.once('open', async () => {
  console.log('Database connected:', process.env.MONGODB_URL);
  return {Links: db.collection('books')};
});
db.on('error', err => {
  console.error('connection error:', err)
});

/** Requirement of PORT from .env */
require('./src/app.js').start(process.env.PORT);