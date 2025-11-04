// models/Employee.js
import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Employee", EmployeeSchema);
