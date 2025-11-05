import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    employeeId: { type: String, required: true },
    date: { type: String, required: true },
    status: { type: String, enum: ["Present", "Absent", "On Leave"], default: "Present" },
    notes: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Attendance", attendanceSchema);
