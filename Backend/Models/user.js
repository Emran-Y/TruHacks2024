const mongoose = require('mongoose');
const Joi = require('joi');
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
    }
});

// Create a model for the user
const User = mongoose.model('User', userSchema);


// Validate the user

function userValidator(user) {
  // Define the password pattern for validation
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Define the validation schema for the user object using Joi package 
  const schema = Joi.object({
    // email must be a valid email address, meaning it must contain an @ symbol and a domain name (e.g. .com, .net, .org, etc.)
    email: Joi.string().email().required().messages({
      "string.email": "Please enter a valid email address.",
      "any.required": "Email is required.",
    }),
    // fullName must be a string with a minimum length of 5 characters, a maximum length of 50 characters, and contain only letters and spaces
    fullName: Joi.string()
      .min(5)
      .max(50)
      .pattern(/^[a-zA-Z\s]*$/)
      .required()
      .messages({
        "string.min": "Full name must be at least {#limit} characters long.",
        "string.max": "Full name must not exceed {#limit} characters.",
        "string.pattern.base":
          "Full name must contain only letters and spaces, without numbers or special characters.",
        "any.required": "Full name is required.",
      }),
    // password must be a string with a minimum length of 8 characters, and contain at least one lowercase letter, one uppercase letter, one digit, and one special character
    password: Joi.string().pattern(passwordPattern).required().messages({
      "string.pattern.base":
        "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one digit, and one special character.",
      "any.required": "Password is required.",
    }),
  });

  return schema.validate(user, { abortEarly: false }); // Return all validation errors at once
}

module.exports.userValidator = userValidator;


// Export the User model
module.exports.User = User;
// Export the userValidator function
module.exports.userValidator = userValidator;