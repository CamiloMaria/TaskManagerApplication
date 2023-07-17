const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');
const userRoutes = require('./routes/users');
const taskRoutes = require('./routes/tasks');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/tasks', taskRoutes);
app.use('/users', userRoutes);

app.use(errorHandler); // Error handling middleware

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();
