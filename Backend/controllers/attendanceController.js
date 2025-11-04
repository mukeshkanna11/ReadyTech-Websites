// controllers/attendanceController.js
import Attendance from "../models/Attendance.js";

// ✅ Get all attendance records
export const getAllAttendance = async (req, res, next) => {
  try {
    const attendance = await Attendance.find().populate("employee");
    res.status(200).json(attendance);
  } catch (error) {
    next(error);
  }
};

// ✅ Mark attendance
export const createAttendance = async (req, res, next) => {
  try {
    const { employee, date, status } = req.body;
    const newRecord = new Attendance({ employee, date, status });
    await newRecord.save();
    res.status(201).json({ message: "Attendance marked successfully", newRecord });
  } catch (error) {
    next(error);
  }
};

// ✅ Update attendance
export const updateAttendance = async (req, res, next) => {
  try {
    const updated = await Attendance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Record not found" });
    res.status(200).json({ message: "Attendance updated", updated });
  } catch (error) {
    next(error);
  }
};

// ✅ Delete attendance record
export const deleteAttendance = async (req, res, next) => {
  try {
    const deleted = await Attendance.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Record not found" });
    res.status(200).json({ message: "Attendance deleted" });
  } catch (error) {
    next(error);
  }
};
