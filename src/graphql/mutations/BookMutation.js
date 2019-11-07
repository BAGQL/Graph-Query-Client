'use strict';

/** Dependencies
 * GraphQL
 * Book Type
 * Book Model
 */
const { GraphQLNonNull, GraphQLString} = require('graphql');
const BookType = require('../queries/BookType');
const BookModel = require('../../middleware/models/Book');

/** Declares the add mutation for our Book Type */
const addBook = {
  type: BookType,
  description: 'Added the book.',
  args: {
    title: {
      name: 'title',
      type: new GraphQLNonNull(GraphQLString),
    },
    author: {
      name: 'author',
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      name: 'descriptiom',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (root, params) => {
    const Book = new BookModel(params);
    const newBook = await Book.save();
    if (!newBook) {
      throw new Error('Error');
    }
    return newBook;
  },
};

/** Declares the update mutation for our Book Type */
const updateBook = {
  type: BookType,
  description: 'Updated the book.',
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLString),
    },
    title: {
      name: 'title',
      type: GraphQLString,
    },
    author: {
      name: 'author',
      type: GraphQLString,
    },
    description: {
      name: 'description',
      type: GraphQLString,
    },
  },
  resolve: async (root, param) => {
    let updateBook = {};
    if(param.title) {
      updateBook.title = param.title;
    }
    if(param.author) {
      updateBook.author = param.author;
    }
    if(param.description) {
      updateBook.description = param.description;
    }
    const upBook = await BookModel.findByIdAndUpdate(param._id, updateBook, {new: true});
    console.log(upBook);
    if(!upBook) {
      throw new Error('Error');
    }
    return upBook;
  },
};

/** Declares the delete mutation for our Book Type */
const deleteBook = {
  type: BookType,
  description: 'Deleted the book.',
  args: {
    _id: {
      name: '_id',
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (root, param) => {
    const deleteBook =  await BookModel.findByIdAndRemove(param._id);
    if(!deleteBook) {
      throw new Error('Error');
    }
    return deleteBook;
  },
};

/**  Exporting book mutations for use in the master mutation file */
module.exports = {addBook, updateBook, deleteBook};