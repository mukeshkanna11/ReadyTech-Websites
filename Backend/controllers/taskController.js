import Task from "../models/Task.js";
import User from "../models/User.js";

/**
 * 🧩 Admin: Add a new task for an employee
 */
export const addTask = async (req, res) => {
  try {
    const { title, description, employee } = req.body;

    if (!title || !employee) {
      return res.status(400).json({ msg: "Title and Employee ID are required" });
    }

    // 🔍 Check if employee exists
    const assignedEmployee = await User.findById(employee);
    if (!assignedEmployee) {
      return res.status(404).json({ msg: "Employee not found" });
    }

    // 🆕 Create task
    const task = await Task.create({
      title: title.trim(),
      description: description?.trim(),
      employee,
      status: "Pending", // ✅ Matches schema enum
    });

    res.status(201).json({
      msg: "Task created successfully",
      task,
    });
  } catch (err) {
    console.error("ADD TASK ERROR:", err);
    res.status(500).json({
      msg: "Internal Server Error",
      error: err.message,
    });
  }
};

/**
 * 👤 Employee: Get their assigned tasks
 */
export const getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ employee: req.user.id })
      .populate("employee", "name email role");

    res.status(200).json({
      msg: "My tasks fetched successfully",
      count: tasks.length,
      tasks,
    });
  } catch (err) {
    console.error("GET MY TASKS ERROR:", err);
    res.status(500).json({
      msg: "Internal Server Error",
      error: err.message,
    });
  }
};

/**
 * 🧑‍💼 Admin: Get all tasks
 */
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find()
      .populate("employee", "name email role");

    res.status(200).json({
      msg: "All tasks fetched successfully",
      count: tasks.length,
      tasks,
    });
  } catch (err) {
    console.error("GET ALL TASKS ERROR:", err);
    res.status(500).json({
      msg: "Internal Server Error",
      error: err.message,
    });
  }
};

/**
 * 🔄 Update Task Status (Admin or Assigned Employee)
 */
export const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // 🔍 Validate status input
    if (!status) {
      return res.status(400).json({ msg: "Status is required" });
    }

    const validStatuses = ["Pending", "In Progress", "Completed"];
    const formattedStatus =
      status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();

    if (!validStatuses.includes(formattedStatus)) {
      return res.status(400).json({
        msg: `Invalid status. Use one of: ${validStatuses.join(", ")}`,
      });
    }

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    // 🔐 Authorization: Admins or Task Owner
    if (
      req.user.role !== "admin" &&
      task.employee.toString() !== req.user.id
    ) {
      return res.status(403).json({ msg: "Not authorized to update this task" });
    }

    // ✅ Update
    task.status = formattedStatus;
    await task.save();

    res.status(200).json({
      msg: "Task status updated successfully",
      task,
    });
  } catch (err) {
    console.error("UPDATE TASK ERROR:", err);
    res.status(500).json({
      msg: "Internal Server Error",
      error: err.message,
    });
  }
};
