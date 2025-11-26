// // backend/controllers/helpdeskController.js
// import HelpdeskTicket from "../models/HelpdeskTicket.js";
// import { customAlphabet } from "nanoid";

// const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyz", 8);

// // POST /api/helpdesk/create-ticket
// export const createTicket = async (req, res, next) => {
//   try {
//     const { name, email, phone, subject = "General", message = "Chat started" } = req.body || {};

//     if (!message) return res.status(400).json({ error: "message required" });

//     const tokenId = nanoid();

//     const ticket = new HelpdeskTicket({
//       tokenId,
//       name,
//       email,
//       phone,
//       subject,
//       message,
//       responses: [
//         { from: "bot", text: process.env.TICKET_AUTO_REPLY || "Thanks — we received your request. We'll get back to you soon." },
//       ],
//     });

//     await ticket.save();

//     return res.status(201).json({
//       ticketId: tokenId,
//       status: ticket.status,
//       autoReply: ticket.responses[0].text,
//       createdAt: ticket.createdAt,
//     });
//   } catch (err) {
//     next(err);
//   }
// };

// // POST /api/helpdesk/send
// export const sendMessage = async (req, res, next) => {
//   try {
//     const { ticketId, message } = req.body || {};
//     if (!ticketId || !message) return res.status(400).json({ error: "ticketId and message required" });

//     const ticket = await HelpdeskTicket.findOne({ tokenId: ticketId });
//     if (!ticket) return res.status(404).json({ error: "Ticket not found" });

//     // Save user message
//     ticket.responses.push({ from: "user", text: message });

//     // Example: simple auto-reply bot (replace with real logic later)
//     const botReply = process.env.TICKET_AUTO_REPLY || "Thanks — we received your message. We'll respond soon.";
//     ticket.responses.push({ from: "bot", text: botReply });

//     await ticket.save();

//     return res.json({ success: true, reply: botReply, ticket });
//   } catch (err) {
//     next(err);
//   }
// };

// // GET /api/helpdesk/:token
// export const getTicket = async (req, res, next) => {
//   try {
//     const { token } = req.params;
//     const ticket = await HelpdeskTicket.findOne({ tokenId: token }).lean();
//     if (!ticket) return res.status(404).json({ error: "Ticket not found" });
//     return res.json(ticket);
//   } catch (err) {
//     next(err);
//   }
// };

// // PATCH /api/helpdesk/:token (admin)
// export const patchTicket = async (req, res, next) => {
//   try {
//     const apiKey = process.env.API_KEY;
//     const provided = req.headers["x-api-key"] || req.body.apiKey;
//     if (apiKey && provided !== apiKey) return res.status(401).json({ error: "Unauthorized" });

//     const { token } = req.params;
//     const { status, response } = req.body || {};
//     const ticket = await HelpdeskTicket.findOne({ tokenId: token });
//     if (!ticket) return res.status(404).json({ error: "Ticket not found" });

//     if (status) ticket.status = status;
//     if (response && response.text) {
//       ticket.responses.push({
//         from: response.from || "agent",
//         text: response.text,
//       });
//     }

//     await ticket.save();

//     // Optionally notify user here by email (not implemented)
//     return res.json(ticket);
//   } catch (err) {
//     next(err);
//   }
// };
