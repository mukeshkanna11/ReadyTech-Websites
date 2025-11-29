import HelpdeskTicket from "../models/HelpdeskTicket.js";
import crypto from "crypto";

// Generate random token
const generateToken = () => crypto.randomBytes(4).toString("hex");

// Shared ticket token
export const SHARED_TOKEN = "helpdesk_shared";

// Ensure shared ticket exists
export const ensureSharedTicketExists = async () => {
  let ticket = await HelpdeskTicket.findOne({ tokenId: SHARED_TOKEN });
  if (!ticket) {
    ticket = await HelpdeskTicket.create({
      tokenId: SHARED_TOKEN,
      email: "shared@helpdesk.com",
      subject: "Shared Helpdesk Ticket",
      description: "All users can post messages here",
      responses: [],
      status: "Open",
    });
  }
  return ticket;
};

// Create individual ticket
export const createTicket = async (req, res) => {
  try {
    const { email, text } = req.body;

    if (!email || !text) {
      return res.status(400).json({
        success: false,
        message: "Email and text are required",
      });
    }

    const tokenId = generateToken();

    const ticket = await HelpdeskTicket.create({
      tokenId,
      email,
      subject: "",
      description: "",
      responses: [{ from: "user", text }],
      status: "New",
    });

    res.status(201).json({
      success: true,
      message: "Ticket created successfully",
      ticket,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Add response to ticket
export const addResponse = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { from, text } = req.body;

    if (!from || !text) {
      return res.status(400).json({
        success: false,
        message: "Sender and text are required",
      });
    }

    let ticket =
      ticketId === SHARED_TOKEN
        ? await ensureSharedTicketExists()
        : await HelpdeskTicket.findOne({ tokenId: ticketId });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    ticket.responses.push({ from, text });
    ticket.status = "Open";
    await ticket.save();

    res.json({
      success: true,
      message: "Response added",
      ticket,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get ticket by ID
export const getTicketById = async (req, res) => {
  try {
    const { ticketId } = req.params;

    let ticket =
      ticketId === SHARED_TOKEN
        ? await ensureSharedTicketExists()
        : await HelpdeskTicket.findOne({ tokenId: ticketId });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    res.json({
      success: true,
      ticket,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get tickets by email
export const getTicketByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const tickets = await HelpdeskTicket.find({ email });

    res.json({
      success: true,
      tickets,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get all tickets (admin)
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await HelpdeskTicket.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      tickets,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
