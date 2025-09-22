import mongoose from "mongoose";

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
      unique: true
    },
    role: { type: String, default: "Employee" },
    department: { type: String, default: "General" }, // new field
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
