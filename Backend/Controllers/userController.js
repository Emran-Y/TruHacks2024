const User = require('../Models/user');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

// Function to generate a random 6-digit code
const generateCode = () => {
  return Math.floor(100000 + Math.random() * 900000); // Random 6-digit code
};

// Function to send verification email
const sendVerificationEmail = async (email, code) => {
  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'abrhamwube1@gmail.com', // Your email address
        pass: 'oagw sset djro udmg' // Your email password or app password if using Gmail
      }
    });

    // Email message details
    const mailOptions = {
      from: 'abrhamwube1@gmail.com', // Sender's email address
      to: email, // Recipient's email address
      subject: 'Email Verification Code', // Email subject
      text: `Your verification code is ${code}` // Email body
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error; // Rethrow the error to handle it in the calling function
  }
};

// Register a new user
const registerUser = async (req, res) => {
    // Check if all fields are provided
    const { fullName, email, password } = req.body;
    if (!fullName || !email || !password) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    // Check if the user is already registered
    let user = await User.findOne({ email: email });
    if (user) {
        return res.status(400).json({ message: 'User already registered' });
    }

    // Generate a random 6-digit code
    const verificationCode = generateCode();

    try {
        // Send verification code via email
        await sendVerificationEmail(email, verificationCode);

        // Create a new user without marking the email as verified
        user = new User({
            fullName,
            email,
            password,
            verificationCode
        });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save the user
        const savedUser = await user.save();
        res.status(200).json(_.pick(savedUser, ['_id', 'fullName', 'email']));
    } catch (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ message: 'Error registering user' });
    }
};

// Verify user's email
const verifyEmail = async (req, res) => {
    const { email, verificationCode } = req.body;

    // Find the user by email and verification code
    const user = await User.findOne({ email, verificationCode });

    if (!user) {
        return res.status(400).json({ message: 'Invalid verification code' });
    }

    // Mark the user's email as verified
    user.isVerified = true;

    try {
        await user.save();
        res.status(200).json({ message: 'Email verified successfully' });
    } catch (err) {
        console.error('Error verifying email:', err);
        res.status(500).json({ message: 'Error verifying email' });
    }
};


// Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Check if the email is verified
    if (!user.isVerified) {
      return res.status(400).json({ message: 'Email not verified' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, 'jwtPrivateKey', { expiresIn: '30d' });

    console.log('Login successful. Token:', token); // Add this log statement

    // Return the token and user information
    res.status(200).json({ token, user: _.pick(user, ['_id', 'fullName', 'email']) });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Error logging in' });
  }
};


// Get user data for profile page
// Get user data for profile page
const getUser = async (req, res) => {
  try {
    // Check if req.user is available
    if (!req.user || !req.user._id) {
      console.error('User id not found in request');
      return res.status(400).json({ message: 'User id not found in request' });
    }

    // Get the user id
    const userId = req.user._id;

    // Get the user from the database
    const user = await User.findById(userId).select('fullName email');

    if (!user) {
      console.error('User not found');
      return res.status(404).json({ message: 'User not found' });
    }

    // Return the user
    return res.status(200).json(user);
  } catch (err) {
    // If there is an error, log and return an error response
    console.error('Error getting user:', err);
    return res.status(500).json({ message: 'Error getting user' });
  }
}


module.exports = { registerUser, verifyEmail, loginUser ,getUser};
