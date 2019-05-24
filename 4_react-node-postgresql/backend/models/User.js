'use strict';
const bcrypt = require('bcrypt');
const Post = require('../models/Post');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  });
  User.associate = function(models) {
    User.hasMany(models.Post);
    User.hasOne(models.Profile);
  };

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

  return User;
};
