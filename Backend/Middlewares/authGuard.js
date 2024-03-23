const jwt = require("jsonwebtoken");
const { User } = require("../Models/user");

// Middleware to check if the user is authenticated
const authGuard = async (req, res, next) => {
  let token;
  // Check if the token is provided
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get the token from the header
      token = req.headers.authorization.split(" ")[1];
      // Verify the token
      const decoded = jwt.verify(token, "jwtPrivateKey");
      // Get the user from the database
      req.user = await User.findOne({ _id: decoded.userId }).select(
        "-password"
      );
      next();
    } catch (error) {
      // If the token is invalid
      res.status(401).json({ message: "Not Authorized, token failed" });
    }
  }
  if (!token) {
    // If the token is not provided
    res.status(401).json({ message: "Not Authorized, token failed" });
  }
};

module.exports = authGuard;