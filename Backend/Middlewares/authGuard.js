const jwt = require("jsonwebtoken");
const User = require("../Models/user"); // Use require without curly braces for User

const authGuard = async (req, res, next) => {
  try {
    // Check if the token is provided
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (!token) {
      console.log("No token provided");
      return res.status(401).json({ message: "Not Authorized, token failed" });
    }

    // Verify the token
    const decoded = jwt.verify(token, "jwtPrivateKey");
    console.log("Decoded token:", decoded); // Log the decoded token

    // Get the user from the database
    const user = await User.findById(decoded.userId).select("-password");
    console.log("User:", user); // Log the user object

    if (!user) {
      console.log("User not found");
      return res.status(401).json({ message: "Not Authorized, token failed" });
    }

    // Attach the user object to the request
    req.user = user;
    next();
  } catch (error) {
    // If the token is invalid
    console.error("Error verifying token:", error); // Log the error
    res.status(401).json({ message: "Not Authorized, token failed" });
  }
};

module.exports = authGuard;
