//-----------------------Modules-----------------------//
//-----------------------Models-----------------------//
const md = require('../models/index');
const errors = {};

//-----------------------Controlers-----------------------//
module.exports = {
  getPosts: (req, res) => {
    res.send('getPosts route');
  },

  getPost: (req, res) => {
    res.send('getPost route');
  },

  createPost: (req, res) => {
    const newPost = new md.Post({
      field1: req.body.field1,
      field2: req.body.field2,
      field3: req.body.field3
    });
    newPost
      .save()
      .then((Post) => {
        res.json({ Post: Post });
      })
      .catch((err) => {
        res.send(err);
      });
  },

  updatePost: (req, res) => {
    res.send('updatePost route');
  },

  deletePost: (req, res) => {
    res.send('deletePost route');
  }
};
