import Task from "../models/Task.js";
import User from "../models/User.js";

/**
 * @desc Create a new task (Admin only)
 * @route POST /api/tasks
 */
export const createTask = async (req, res) => {
  try {
    const { title, description, employeeId, status, dueDate } = req.body;

    // ✅ Validate required fields
    if (!title || !employeeId) {
      return res.status(400).json({ msg: "Title and Employee ID are required" });
    }

    // ✅ Find employee by employeeId (e.g., "RTS101")
    const employee = await User.findOne({ employeeId: employeeId.trim() });
    if (!employee) {
      return res.status(404).json({ msg: "Employee not found for given ID" });
    }

    // ✅ Create task linked to employee _id
    const task = new Task({
      title,
      description,
      employee: employee._id,
      status: status || "pending",
      dueDate,
    });

    await task.save();

    res.status(201).json({
      msg: "Task created successfully",
      task,
    });
  } catch (err) {
    console.error("❌ Create Task Error:", err);
    res.status(500).json({
      msg: "Internal Server Error",
      error: err.message,
    });
  }
};

/**
 * @desc Get tasks assigned to a specific employee (Employee only)
 * @route GET /api/tasks/my-tasks
 */
export const getMyTasks = async (req, res) => {
  try {
    const userId = req.user.id; // from JWT
    const tasks = await Task.find({ employee: userId }).populate("employee", "name email employeeId");
    res.status(200).json(tasks);
  } catch (err) {
    console.error("❌ Get My Tasks Error:", err);
    res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};

/**
 * @desc Get all tasks (Admin only)
 * @route GET /api/tasks
 */
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().populate("employee", "name email employeeId");
    res.status(200).json(tasks);
  } catch (err) {
    console.error("❌ Get All Tasks Error:", err);
    res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
};
