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
    role: {
      type: String,
      required: true,
      enum: ["admin", "employee"], // only allow these values
    },
    department: { type: String, default: "General" },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
