const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

//Get /tasks - Get all tasks
router.get('/', authMiddleware, taskController.getAllTasks);

//Get /tasks/:id - Get task by ID
router.get('/:id', authMiddleware, taskController.getTaskById);

//Post /tasks - Create a new task
router.post('/:id', authMiddleware, taskController.createTask);

//Put /tasks - Update a task
router.put('/:id', authMiddleware, taskController.updateTask);

//Delete /tasks - Delete a task
router.delete('/:id', authMiddleware, taskController.deleteTask);

module.exports = router;


