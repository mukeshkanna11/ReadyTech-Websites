import express from "express";
import Work from "../models/Work.js";

const router = express.Router();

// ➕ Add new work
router.post("/add", async (req, res) => {
  try {
    const { employeeId, taskTitle, description, status, deadline } = req.body;
    const work = new Work({ employeeId, taskTitle, description, status, deadline });
    await work.save();
    res.status(201).json({ success: true, msg: "Work added successfully", work });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error adding work", error: err.message });
  }
});

// 📋 Fetch all works
router.get("/all", async (req, res) => {
  try {
    const works = await Work.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, msg: "All works fetched", works });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error fetching works", error: err.message });
  }
});

// ✏️ Update work status
router.patch("/update/:id", async (req, res) => {
  try {
    const work = await Work.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!work) return res.status(404).json({ success: false, msg: "Work not found" });
    res.status(200).json({ success: true, msg: "Work updated successfully", work });
  } catch (err) {
    res.status(500).json({ success: false, msg: "Error updating work", error: err.message });
  }
});

export default router;
