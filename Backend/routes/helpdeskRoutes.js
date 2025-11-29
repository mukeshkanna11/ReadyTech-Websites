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
router.post("/response/:ticketId", addResponse);


// Get ticket by ID
router.get("/ticket/:ticketId", getTicketById);

// Get tickets by email
router.get("/email/:email", getTicketByEmail);

// Get all tickets
router.get("/all", getAllTickets);

export default router;
