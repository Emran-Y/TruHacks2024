const express = require('express');
const router = express.Router();
const authGuard = require('../Middlewares/authGuard');
const {sendMessage, getMessages} = require('../Controllers/messageController');


// send message
router.post('/send', authGuard, sendMessage);

// get messages paginated and sorted by createdAt
router.get('/get/:userId', authGuard, getMessages);

