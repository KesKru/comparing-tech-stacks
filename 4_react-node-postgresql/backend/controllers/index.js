//-----------------------Modules-----------------------//
const path = require('path');
//-----------------------Models-----------------------//
const md = require('../models/index');
//-----------------------Controlers-----------------------//
module.exports = {
  // User | 'users/login' | Login user, create session.
  login: (req, res) => {
    res.send('loginUser route');
  }
};
