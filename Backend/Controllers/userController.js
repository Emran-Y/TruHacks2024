// importing mongoose
const mongoose = require('mongoose');
// importing the user model and the user validator
const {User, userValidator} = require('../Models/user');
// importing jwt, bcrypt and lodash
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash')


// Register a new user

const registerUser = async (req, res) => {
    // Check if all fileds are provided
    if ( !req.body.fullName || !req.body.email || !req.body.password) {
        return res.status(400).json({message:'Please provide all fields'});
    }

    // Validate the user input using the userValidator function
    const { error } = userValidator(req.body);
    // If there is an error return the error message
    if (error) return res.status(400).json({ message: error.details[0].message });
  

    // Check if the user is already registered
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).json({message:'User already registered'});
    }

    // Create a new user
    user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    });

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    // Save the user
    try{
        const savedUser = await user.save();
        // Create a token
        savedUser.token = jwt.sign(
            { userId: savedUser._id },
            'jwtPrivateKey',
            {
              expiresIn: "30d",
            }
          );
          // Return the token
          return res.status(200).json(
            _.pick(savedUser, ['token'])
            )
      
        
    }
    catch(err){
        // If there is an error return the error message 
        res.status(500).json({message:err.message});
    }


}


// Login a user

const loginUser = async (req, res) => {
    // Check if all fileds are provided
    if ( !req.body.email || !req.body.password) {
        return res.status(400).json({message:'Please provide all fields'});
    }

    // check if the user is registered for security reasons we should not specify which field is incorrect
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({message:'Invalid email or password'});
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    // If the password is incorrect return an error message , Invalid email or password for security reasons we should not specify which field is incorrect
    if (!validPassword) {
        return res.status(400).json({message:'Invalid email or password'});
    }

    // Create a token
    user.token = jwt.sign(
        { userId: user._id },
        'jwtPrivateKey',
        {
          expiresIn: "30d",
        }
      );
    // Return the token
    return res.status(200).json(
        _.pick(user, ['token'])
        )
}

// get user datas for profile page

const getUser = async (req, res) => {
    // Get the user id
    const userId = req.user._id;
    // Get the user
    try{
        // Get the user from the database
        const user = await User({ _id: userId });
        // Return the user
        return res.status(200).json(_.pick(user, ['fullName', 'email']));
    }
    catch(err){
        // If there is an error return the error message
        res.status(500).json({message:err.message});
    }
}




module.exports.loginUser = loginUser;
module.exports.registerUser = registerUser;
module.exports.getUser = getUser;