const mongoose = require('mongoose');

try {
    await.mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('conected to the database');
} catch (error) {
    console.error('Database connection failed: ', error.message);
    process.exit(1);
}

module.exports = connectDB;