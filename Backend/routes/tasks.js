// routes/tasks.js
import express from "express";
import Task from "../models/Task.js";

const router = express.Router();

// Add new task
router.post("/add", async (req, res) => {
  try {
    const { title, description, employee } = req.body;

    console.log("🆕 ADD TASK BODY:", req.body);

    if (!title || !employee) {
      return res.status(400).json({ msg: "Title and Employee are required" });
    }

    const task = new Task({
      title,
      description,
      employee,
      status: "Pending",
    });

    await task.save();
    res.json({ msg: "✅ Task added successfully", task });
  } catch (err) {
    console.error("❌ ADD TASK ERROR:", err.message);
    res.status(500).json({ msg: "Internal Server Error", error: err.message });
  }
});

export default router;
