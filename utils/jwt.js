// utils/jwt.js
const jwt = require('jsonwebtoken');

// Generate a token
const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
};

// Verify a token
const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken
};
