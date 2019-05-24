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
  },

  createProfile: (req, res) => {
    const newProfile = new md.Profile({
      field1: req.body.field1,
      field2: req.body.field2,
      field3: req.body.field3
    });
    newProfile
      .save()
      .then((Profile) => {
        res.json({ Profile: Profile });
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
