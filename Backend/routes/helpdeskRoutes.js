import express from "express";
import {
  createTicket,
  addResponse,
  getTicketByEmail,
  getTicketById,
  getAllTickets,
} from "../controllers/helpdeskController.js";
import authMiddleware from "../middleware/authMiddleware.js"; // optional

const router = express.Router();

// USER: Create ticket
router.post("/create", createTicket);

// USER/ADMIN: Add response
router.post("/response/:ticketId", addResponse);

// USER/ADMIN: Get ticket by tokenId
router.get("/ticket/:ticketId", getTicketById);

// USER: Get all tickets by email
router.get("/email/:email", getTicketByEmail);

// ADMIN: Get all tickets
router.get("/all", getAllTickets);

export default router;
