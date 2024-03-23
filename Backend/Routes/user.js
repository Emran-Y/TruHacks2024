const express = require('express');
const router = express.Router();
const {
    registerUser,
    verifyEmail,
    loginUser,
    getUser

} = require('../Controllers/userController');

const authGuard = require('../Middlewares/authGuard')

// Register user
router.post('/register', registerUser);

// Verify user's email
router.post('/verify-email', verifyEmail);

// Login user
router.post('/login', loginUser);

// get user
router.get('/user',authGuard, getUser)


module.exports = router;
