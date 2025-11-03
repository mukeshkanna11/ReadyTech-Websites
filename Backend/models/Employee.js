import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  employeeId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String },
  role: { type: String, default: "Employee" },
  department: { type: String },
  attendance: { type: Number, default: 0 },
  incentives: { type: Number, default: 0 },
  workStatus: [{ type: mongoose.Schema.Types.ObjectId, ref: "WorkStatus" }],
});

export default mongoose.model("Employee", employeeSchema);
