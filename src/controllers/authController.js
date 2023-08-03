const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { validationResult } = require('express-validator');

const registerUser = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => error);
        return res.status(400).json({ errors: errorMessages}); 
    }

    try{
        const { username, email, password } = req.body;
        
        let user = await User.findOne({ username });
        if (user) {
            return res.status(401).json({ error: "Username already exists "});
        }

        let message = await User.findOne({ email });
        if (message) {
            return res.status(402).json({ error: "Email already exists "});
        }

        //Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User ({
            username,
            email,
            password: hashedPassword
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
      
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: 'User not found. Please check your username.' });
        }
      
        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(402).json({ error: 'Incorrect password. Please check your password.' });
        }
      
        // Generate JWT token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      
        res.json({ token });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
};