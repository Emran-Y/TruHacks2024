const express = require('express')
const router = express.Router()
const {
    registerUser,
    loginUser
} = require('../Controllers/userController')

// login user
router.post('/login', loginUser)

// register user
router.post('/register', registerUser)


module.exports = router
