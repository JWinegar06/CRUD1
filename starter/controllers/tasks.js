const Task = require("../models/Task");

// Get all tasks
const getAllTasks = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

// Create a new task
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

// Get a single task
const getTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task) return res.status(404).json({ msg: "Task not found" });
  res.status(200).json({ task });
};

// Update a task
const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) return res.status(404).json({ msg: "Task not found" });
  res.status(200).json({ task });
};

// Delete a task
const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ msg: "Task not found" });
  res.status(200).json({ msg: "Task deleted" });
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
