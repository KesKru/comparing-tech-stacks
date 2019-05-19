const Sequelize = require('sequelize');
const db = require('../config/databaseConfig');
const bcrypt = require('bcrypt');

const User = db.define('Users', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  }
});

User.prototype.hashPassword = function() {
  return bcrypt.hash(this.password, 10);
  // .then(function(hash) {
  //     // Store hash in your password DB.
  // });
};

User.prototype.comparePassword = function(passwordToCheck) {
  return bcrypt.compare(passwordToCheck, this.password);
  // .then(function(res) {
  //   // res == true
  // });
};

// User.sync({ force: true }).then(() => {
//   console.log(`Database & tables created!`);
// });

module.exports = User;
