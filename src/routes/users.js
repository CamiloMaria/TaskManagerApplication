const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

// GET /users/profile - Get user profile
router.get('/profile', authMiddleware, userController.getUserProfile);

// POST /users/register - Register a new user
router.post('/register', userController.registerUser);

// POST /users/login - User login
router.post('/login', userController.loginUser);

// PUT /users/profile - Update user profile
router.put('/profile', authMiddleware, userController.updateUserProfile);

module.exports = router;
