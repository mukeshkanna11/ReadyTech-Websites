import express from "express";
import {
  createTicket,
  addResponse,
  getTicketByEmail,
  getTicketById
} from "../controllers/helpdeskController.js";

const router = express.Router();

// Create new ticket
router.post("/create-ticket", createTicket);

// Add user or admin response
router.post("/add-response/:ticketId", addResponse);

// Get ticket using email
router.get("/by-email/:email", getTicketByEmail);

// Get ticket using token / ID
router.get("/:ticketId", getTicketById);

export default router;
