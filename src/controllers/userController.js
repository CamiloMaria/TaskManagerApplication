const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { username, email } = req.body;

    const user = await User.findByIdAndUpdate(
      req.user._id,
      {
        username,
        email,
      },
      { new: true }
    );

    res.json(user);
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
};
