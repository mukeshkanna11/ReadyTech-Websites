// controllers/supportController.js
import Ticket from "../models/Ticket.js";
import { v4 as uuidv4 } from "uuid";

/* =======================================================
   EMPLOYEE FUNCTIONS
========================================================= */

// Create a new ticket
export const createTicket = async (req, res) => {
  try {
    const { subject, description, email, employeeId } = req.body;

    if (!subject || !description || !email) {
      return res.status(400).json({
        success: false,
        message: "Subject, description, and email are required",
      });
    }

    const ticket = await Ticket.create({
      subject: subject.trim(),
      description: description.trim(),
      email: email.trim().toLowerCase(),
      employeeId: employeeId || null,
      tokenId: uuidv4(),
      responses: [],
    });

    res.status(201).json({
      success: true,
      message: "Ticket created successfully",
      ticket,
    });
  } catch (err) {
    console.error("createTicket error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get all tickets created by an employee using email
export const getTicketsByEmail = async (req, res) => {
  try {
    const email = req.params.email.toLowerCase();
    const tickets = await Ticket.find({ email }).sort({ createdAt: -1 });
    res.json({ success: true, tickets });
  } catch (err) {
    console.error("getTicketsByEmail error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get ticket by tokenId
export const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findOne({ tokenId: req.params.ticketId });
    if (!ticket) {
      return res.status(404).json({ success: false, message: "Ticket not found" });
    }
    res.json({ success: true, ticket });
  } catch (err) {
    console.error("getTicketById error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

/* =======================================================
   ADMIN FUNCTIONS
========================================================= */

// Get all tickets
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().sort({ createdAt: -1 });
    res.json({ success: true, tickets });
  } catch (err) {
    console.error("getAllTickets error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Add a response (employee/admin)
export const addResponse = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { from, text } = req.body;

    if (!from || !text) {
      return res.status(400).json({
        success: false,
        message: "From and text fields are required",
      });
    }

    const ticket = await Ticket.findOne({ tokenId: ticketId });
    if (!ticket) {
      return res.status(404).json({ success: false, message: "Ticket not found" });
    }

    ticket.responses.push({
      from: from.toLowerCase(),
      text: text.trim(),
      createdAt: new Date(),
    });

    await ticket.save();

    res.json({
      success: true,
      message: "Response added successfully",
      ticket,
    });
  } catch (err) {
    console.error("addResponse error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Admin replies to a ticket
// controllers/supportController.js
import Ticket from "../models/Ticket.js";

/**
 * Admin replies to a ticket
 * POST /api/support/admin/reply/:ticketId
 */
export const adminReplyTicket = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { replyMessage } = req.body;

    // Validate request
    if (!replyMessage || replyMessage.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Reply message is required",
      });
    }

    // Find ticket
    const ticket = await Ticket.findOne({ tokenId: ticketId });
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    // Add admin reply
    ticket.responses.push({
      from: "admin",
      text: replyMessage.trim(),
      createdAt: new Date(),
    });

    // Save ticket
    await ticket.save();

    // Success response
    res.status(200).json({
      success: true,
      message: "Reply added successfully",
      ticket,
    });
  } catch (err) {
    console.error("adminReplyTicket error:", err);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// Admin deletes a ticket
export const deleteTicketAdmin = async (req, res) => {
  try {
    const { ticketId } = req.params;

    const ticket = await Ticket.findOneAndDelete({ tokenId: ticketId });
    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    res.json({ success: true, message: "Ticket deleted successfully" });
  } catch (err) {
    console.error("deleteTicketAdmin error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
