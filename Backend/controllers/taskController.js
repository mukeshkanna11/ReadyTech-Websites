// controllers/taskController.js
import Task from "../models/Task.js";

// ✅ Get all tasks
export const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find().populate("employee");
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// ✅ Create new task
export const addTask = async (req, res, next) => {
  try {
    const { title, description, employee, status } = req.body;
    const newTask = new Task({ title, description, employee, status });
    await newTask.save();
    res.status(201).json({ message: "Task added successfully", newTask });
  } catch (error) {
    next(error);
  }
};

// ✅ Update task
export const updateTask = async (req, res, next) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTask) return res.status(404).json({ message: "Task not found" });
    res.status(200).json({ message: "Task updated", updatedTask });
  } catch (error) {
    next(error);
  }
};

// ✅ Delete task
export const deleteTask = async (req, res, next) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) return res.status(404).json({ message: "Task not found" });
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};
