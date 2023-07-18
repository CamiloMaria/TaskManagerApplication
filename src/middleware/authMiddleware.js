const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get token from the request headers
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Authorization token is missing' });
  }
  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { _id: decoded.userId };
    next();
    
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }

};

module.exports = authMiddleware;
