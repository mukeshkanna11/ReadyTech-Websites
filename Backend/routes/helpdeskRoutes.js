import express from "express";
export {
  createTicket,
  addResponse,
  getTicketById,
  getTicketByEmail,
  getAllTickets, // make sure this exists here
  ensureSharedTicketExists // optional
};


const router = express.Router();

// USER: Create individual ticket
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
