'use strict';

require('dotenv').config();

module.exports = {
  development: {
    db: 'mongodb://127.0.0.1/graphql',
    app: {
      name: 'bagql'
    }
  },
  production: {
    db: process.env.MONGODB_URL,
    app: {
      name: 'BAGQL'
    }
  }
};