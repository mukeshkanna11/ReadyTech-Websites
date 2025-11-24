// backend/routes/tickets.js
import express from "express";
import Ticket from "../models/Ticket.js";

const router = express.Router();

/* -------------------------------------------------------
   ✅ 1. CREATE TICKET  (POST /api/tickets/create-ticket)
--------------------------------------------------------*/
router.post("/create-ticket", async (req, res) => {
  try {
    const { email, message } = req.body;

    if (!email || !message) {
      return res.status(400).json({
        success: false,
        message: "Email & message are required",
      });
    }

    // Generate Token ID
    const tokenId = Math.random().toString(36).substring(2, 10);

    // Create ticket
    const ticket = await Ticket.create({
      email,
      message,
      tokenId,
      status: "Open",
      responses: [
        {
          from: "bot",
          text: "Thank you! We received your ticket. Our team will respond soon.",
        },
      ],
    });

    return res.status(201).json({
      success: true,
      ticket,
      message: "Ticket created successfully",
    });
  } catch (error) {
    console.error("Ticket Creation Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

/* -------------------------------------------------------
   ✅ 2. SEND USER MESSAGE  (POST /api/tickets/send-message)
--------------------------------------------------------*/
router.post("/send-message", async (req, res) => {
  try {
    const { ticketId, message } = req.body;

    const ticket = await Ticket.findOne({ tokenId: ticketId });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    ticket.responses.push({ from: "user", text: message });

    // Auto reply
    ticket.responses.push({
      from: "bot",
      text: "Thanks for the update! Our team is checking it.",
    });

    await ticket.save();

    res.json({
      success: true,
      reply: "Message received successfully",
      ticket,
    });
  } catch (error) {
    console.error("Send Message Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

/* -------------------------------------------------------
   ✅ 3. GET TICKET BY TOKEN  (GET /api/tickets/:tokenId)
--------------------------------------------------------*/
router.get("/:tokenId", async (req, res) => {
  try {
    const { tokenId } = req.params;

    const ticket = await Ticket.findOne({ tokenId });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    return res.json({
      success: true,
      ticket,
    });
  } catch (error) {
    console.error("Get Ticket Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

/* -------------------------------------------------------
   ✅ 4. ADMIN UPDATE TICKET  
      (PATCH /api/tickets/:tokenId)
--------------------------------------------------------*/
router.patch("/:tokenId", async (req, res) => {
  try {
    const { tokenId } = req.params;
    const { status, response } = req.body;

    const ticket = await Ticket.findOne({ tokenId });

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    if (status) ticket.status = status;

    if (response) {
      ticket.responses.push({
        from: "agent",
        text: response,
      });
    }

    await ticket.save();

    return res.json({
      success: true,
      ticket,
      message: "Ticket updated successfully",
    });
  } catch (error) {
    console.error("Admin Ticket Update Error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

export default router;
