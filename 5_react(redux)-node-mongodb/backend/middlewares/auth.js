module.exports.checkLogin = function(req, res, next) {
  if (req.isAuthenticated()) {
    //req.isAuthenticated() will return true if user is logged in
    next();
  } else {
    res.send('login required');
    // res.redirect('/login');
  }
};
