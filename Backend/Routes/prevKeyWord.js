const express = require('express');
const router = express.Router();
const authGuard = require('../Middlewares/authGuard');
const { getPrevKeyword ,addPrevKeyword} = require('../Controllers/prevKeyWordController');


// fetch the keyword of the user from the database
router.get('/get',authGuard, getPrevKeyword);
// post if doesn't exist , pull if exist
router.post('/add',authGuard, addPrevKeyword);


module.exports = router;
