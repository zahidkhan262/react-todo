const express = require('express');
const { registerUser,readData, loginUser } = require('../controllers/userController');



const router= express.Router()
router.get('/me', readData)
router.post('/login', loginUser)
router.post('/register', registerUser)

module.exports = router;