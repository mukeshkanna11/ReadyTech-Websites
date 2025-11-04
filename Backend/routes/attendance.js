// routes/attendance.js
import express from "express";
import {
  getAllAttendance,
  createAttendance,
  updateAttendance,
  deleteAttendance,
} from "../controllers/attendanceController.js";

const router = express.Router();

router.get("/", getAllAttendance);
router.post("/", createAttendance);
router.put("/:id", updateAttendance);
router.delete("/:id", deleteAttendance);

export default router;
