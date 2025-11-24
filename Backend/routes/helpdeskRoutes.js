import express from "express";
import {
  createTicket,
  addResponse,
  getTicketByEmail,
  getTicketById
} from "../controllers/helpdeskController.js";

const router = express.Router();

/* ---------------------------------------------
   HELP DESK ROUTES (AI SMART SUPPORT SYSTEM)
   --------------------------------------------- */

// ✅ Create a new ticket (customer first message)
router.post("/create-ticket", createTicket);

// ✅ Add message to a ticket (user or bot or admin)
router.post("/add-response/:ticketId", addResponse);

// ✅ Get all tickets by user email (optional usage)
router.get("/by-email/:email", getTicketByEmail);

// ✅ Get full ticket conversation by ticket ID / tokenId
router.get("/:ticketId", getTicketById);

export default router;
