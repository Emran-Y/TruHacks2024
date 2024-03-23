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

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://emranyonas600:Emran12%40%40@truhacks2024.pvt7yub.mongodb.net')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));


    
app.use('/api/users',usersRoute);
app.use('/api/messages',messagesRoute);
app.get('/', (req, res) => {
        res.send('Hello World');
    });

app.listen(3000, () => console.log('Listening on port 3000...'));