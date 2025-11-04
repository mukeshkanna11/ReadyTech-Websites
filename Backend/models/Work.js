import mongoose from "mongoose";

const workSchema = new mongoose.Schema(
  {
    employeeId: { type: String, required: true },
    taskTitle: { type: String, required: true },
    description: { type: String },
    status: { type: String, default: "Pending" },
    deadline: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Work", workSchema);
