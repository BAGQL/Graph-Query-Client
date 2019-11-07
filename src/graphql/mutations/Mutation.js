'use strict';

/** Declared the Mutations*/
const { addBook, updateBook, deleteBook } = require('./BookMutation');

/** Exporting our mutations for use in the rest of the repo */
module.exports = {
  addBook,
  updateBook,
  deleteBook,
};