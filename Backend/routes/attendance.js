// routes/attendance.js
import express from "express";
import Attendance from "../models/Attendance.js";

const router = express.Router();

// Get all attendance
router.get("/", async (req, res) => {
  try {
    const attendance = await Attendance.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, attendance });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
});

// Mark attendance
router.post("/", async (req, res) => {
  try {
    const { employeeId, date, status, notes } = req.body;
    if (!employeeId || !date) {
      return res.status(400).json({ success: false, message: "Employee ID and Date required" });
    }

    const newAttendance = new Attendance({ employeeId, date, status, notes });
    await newAttendance.save();

    res.status(201).json({ success: true, message: "Attendance marked successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
});

// Update attendance
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;
    const updated = await Attendance.findByIdAndUpdate(
      id,
      { status, notes, updatedAt: new Date() },
      { new: true }
    );
    if (!updated) return res.status(404).json({ success: false, message: "Attendance not found" });
    res.status(200).json({ success: true, message: "Attendance updated", attendance: updated });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
});

// Delete attendance
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Attendance.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ success: false, message: "Attendance not found" });
    res.status(200).json({ success: true, message: "Attendance deleted", attendance: deleted });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
});

export default router;
