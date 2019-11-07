'use strict';

/** DEPENDENCIES
 * Mongoose
 */
const mongoose = require('mongoose');

/** bookSchema variable
 * Creates 'savedBooks' as a new mongo schema, and defines types for title, authors, and description.
 * @type {mongoose.Schema}
 */
const book = new mongoose.Schema({
  title: {type: String},
  author: {type: String},
  description: {type: String},
});

/** Creates Books as a model of the book schema */
let Book = mongoose.model('Book', book);

/** Exports Book for use outside of this file.*/
module.exports = Book;