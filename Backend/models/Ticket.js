import mongoose from "mongoose";

const responseSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      enum: ["employee", "admin"],
      required: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    }
  },
  { _id: false }
);

const ticketSchema = new mongoose.Schema(
  {
    tokenId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    subject: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    employeeId: {
      type: String,
      default: null,
      trim: true,
    },
    status: {
      type: String,
      enum: ["open", "in-progress", "closed"],
      default: "open",
    },
    responses: [responseSchema],
  },
  { timestamps: true }
);

/** 🔥 Permanent Fix: Auto-lowercase ANY incorrect old values */
ticketSchema.pre("save", function (next) {
  if (this.responses && this.responses.length > 0) {
    this.responses = this.responses.map((r) => ({
      ...r,
      from: r.from.toLowerCase(), // auto-fix Admin → admin
    }));
  }
  next();
});

export default mongoose.model("Ticket", ticketSchema);
