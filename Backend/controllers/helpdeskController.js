import HelpdeskTicket from "../models/HelpdeskTicket.js";
import crypto from "crypto";

const generateToken = () => crypto.randomBytes(4).toString("hex");

// CREATE TICKET
export const createTicket = async (req, res) => {
  try {
    const { email, text } = req.body;

    if (!email || !text) {
      return res.status(400).json({
        success: false,
        message: "Email and message text are required",
      });
    }

    const tokenId = generateToken();

    const ticket = await HelpdeskTicket.create({
      tokenId,
      email,
      subject: "",
      description: "",
      responses: [{ from: "user", text }],
    });

    res.status(201).json({
      success: true,
      message: "Ticket created",
      ticket,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// ADD RESPONSE
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

    const ticket = await HelpdeskTicket.findOne({ tokenId: ticketId });

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
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET TICKET BY ID
export const getTicketById = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const ticket = await HelpdeskTicket.findOne({ tokenId: ticketId });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    res.json({ success: true, ticket });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET TICKETS BY EMAIL
export const getTicketByEmail = async (req, res) => {
  try {
    const { email } = req.params;

    const tickets = await HelpdeskTicket.find({ email });

    res.json({ success: true, tickets });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// GET ALL TICKETS (ADMIN)
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await HelpdeskTicket.find().sort({ createdAt: -1 });

    res.json({ success: true, tickets });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
