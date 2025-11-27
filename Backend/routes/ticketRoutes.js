import express from "express";
import {
  createTicket,
  addResponse,
  getTicketById,
  getTicketByEmail,
  getAllTickets,
} from "../controllers/helpdeskController.js";

const router = express.Router();

// Create ticket
router.post("/create-ticket", createTicket);

// Add response
router.post("/add-response/:ticketId", addResponse);

// Get all tickets (admin) — static first
router.get("/all", getAllTickets);

// Get tickets by email — static first
router.get("/by-email/:email", getTicketByEmail);

// Get ticket by ID — dynamic last
router.get("/:ticketId", getTicketById);

export default router;
