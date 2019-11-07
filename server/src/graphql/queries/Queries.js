'use strict';

/** Dependencies & Files
 * GraphQL
 * Book Model
 * User Model
 * Book Type
 * User Type
 */
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLList = require('graphql').GraphQLList;
const Book = require('../../models/Book');
const UserModel = require('../../models/user');
const BookType = require('../types/BookType');
const userType = require('../types/userType');

/** Instantiation of our Book Query */
const BookAppBookQuery = new GraphQLObjectType ({
  name: 'BookAppBookQuery',
  fields: () => {
    return {
      books: {
        type: new GraphQLList(BookType),
        resolve: async () => {
          console.log(Book.title);
          console.log('This is QueryJS');
          return await Book.find({title:'Apples'}, () => {
          });
        },
      },
    };
  },
});

/** Instantiation of our User Query */
 const BookAppUserQuery= new GraphQLObjectType({
  name: 'BookAppUserQuery',
  fields: () => {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: async () => {
          const users = UserModel.find().exec();
          if (!users) {
            throw new Error('Error')
          }
          return users
        },
      },
    };
  },
});

/** Exporting our queries for use in the rest of the repo*/
module.exports = { BookAppBookQuery, BookAppUserQuery};