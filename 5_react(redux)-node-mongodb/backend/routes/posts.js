const express = require('express');
const router = express.Router();

const cont = require('../controllers/posts'); // Controlers
const auth = require('../middlewares/auth'); // autchentication middleware

// RESTapi routes

// Index | Get all posts
router.get('/users/posts', cont.getPosts);
// Show | Get one Post
router.get('/users/posts/:id', cont.getPost);

// New | Show form for new Post
// router.get('/posts/new', cont.PostGet); // Form displayed in React
// Create | Show form for ew Post
router.post('/users/:id/posts', cont.createPost);

// Edit | Show form for ew Post
// router.get('/posts/:id/edit', cont.updatePost); // Form displayed in React
// Update | Show form for ew Post
router.put('/users/posts/:id', cont.updatePost);

// Destroy | Show form for ew Post
router.delete('/users/posts/:id', cont.deletePost);

module.exports = router;
