import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: [true, "Employee ID is required"],
      trim: true,
    },
    date: {
      type: String, // could also be Date, but String (YYYY-MM-DD) is simpler for filtering
      required: [true, "Date is required"],
    },
    status: {
      type: String,
      enum: ["Present", "Absent", "Leave", "Half Day"],
      required: [true, "Status is required"],
      default: "Present",
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Attendance", attendanceSchema);
