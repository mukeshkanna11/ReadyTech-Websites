// backend/controllers/ticketsController.js
import Ticket from "../models/Ticket.js";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 8); // 8-char token

/**
 * Create a new ticket
 */
export const createTicket = async (req, res, next) => {
  try {
    const { message, email } = req.body;
    if (!message || !message.trim()) {
      return res.status(400).json({ error: "Message is required" });
    }

    const tokenId = nanoid();
    const ticket = new Ticket({
      tokenId,
      message: message.trim(),
      email,
      responses: [{ from: "bot", text: "Thanks — we received your request. We'll reach out soon." }],
    });

    await ticket.save();

    // Optional: notify admins (email/SMS) - hook function could be added here
    // await notifyAdmins(ticket);

    return res.status(201).json({
      tokenId: ticket.tokenId,
      message: ticket.message,
      status: ticket.status,
      createdAt: ticket.createdAt,
    });
  } catch (err) {
    next(err);
  }
};

export const sendTicketResponse = async (req, res, next) => {
  try {
    const { ticketId } = req.params;
    const { text, from = "agent" } = req.body;

    if (!text || !text.trim()) {
      return res.status(400).json({
        success: false,
        message: "Response text is required",
      });
    }

    const ticket = await Ticket.findOne({ tokenId: ticketId });

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

    // 🔥 HARD TIMEOUT PROTECTION
    const savePromise = ticket.save();

    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("DB_SAVE_TIMEOUT")), 8000)
    );

    await Promise.race([savePromise, timeoutPromise]);

    return res.json({
      success: true,
      message: "Response added successfully",
      ticket,
    });

  } catch (err) {
    console.error("TICKET RESPONSE ERROR:", err);

    return res.status(500).json({
      success: false,
      message:
        err.message === "DB_SAVE_TIMEOUT"
          ? "Database is slow. Please try again."
          : "Internal server error",
    });
  }
};

/**
 * Get ticket by token
 */
export const getTicket = async (req, res, next) => {
  try {
    const token = req.params.token;
    const ticket = await Ticket.findOne({ tokenId: token }).lean();
    if (!ticket) return res.status(404).json({ error: "Ticket not found" });
    return res.json(ticket);
  } catch (err) {
    next(err);
  }
};

/**
 * List tickets (optional filter by email)
 */
export const listTickets = async (req, res, next) => {
  try {
    const { email } = req.query;
    const filter = email ? { email } : {};
    const tickets = await Ticket.find(filter).sort({ createdAt: -1 }).limit(500).lean();
    return res.json(tickets);
  } catch (err) {
    next(err);
  }
};

/**
 * Update ticket: change status or add agent response
 * Protected by API_KEY in req.body.apiKey (see route).
 */
export const patchTicket = async (req, res, next) => {
  try {
    const token = req.params.token;
    const { status, response } = req.body; // response = { from: 'agent', text: '...' }

    const ticket = await Ticket.findOne({ tokenId: token });
    if (!ticket) return res.status(404).json({ error: "Ticket not found" });

    if (status) ticket.status = status;
    if (response && response.text) {
      ticket.responses.push({
        from: response.from || "agent",
        text: response.text,
      });
    }

    await ticket.save();

    // Optional: notify user on status change via email/SMS
    // await notifyUserOnUpdate(ticket);

    return res.json(ticket);
  } catch (err) {
    next(err);
  }
};
