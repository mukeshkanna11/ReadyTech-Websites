import express from "express";
import {
  createTicket,
  getTicketsByEmail,
  getAllTickets,
  getTicketById,
  addResponse,
  adminReplyTicket,
  deleteTicketAdmin,
} from "../controllers/supportController.js";
import { requireAuth, requireAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

/* ===========================================
   EMPLOYEE ROUTES (requireAuth)
=========================================== */

// Create a new ticket
// POST /api/support/ticket
router.post("/ticket", requireAuth, createTicket);

// Get tickets by employee email
// GET /api/support/tickets/:email
router.get("/tickets/:email", requireAuth, getTicketsByEmail);

// Get a single ticket by tokenId
// GET /api/support/ticket/:ticketId
router.get("/ticket/:ticketId", requireAuth, getTicketById);

// Employee adds a response to a ticket
// POST /api/support/add-response/:ticketId
router.post("/add-response/:ticketId", requireAuth, addResponse);

/* ===========================================
   ADMIN ROUTES (requireAuth + requireAdmin)
=========================================== */

// Get all tickets for admin dashboard
// GET /api/support/admin/tickets
router.get("/admin/tickets", requireAuth, requireAdmin, getAllTickets);

// Admin replies to a ticket
// POST /api/support/admin/reply/:ticketId
router.post("/admin/reply/:ticketId", requireAuth, requireAdmin, adminReplyTicket);

// Admin deletes a ticket
// DELETE /api/support/admin/ticket/:ticketId
router.delete("/admin/ticket/:ticketId", requireAuth, requireAdmin, deleteTicketAdmin);

export default router;
