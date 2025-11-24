import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema(
  {
    tokenId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    status: { type: String, default: "Open" },

    responses: [
      {
        from: { type: String },
        text: { type: String },
        createdAt: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Ticket", TicketSchema);
