'use strict';

/** Declared the Mutations*/
const GraphQLSchema = require('graphql').GraphQLSchema;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const queryType = require('../queries/user').queryType;
const mutation = require('../mutations/index');

/** Exporting our mutations for use in the rest of the repo */
exports.userSchema = new GraphQLSchema({
  query: queryType,
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation
  })
});