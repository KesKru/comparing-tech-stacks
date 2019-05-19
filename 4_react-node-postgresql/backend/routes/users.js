const express = require('express');
const router = express.Router();
const passport = require('passport');

// // Controlers
const usersControllers = require('../controllers/users');
// // Input validation
const usersValidation = require('../validation/users');
// // Auth middleware
const auth = require('../middlewares/auth');

// Route handlers
//-----------GET-----------//

router.get('/users/login', usersControllers.userLoginPage);

router.get('/users/home', auth.checkLogin, usersControllers.userHomePage);

//-----------POST-----------//

router.post(
  '/users/register',
  usersValidation.validateInputs,
  usersControllers.registerUser
);

router.post(
  '/users/login',
  passport.authenticate('local', {
    successRedirect: '/users/home',
    failureRedirect: '/users/login'
  }),
  usersControllers.loginUser
);

//-----------PUT------------//

//----------DELETE----------//

module.exports = router;
