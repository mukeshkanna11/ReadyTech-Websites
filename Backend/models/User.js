import mongoose from "mongoose";

// Allowed Employee IDs
export const allowedEmployeeIds = ["RTS001", "RTS002", "RTS003", "RTS112"];

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    employeeId: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "employee"], // only allow admin or employee
    },
    department: { type: String, default: "General" },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
