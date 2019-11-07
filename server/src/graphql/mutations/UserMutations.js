'use strict';

/** Dependencies
 * GraphQL
 * Book Type
 * Book Model
 */
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const UserType = require('../types/userType');
const UserModel = require('../../models/user');

/** Declares the add mutation for our User Type */
const addUser = {
  type: UserType.userType,
  args: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (root, params) => {
    const userModel = new UserModel(params);
    const newUser = await userModel.save();
    if (!newUser) {
      throw new Error('Error');
    }
    return newUser;
  },
};

/** Declares the update mutation for our User Type */
const updateUser = {
  type: UserType.userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (root, param) => {
    return UserModel.findByIdAndUpdate(
      param.id,
      { $set: { name: param.name} },
      { new: true }
    )
      .catch(err => new Error(err));
  }
};

/** Declares the delete mutation for our User Type */
const deleteUser = {
  type: UserType.userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  resolve: async (root, param) => {
    const deleteUser =  await UserModel.findByIdAndRemove(param.id).exec();
    if(!deleteUser) {
      throw new Error('Error');
    }
    return deleteUser;
  },
};

/**  Exporting user mutations for use in the master mutation file */
module.exports = {addUser, updateUser, deleteUser};