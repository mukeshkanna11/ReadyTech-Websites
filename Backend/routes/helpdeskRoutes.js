// import express from "express";
// import {
//   createTicket,
//   addResponse,
//   getTicketByEmail,
//   getTicketById,
//   getAllTickets
// } from "../controllers/helpdeskController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// /* ---------------------------------------------
//    HELP DESK ROUTES (AI SMART SUPPORT SYSTEM)
//    --------------------------------------------- */

// /**
//  * @route   POST /api/support/create-ticket
//  * @desc    Create a new support ticket (initial employee message)
//  * @access  Private (authenticated user)
//  */
// router.post("/create-ticket", authMiddleware, createTicket);

// /**
//  * @route   POST /api/support/add-response/:ticketId
//  * @desc    Add a response to a ticket (employee, admin, or bot)
//  * @access  Private (authenticated)
//  */
// router.post("/add-response/:ticketId", authMiddleware, addResponse);

// /**
//  * @route   GET /api/support/by-email/:email
//  * @desc    Get all tickets for a specific employee by email
//  * @access  Private (authenticated)
//  */
// router.get("/by-email/:email", authMiddleware, getTicketByEmail);

// /**
//  * @route   GET /api/support/:ticketId
//  * @desc    Get full conversation of a ticket by ID
//  * @access  Private (authenticated)
//  */
// router.get("/:ticketId", authMiddleware, getTicketById);

// /**
//  * @route   GET /api/support/all
//  * @desc    Get all tickets (for admin overview)
//  * @access  Private (Admin only)
//  */
// router.get("/all", authMiddleware, getAllTickets);

// export default router;
