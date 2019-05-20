//-----------------------Modules-----------------------//
const passport = require('passport'); // parsing incoming express
const path = require('path');
//-----------------------Models-----------------------//
const User = require('../models//index').User;
// User.sync();

//-----------------------Controlers-----------------------//
module.exports = {
  //-----------GET-----------//

  // GET | 'users/login' | serves users login page
  userLoginPage: (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
  },

  // GET | 'users/home' | serves users home page
  userHomePage: (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  },

  //-----------POST-----------//

  // POST | 'users/register' | Register new user
  registerUser: (req, res) => {
    const errors = {};
    newUser = User.build({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });
    newUser.hashPassword().then((hash) => {
      newUser.password = hash;
      newUser
        .save()
        .then((user) => {
          res.json({ user: user });
        })
        .catch((err) => {
          res.send(err);
        });
    });
  },

  // POST | 'users/login' | Login user, create session.
  loginUser: (req, res) => {
    console.log('User logged In');
    res.send('user loged in');
  }

  //-----------PUT------------//

  //----------DELETE----------//
};
