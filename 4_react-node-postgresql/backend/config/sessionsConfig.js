const session = require('express-session');
const sequelize = require('./databaseConfig'); // load and run db config
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const myStore = new SequelizeStore({
  db: sequelize, // specify db to use
  checkExpirationInterval: 60 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
  expiration: 24 * 60 * 60 * 1000 // The maximum age (in milliseconds) of a valid session.
});

// myStore.sync(); // create table in db. Only needs to run when once when creating the table.

module.exports = session({
  secret: 'keyboard cat',
  duration: 60 * 60 * 1000,
  activeDuration: 15 * 60 * 1000,
  store: myStore,
  resave: true,
  saveUninitialized: true
});
