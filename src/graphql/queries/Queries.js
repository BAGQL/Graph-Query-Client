'use strict';

/** Dependencies & Files
 * GraphQL
 * Book Model
 * Book Type
 */
const { GraphQLList, GraphQLObjectType } = require('graphql');
const Book = require('../../middleware/models/Book');
const BookType = require('./BookType');

/** Instantiation of our Root Query */
const BookAppQueryRootType = new GraphQLObjectType ({
  name: 'BookAppSchema',
  description: 'Book App Schema Query Root',
  fields: () => {
    return {
      books: {
        type: new GraphQLList(BookType),
        description: 'List of all books',
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

/** Exporting our root query for use in the rest of the repo*/
module.exports = BookAppQueryRootType;