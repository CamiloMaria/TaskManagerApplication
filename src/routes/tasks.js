const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');
const { body } = require('express-validator');

//Get /tasks - Get all tasks
router.get('/', authMiddleware, taskController.getAllTasks);

//Get /tasks/:id - Get task by ID
router.get('/:id', authMiddleware, taskController.getTaskById);

//Post /tasks - Create a new task
router.post('/', authMiddleware, 
    [
        body('title').notEmpty().withMessage('Title is required'),
        body('description').notEmpty.withMessage('Description is required'),
        body('dueDate').notEmpty().withMessage('Due date is required').isISO8601().toDate(),
        body('priority').optional().isIn(['low', 'medium', 'high']).withMessage('Invalid priority'),
        body('assignedTo').notEmpty().withMessage('Assignee is required'),
    ],
    taskController.createTask
);

//Put /tasks - Update a task
router.put('/:id', authMiddleware, taskController.updateTask);

//Delete /tasks - Delete a task
router.delete('/:id', authMiddleware, taskController.deleteTask);

module.exports = router;


