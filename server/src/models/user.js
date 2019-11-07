'use strict';

/** DEPENDENCIES
 * Mongoose
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** userSchema variable
 * Creates 'userSchema' as a new mongo schema, and defines types for name and that it is required.
 * @type {mongoose.Schema}
 */
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

/** Creates User as a model of the user schema */
let User = mongoose.model('User', userSchema);

/** Exports User for use outside of this file.*/
module.exports= User;