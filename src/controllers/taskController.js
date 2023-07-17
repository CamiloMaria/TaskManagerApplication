const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      createdBy: req.user._id
    }).populate('createdBy','username').populate('assignedTo', 'username');
    
    res.json(tasks);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const {title, description, dueDate, priority, assignedTo } = req.body;
    const task = new Task({
      title,
      description,
      dueDate,
      priority,
      assignedTo,
      createdBy: req.user._id,
    });

    await task.save();
    res.status(201).json(task);
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  getAllTasks,
  createTask,
};