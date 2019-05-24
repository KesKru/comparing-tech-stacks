//-----------------------Modules-----------------------//
//-----------------------Models-----------------------//
const md = require('../models/index');
const errors = {};

//-----------------------Controlers-----------------------//
module.exports = {
  getProfiles: (req, res) => {
    res.send('getProfiles route');
  },

  getProfile: (req, res) => {
    res.send('getProfile route');
    // md.User.findAll({
    //   attributes: ['name', 'email', 'id'],
    //   include: [
    //     {
    //       attributes: ['title', 'body', 'UserId'],
    //       model: md.profile
    //     }
    //   ]
    // }).then((data) => {
    //   res.json(data);
    // });
  },

  createProfile: (req, res) => {
    newProfile = md.Profile.build({
      field1: req.body.field1,
      field2: req.body.field2,
      field3: req.body.field3,
      UserId: req.params.id
    });
    newProfile
      .save()
      .then((profile) => {
        res.json({ profile: profile });
      })
      .catch((err) => {
        res.send(err);
      });
  },

  updateProfile: (req, res) => {
    res.send('updateProfile route');
  },

  deleteProfile: (req, res) => {
    res.send('deleteProfile route');
  }
};
