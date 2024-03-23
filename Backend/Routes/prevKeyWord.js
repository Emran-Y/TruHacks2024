const express = require('express');
const router = express.Router();
const authGuard = require('../Middlewares/authGuard');
const { getPrevKeyword } = require('../Controllers/prevKeyWordController');

// fetch the keyword of the user from the database
router.get('/prevKeyword',authGuard, getPrevKeyword);


module.exports = router;
