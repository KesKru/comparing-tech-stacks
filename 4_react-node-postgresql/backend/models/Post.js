'use strict';
const Post = require('../models/Post');

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT
    },
    {}
  );

  return Post;
};
