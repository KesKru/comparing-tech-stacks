//-----------------------Modules-----------------------//
const passport = require('passport'); // parsing incoming express
const path = require('path');
//-----------------------Models-----------------------//
const db = require('../models/index');
const Post = db.Post;
// User.sync();

//-----------------------Controlers-----------------------//
module.exports = {
  //-----------GET-----------//

  getPost: (req, res) => {
    const errors = {};
    db.User.findAll({
      include: [
        {
          model: db.Post
        }
      ]
    }).then((data) => {
      res.json(data);
    });
  },
  //-----------POST-----------//

  // POST | 'users/:id/post' | Register new user
  newPost: (req, res) => {
    const errors = {};
    newPost = Post.build({
      title: req.body.title,
      body: req.body.body,
      UserId: req.params.id
    });
    newPost
      .save()
      .then((post) => {
        res.json({ post: post });
      })
      .catch((err) => {
        res.send(err);
      });

    //-----------PUT------------//

    //----------DELETE----------//
  }
};
