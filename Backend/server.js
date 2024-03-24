// import mongoose from 'mongoose'; 
const mongoose = require('mongoose');
// import express from 'express';
const express = require('express');
// import cors from 'cors' for cross-origin resource sharing
const cors = require('cors');
// initialize express
const app = express();
// import user routes
const usersRoute = require('./Routes/user');
// import message routes
const messagesRoute = require('./Routes/message');
// import prevKeyword routes
const prevKeywordRoute = require('./Routes/prevKeyWord');
// importing myFavorite routes
const myFavoriteRoute = require('./Routes/myFavorite');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://yotor:abrham@fileuploderproject.hwr6j8k.mongodb.net/hackaton?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));


    
app.use('/api/users',usersRoute);
app.use('/api/prevKeyword',prevKeywordRoute);
app.use('/api/messages',messagesRoute);
app.use('/api/myFavorite',myFavoriteRoute);
app.get('/', (req, res) => {
        res.send('Hello World');
    });

app.listen(4003, () => console.log('Listening on port 3000...'));