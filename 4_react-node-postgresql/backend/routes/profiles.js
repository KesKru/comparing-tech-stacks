const express = require('express');
const router = express.Router();
const passport = require('passport');

const cont = require('../controllers/profiles'); // Controlers
const auth = require('../middlewares/auth'); // autchentication middleware

// RESTapi routes

// Index | Get all profiles
router.get('/users/profiles', cont.getProfiles);
// Show | Get one Profile
router.get('/users/profiles/:id', cont.getProfile);

// New | Show form for new Profile
// router.get('/profiles/new', cont.ProfileGet); // Form displayed in React
// Create | Show form for ew Profile
router.post('/users/:id/profiles', cont.createProfile);

// Edit | Show form for ew Profile
// router.get('/profiles/:id/edit', cont.updateProfile); // Form displayed in React
// Update | Show form for ew Profile
router.put('/users/profiles/:id', cont.updateProfile);

// Destroy | Show form for ew Profile
router.delete('/users/profiles/:id', cont.deleteProfile);

module.exports = router;
