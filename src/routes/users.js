const { body } = require('express-validator');
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /users/register - Register a new user
router.post('/register', 
  [
    body('username').notEmpty().withMessage('Username is required').trim(),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format').trim(),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters').trim(),
  ],
  authController.registerUser
);


// POST /users/login - User login
router.post('/login',
  [
    body('username').notEmpty().withMessage('Username is required').trim(),
    body('password').notEmpty().withMessage('Password is required').trim(),
  ],
  authController.loginUser
);

// GET /users/profile - Get user profile
router.get('/profile', authMiddleware, userController.getUserProfile);

// PUT /users/profile - Update user profile
router.put('/profile', authMiddleware, 
  [
    body('username').notEmpty().withMessage('Username is required').trim(),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format').trim(),
  ],
  userController.updateUserProfile
);

module.exports = router;
