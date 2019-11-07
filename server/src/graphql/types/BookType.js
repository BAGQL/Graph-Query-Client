'use strict';

/** Dependencies
 * GraphQL
 */
const { GraphQLString, GraphQLID, GraphQLObjectType, GraphQLNonNull } = require('graphql');

/** Declaration of our Book Type */
const BookType = new GraphQLObjectType({
  name: 'BookQuery',
  description: 'This represents a book',
  fields: () => {
    return {
      _id: {type: GraphQLID},
      title: {type: GraphQLString},
      author: {type: GraphQLString},
      description: {type: GraphQLString},
    };
  },
});

/** Exporting our Book Type for use in the rest of the repo*/
module.exports = BookType;