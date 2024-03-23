const mongoose = require('mongoose');

// Create a schema for the user
// full Name, email, password

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    },
    verificationCode: {
        type: Number,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
    }
});

// Create a model for the user
const User = mongoose.model('User', userSchema);


// Export the User model
module.exports = User;