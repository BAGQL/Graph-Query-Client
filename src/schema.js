'use strict';

/** Dependencies
 * GraphQL
 * Mutations
 * Queries
 *  Dotenv
 */
const {GraphQLObjectType, GraphQLSchema} = require('graphql');
const mutation = require('./graphql/mutations/Mutation');
const rootQueries = require('./graphql/queries/Queries');
require('dotenv').config();

/** Defines our master schema for our API */
const BookAppSchema = new GraphQLSchema({
  query: rootQueries,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation,
  }),
});

/** Exports our Schema for use in the app file */
module.exports = BookAppSchema;