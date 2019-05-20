const express = require('express');
const router = express.Router();
const passport = require('passport');

// // Controlers
const postsControllers = require('../controllers/posts');
// // Auth middleware
const auth = require('../middlewares/auth');

// Route handlers
//-----------GET-----------//
router.get('/users/:id/post', postsControllers.getPost);

//-----------POST-----------//

router.post('/users/:id/post', postsControllers.newPost);

//-----------PUT------------//

//----------DELETE----------//

module.exports = router;
