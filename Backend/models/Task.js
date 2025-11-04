import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "In Progress", "Completed"], // Capital letters
      default: "Pending",
      set: (v) =>
        v.charAt(0).toUpperCase() + v.slice(1).toLowerCase(), // Normalize values
    },
  },
  { timestamps: true }
);

export default mongoose.model("Task", TaskSchema);
