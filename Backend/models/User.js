import mongoose from "mongoose";

// Generate allowed Employee IDs dynamically
export const isAllowedEmployeeId = (id) => {
  const prefix = "RTS";
  const number = parseInt(id.replace(prefix, ""), 10);
  return prefix && number >= 1 && number <= 1500;
};

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
      enum: ["admin", "employee"], // only admin or employee
    },
    department: { type: String, default: "General" },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
