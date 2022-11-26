const express = require('express');
const { createPost, getPost } = require('../controllers/postController');
const router = express.Router()
// const { authMiddlewre } = require('../middleware/authMiddleware');
const passport = require('passport')

const { passportAuthentication } = require('../middleware/auth')

passportAuthentication(passport)

// post controller
router.post('/create-post', createPost)
router.get('/get-post', passport.authenticate('jwt', { session: false }), getPost)

module.exports = router

