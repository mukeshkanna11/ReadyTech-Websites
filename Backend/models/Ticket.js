// backend/models/Ticket.js
import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    tokenId: { type: String, required: true, unique: true },

    // Not required anymore
    email: { type: String, required: true },

    subject: { type: String, default: "" },     // ← removed required
    description: { type: String, default: "" }, // ← removed required

    status: {
      type: String,
      enum: ["New", "Open", "Closed"],
      default: "New",
    },

    responses: [
      {
        from: { type: String, enum: ["user", "admin"], required: true },
        text: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", ticketSchema);
