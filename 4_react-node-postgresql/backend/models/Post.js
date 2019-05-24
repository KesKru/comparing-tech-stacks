'use strict';
const Post = require('../models/Post');

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.TEXT
    }
  });
  Post.associate = function(models) {
    Post.belongsTo(models.User);
  };

  return Post;
};
