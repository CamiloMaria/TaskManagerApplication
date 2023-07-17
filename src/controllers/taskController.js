const Task = require('../models/Task');
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

const getTaskById = async (req, res) => {
  try{
    const Task = await Task.findOne({
      _id: req.params.id,
      createBy: req.user._id
    }).populate('createdBy', 'username').populate('assignedTo', 'username');

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
    
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
};


const updateTask = async (req, res) => {
  try {
    const {title, description, dueDate, priority, assignedTo } = req.body;
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id },
      { title, description, dueDate, priority, status, assignedTo },
      { new: true }
    ).populate('createdBy', 'username').populate('assignedTo', 'username');

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
  
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user._id }
    )

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }
    res.json({ message: 'Task deleted correctly '});
  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};