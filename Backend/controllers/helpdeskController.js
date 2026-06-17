import HelpdeskTicket from "../models/HelpdeskTicket.js";
import crypto from "crypto";
import { sendHelpdeskMail } from "../utils/sendHelpdeskMail.js";

// Generate random token
const generateToken = () =>
  crypto.randomBytes(4).toString("hex");

export const SHARED_TOKEN = "helpdesk_shared";

// Email validation
const emailRegex =
  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

// Ensure shared ticket exists
export const ensureSharedTicketExists = async () => {
  let ticket = await HelpdeskTicket.findOne({
    tokenId: SHARED_TOKEN,
  });

  if (!ticket) {
    ticket = await HelpdeskTicket.create({
      tokenId: SHARED_TOKEN,
      email: "shared@helpdesk.com",
      subject: "Shared Helpdesk Ticket",
      description: "Shared Helpdesk Chat",
      responses: [
        {
          from: "admin",
          text: "Welcome to ReadyTech Support 👋",
          createdAt: new Date(),
        },
      ],
      status: "Open",
    });
  }

  return ticket;
};

// Create Ticket
export const createTicket = async (req, res) => {
  try {
    const {
      email,
      text,
      tokenId,
      subject = "",
      description = "",
    } = req.body;

    if (!email?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    if (!text?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    const finalToken =
      tokenId?.trim() || generateToken();

    let ticket = await HelpdeskTicket.findOne({
      tokenId: finalToken,
    });

    if (ticket) {
      return res.status(200).json({
        success: true,
        message: "Ticket already exists",
        ticket,
      });
    }

    ticket = await HelpdeskTicket.create({
      tokenId: finalToken,
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      description: description.trim(),
      status: "New",

      responses: [
        {
          from: "user",
          text: text.trim(),
          createdAt: new Date(),
        },
        {
          from: "admin",
          text:
            "📩 Please share your email address. Our team will contact you within 24 hours.",
          createdAt: new Date(),
        },
      ],
    });

    await sendHelpdeskMail({
      customerEmail: email,
      customerMessage: text,
    });

    return res.status(201).json({
      success: true,
      message: "Ticket created successfully",
      ticketId: ticket.tokenId,
      ticket,
    });
  } catch (err) {
    console.error("Create Ticket Error:", err);

    return res.status(500).json({
      success: false,
      message: "Failed to create ticket",
    });
  }
};

// Add Response
export const addResponse = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { from, text } = req.body;

    if (!from || !text?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Sender and text are required",
      });
    }

    let ticket;

    // ⚡ Shared ticket handling
    if (ticketId === SHARED_TOKEN) {
      ticket = await ensureSharedTicketExists();
    } else {
      ticket = await HelpdeskTicket.findOne({ tokenId: ticketId });
    }

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    ticket.responses.push({
      from,
      text: text.trim(),
      createdAt: new Date(),
    });

    ticket.status = "Open";

    // 🚀 DO NOT BLOCK REQUEST ON SAVE (IMPORTANT FIX)
    ticket.save().catch((err) => {
      console.error("Ticket save failed:", err);
    });

    // 🚀 EMAIL NON-BLOCKING
    if (from === "user" && emailRegex.test(text)) {
      sendHelpdeskMail({
        customerEmail: text.trim(),
        customerMessage:
          "Customer shared their email via Helpdesk Chat.",
      }).catch((err) =>
        console.error("Email failed (non-blocking):", err)
      );
    }

    return res.status(200).json({
      success: true,
      message: "Response added successfully",
      ticket,
    });

  } catch (err) {
    console.error("addResponse ERROR:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get Ticket By ID
export const getTicketById = async (req, res) => {
  try {
    const { ticketId } = req.params;

    let ticket;

    if (ticketId === SHARED_TOKEN) {
      ticket = await ensureSharedTicketExists();
    } else {
      ticket = await HelpdeskTicket.findOne({
        tokenId: ticketId,
      });
    }

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    return res.status(200).json({
      success: true,
      ticket,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get Tickets By Email
export const getTicketByEmail = async (req, res) => {
  try {
    const tickets = await HelpdeskTicket.find({
      email: req.params.email,
    }).sort({ createdAt: -1 });

    return res.json({
      success: true,
      tickets,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Admin - Get All Tickets
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await HelpdeskTicket.find()
      .sort({ createdAt: -1 });

    return res.json({
      success: true,
      tickets,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};