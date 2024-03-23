const express = require('express')
const router = express.Router()
const {
    registerUser,
    loginUser,
    getUser,

} = require('../Controllers/userController')
const authGuard = require('../Middlewares/authGuard')

// login user
router.post('/login', loginUser)

// register user
router.post('/register', registerUser)

// get user
router.get('/user',authGuard, getUser)

module.exports = router
