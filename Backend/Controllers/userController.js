const mongoose = require('mongoose');
const User = require('../Models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash')


// Register a new user

const registerUser = async (req, res) => {
    // Check if all fileds are provided
    if ( !req.body.fullName || !req.body.email || !req.body.password) {
        return res.status(400).json({message:'Please provide all fields'});
    }

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

          return res.status(200).json(
            _.pick(savedUser, ['_id', 'fullName', 'email', 'token'])
            )
      
        
    }
    catch(err){
        res.status(500).json({message:err.message});
    }


}


// Login a user

const loginUser = async (req, res) => {
    // Check if all fileds are provided
    if ( !req.body.email || !req.body.password) {
        return res.status(400).json({message:'Please provide all fields'});
    }

    // Check if the user is registered
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({message:'Invalid email or password'});
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
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
  
    return res.status(200).json(
        _.pick(user, ['_id', 'fullName', 'email', 'token'])
        )
}




module.exports.loginUser = loginUser;
module.exports.registerUser = registerUser;