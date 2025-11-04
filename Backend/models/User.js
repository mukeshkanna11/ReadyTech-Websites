import mongoose from "mongoose";

// ✅ Dynamically validate Employee IDs (RTS001 to RTS1500)
export const isAllowedEmployeeId = (id) => {
  const prefix = "RTS";
  if (!id.startsWith(prefix)) return false;
  const number = parseInt(id.replace(prefix, ""), 10);
  return !isNaN(number) && number >= 1 && number <= 1500;
};

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    employeeId: { type: String, required: true, unique: true, trim: true },
    role: {
      type: String,
      required: true,
      enum: ["admin", "employee"],
    },
    department: { type: String, default: "General" },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
