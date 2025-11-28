import mongoose from "mongoose";

const helpdeskSchema = new mongoose.Schema(
  {
    tokenId: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    subject: { type: String, default: "" },
    description: { type: String, default: "" },
    status: { type: String, enum: ["New", "Open", "Closed"], default: "New" },
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

const HelpdeskTicket = mongoose.model("HelpdeskTicket", helpdeskSchema);
export default HelpdeskTicket;
