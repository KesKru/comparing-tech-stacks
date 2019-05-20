const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/index').User;

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email'
    },
    (email, password, done) => {
      User.findOne({ where: { email: email } }).then((user) => {
        if (!user) {
          return done(null, false, { message: 'Incorrect email.' });
        }
        user
          .comparePassword(password)
          .then((match) => {
            if (match) {
              return done(null, user, { message: 'User loged in.' });
            } else {
              return done(null, false, { message: 'Incorrect password.' });
            }
          })
          .catch((err) => {
            return done(err);
          });
      });
    }
  )
);

passport.serializeUser((user, done) => {
  console.log('serializeUser');

  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findOne({ where: { id: id } })
    .then((user) => {
      console.log('deserializeUser');
      done(null, user);
    })
    .catch((err) => {
      return done(err);
    });
});
