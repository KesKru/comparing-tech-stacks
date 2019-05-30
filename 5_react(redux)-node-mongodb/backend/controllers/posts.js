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
      title: req.body.title,
      body: req.body.body
    });
    newPost
      .save()
      .then((Post) => {
        md.User.findById(req.params.id).then((user) => {
          user.posts.push(Post);
          user.save();
        });
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
