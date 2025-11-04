import Task from "../models/Task.js";
import User from "../models/User.js";

// ✅ Admin: Add a new task for an employee
export const addTask = async (req, res) => {
  try {
    const { title, description, employee } = req.body;

    if (!title || !employee) {
      return res.status(400).json({ msg: "Title and Employee ID are required" });
    }

    // ✅ Check if the employee exists
    const assignedEmployee = await User.findById(employee);
    if (!assignedEmployee) {
      return res.status(404).json({ msg: "Employee not found" });
    }

    // ✅ Create new task
    const task = await Task.create({
      title,
      description,
      employee,
      status: "pending", // 👈 must match schema enum (lowercase)
    });

    res.status(201).json({ msg: "Task created successfully", task });
  } catch (err) {
    console.error("ADD TASK ERROR:", err);
    res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};

// ✅ Employee: Get their own tasks
export const getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ employee: req.user.id })
      .populate("employee", "name email employeeId");
    res.status(200).json(tasks);
  } catch (err) {
    console.error("GET MY TASKS ERROR:", err);
    res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};

// ✅ Admin: Get all tasks for dashboard
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("employee", "name email employeeId role");
    res.status(200).json(tasks);
  } catch (err) {
    console.error("GET ALL TASKS ERROR:", err);
    res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};

// ✅ Update Task Status (Admin or Employee if allowed)
export const updateTaskStatus = async (req, res) => {
  try {
    const { status } = req.body;

    // 🔍 Validate input
    if (!status) {
      return res.status(400).json({ msg: "Status is required" });
    }

    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    // ✅ Optional: restrict employees to update only their own tasks
    if (req.user.role === "employee" && task.employee.toString() !== req.user.id) {
      return res.status(403).json({ msg: "Not authorized to update this task" });
    }

    // ✅ Update status
    task.status = status.toLowerCase();
    await task.save();

    res.status(200).json({ msg: "Task status updated successfully", task });
  } catch (err) {
    console.error("UPDATE TASK ERROR:", err);
    res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};
