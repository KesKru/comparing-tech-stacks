const session = require('express-session');
const Sequelize = require('sequelize');

const db = new Sequelize('stack-compare', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});

db.authenticate()
  .then(() => {
    console.log('database connected');
  })
  .catch((err) => {
    console.log(err);
  });

db.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = db;
