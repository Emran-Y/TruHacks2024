const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const usersRoute = require('./Routes/user');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://emranyonas600:Emran12%40%40@truhacks2024.pvt7yub.mongodb.net')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));


    
app.use('/api/users',usersRoute);
app.get('/', (req, res) => {
        res.send('Hello World');
    });

app.listen(4000, () => console.log('Listening on port 3000...'));