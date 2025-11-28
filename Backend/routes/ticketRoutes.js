import express from "express";
import {
  createTicket,
  addResponse,
  getTicketById,
  getTicketByEmail,
  getAllTickets
} from "../controllers/helpdeskController.js";

const router = express.Router();

// USER: Create ticket
router.post("/create-ticket", createTicket);

// USER/ADMIN: Add response (shared or individual)
router.post("/response/:ticketId", addResponse);

// USER/ADMIN: Get ticket by tokenId
router.get("/ticket/:ticketId", getTicketById);

// USER: Get tickets by email
router.get("/email/:email", getTicketByEmail);

// ADMIN: Get all tickets
router.get("/all", getAllTickets);

export default router;
