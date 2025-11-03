// Backend/models/Work.js
import mongoose from "mongoose";
const WorkSchema = new mongoose.Schema({
  employeeId: { type: String, required: true },
  taskTitle: { type: String, required: true },
  description: String,
  status: { type: String, default: "In Progress" },
  deadline: Date,
  createdBy: String,
}, { timestamps: true });

export default mongoose.models.Work || mongoose.model("Work", WorkSchema);
