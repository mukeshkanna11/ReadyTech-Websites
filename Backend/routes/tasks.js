import express from "express";
import { createTask, getMyTasks, getAllTasks } from "../controllers/taskController.js";
import { protect, adminOnly } from "../middleware/auth.js";



const router = express.Router();

/**
 * @route   POST /api/tasks
 * @desc    Create new task (Admin only)
 */
router.post("/", protect, adminOnly, createTask);

/**
 * @route   GET /api/tasks/my-tasks
 * @desc    Get logged-in employee's tasks
 */
router.get("/my-tasks", protect, getMyTasks);

/**
 * @route   GET /api/tasks
 * @desc    Get all tasks (Admin only)
 */
router.get("/", protect, adminOnly, getAllTasks);

export default router;
