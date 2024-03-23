const express = require('express');
const router = express.Router();
const {
    registerUser,
    verifyEmail,
    loginUser
} = require('../Controllers/userController');

// Register user
router.post('/register', registerUser);

// Verify user's email
router.post('/verify-email', verifyEmail);

// Login user
router.post('/login', loginUser);

module.exports = router;
