// utils/jwt.js
const jwt = require('jsonwebtoken');

const secretKey = 'your_secret_key'; // Use a strong, unique secret key in production

// Generate a token
const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
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
