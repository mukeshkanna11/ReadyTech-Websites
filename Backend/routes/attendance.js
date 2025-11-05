// ========================================================
// 🕒 Attendance Routes — Full CRUD for Employee Attendance
// ========================================================

import express from "express";
import Attendance from "../models/Attendance.js"; // ✅ make sure this model exists

const router = express.Router();

/**
 * ✅ POST /api/attendance/mark
 * Mark attendance for an employee
 */
router.post("/mark", async (req, res) => {
  try {
    const { employeeId, date, status, notes } = req.body;

    if (!employeeId || !date || !status) {
      return res.status(400).json({
        success: false,
        message: "Employee ID, Date, and Status are required.",
      });
    }

    // Check for duplicate entry (same employee, same date)
    const existing = await Attendance.findOne({ employeeId, date });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Attendance for this date already exists.",
      });
    }

    const attendance = new Attendance({
      employeeId,
      date,
      status,
      notes,
    });

    const saved = await attendance.save();

    res.status(201).json({
      success: true,
      message: "Attendance marked successfully",
      attendance: saved,
    });
  } catch (err) {
    console.error("❌ POST /api/attendance/mark error:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

/**
 * ✅ GET /api/attendance/all
 * Fetch all attendance records
 */
router.get("/all", async (req, res) => {
  try {
    const records = await Attendance.find().sort({ date: -1 });
    res.status(200).json({
      success: true,
      count: records.length,
      records,
    });
  } catch (err) {
    console.error("❌ GET /api/attendance/all error:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

/**
 * ✅ GET /api/attendance/employee/:employeeId
 * Fetch attendance records for a specific employee
 */
router.get("/employee/:employeeId", async (req, res) => {
  try {
    const { employeeId } = req.params;
    const records = await Attendance.find({ employeeId }).sort({ date: -1 });

    res.status(200).json({
      success: true,
      count: records.length,
      records,
    });
  } catch (err) {
    console.error("❌ GET /api/attendance/employee/:employeeId error:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

/**
 * ✅ PATCH /api/attendance/update/:id
 * Update an attendance record
 */
router.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    const updated = await Attendance.findByIdAndUpdate(
      id,
      { status, notes, updatedAt: new Date() },
      { new: true }
    );

    if (!updated) {
      return res
        .status(404)
        .json({ success: false, message: "Attendance record not found" });
    }

    res.status(200).json({
      success: true,
      message: "Attendance updated successfully",
      attendance: updated,
    });
  } catch (err) {
    console.error("❌ PATCH /api/attendance/update/:id error:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

/**
 * ✅ DELETE /api/attendance/delete/:id
 * Delete an attendance record
 */
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Attendance.findByIdAndDelete(id);

    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Attendance record not found" });
    }

    res.status(200).json({
      success: true,
      message: "Attendance deleted successfully",
      attendance: deleted,
    });
  } catch (err) {
    console.error("❌ DELETE /api/attendance/delete/:id error:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

export default router;
