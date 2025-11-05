// routes/attendance.js
import express from "express";
import Attendance from "../models/Attendance.js";

const router = express.Router();

// ========================================================
// 🕒 GET Attendance Records
// Optional query param: ?employeeId=RTS112
// ========================================================
router.get("/", async (req, res) => {
  try {
    const { employeeId } = req.query;
    const filter = employeeId ? { employeeId } : {};
    const attendance = await Attendance.find(filter).sort({ date: -1 });
    res.status(200).json({ success: true, attendance });
  } catch (err) {
    console.error("Attendance GET failed:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

// ========================================================
// 📝 POST: Mark Attendance
// ========================================================
router.post("/", async (req, res) => {
  try {
    const { employeeId, date, status, notes } = req.body;

    // Validation
    if (!employeeId || !date || !status) {
      return res.status(400).json({
        success: false,
        message: "Employee ID, Date, and Status are required",
      });
    }

    // Convert date string to Date object
    const attendanceDate = new Date(date);
    if (isNaN(attendanceDate.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid date format",
      });
    }

    const newAttendance = new Attendance({
      employeeId,
      date: attendanceDate,
      status,
      notes: notes || "",
    });

    await newAttendance.save();

    res.status(201).json({
      success: true,
      message: "Attendance marked successfully",
      attendance: newAttendance,
    });
  } catch (err) {
    console.error("Attendance POST failed:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

// ========================================================
// ✏️ PUT: Update Attendance
// ========================================================
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        message: "Status is required for update",
      });
    }

    const updated = await Attendance.findByIdAndUpdate(
      id,
      { status, notes, updatedAt: new Date() },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ success: false, message: "Attendance not found" });
    }

    res.status(200).json({
      success: true,
      message: "Attendance updated successfully",
      attendance: updated,
    });
  } catch (err) {
    console.error("Attendance PUT failed:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

// ========================================================
// 🗑️ DELETE: Remove Attendance Record
// ========================================================
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Attendance.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Attendance not found" });
    }

    res.status(200).json({
      success: true,
      message: "Attendance deleted successfully",
      attendance: deleted,
    });
  } catch (err) {
    console.error("Attendance DELETE failed:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

export default router;
