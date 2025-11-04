import express from "express";
import {
  addTask,
  getAllTasks,
  getMyTasks,
  updateTaskStatus,
} from "../controllers/taskController.js";
import { protect, adminOnly } from "../middleware/auth.js";

const router = express.Router();

/**
 * @route   POST /api/tasks/add
 * @desc    Admin can add a new task for an employee
 * @access  Private (Admin)
 */
router.post("/add", protect, adminOnly, addTask);

/**
 * @route   GET /api/tasks/all
 * @desc    Admin can view all tasks
 * @access  Private (Admin)
 */
router.get("/all", protect, adminOnly, getAllTasks);

/**
 * @route   GET /api/tasks/my
 * @desc    Employee can view their assigned tasks
 * @access  Private (Employee)
 */
router.get("/my", protect, getMyTasks);

/**
 * @route   PATCH /api/tasks/update/:id
 * @desc    Update task status (Employee or Admin)
 * @access  Private
 */
router.patch("/update/:id", protect, updateTaskStatus);

/**
 * @route   GET /api/tasks/test
 * @desc    Debug route to check if backend and JSON parsing work
 * @access  Public
 */
router.post("/test", (req, res) => {
  console.log("🧩 Test Body:", req.body);
  res.json({ received: req.body });
});

export default router;
