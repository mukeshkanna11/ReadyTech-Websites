import mongoose from "mongoose";

const responseSchema = new mongoose.Schema(
  {
    from: {
      type: String,
      enum: ["user", "admin"],
      required: true,
      trim: true,
    },

    text: {
      type: String,
      required: true,
      trim: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    _id: false,
  }
);

const helpdeskSchema = new mongoose.Schema(
  {
    tokenId: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    subject: {
      type: String,
      default: "",
      trim: true,
    },

    description: {
      type: String,
      default: "",
      trim: true,
    },

    status: {
      type: String,
      enum: ["New", "Open", "Closed"],
      default: "New",
    },

    responses: {
      type: [responseSchema],
      default: [],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Prevent model overwrite during development
const HelpdeskTicket =
  mongoose.models.HelpdeskTicket ||
  mongoose.model("HelpdeskTicket", helpdeskSchema);

export default HelpdeskTicket;