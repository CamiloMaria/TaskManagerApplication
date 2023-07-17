const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

//Get /tasks - Get all tasks
router.get('/', authMiddleware, taskController.getAllTasks);

//Post /tasks - Create a new task


//Put /tasks - Update a task


//Delete /tasks - Delete a task

module.exports = router;


