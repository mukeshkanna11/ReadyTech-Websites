import Helpdesk from "../models/HelpdeskTicket.js";

// Generate token ID
function generateToken() {
  return Math.random().toString(36).substring(2, 10);
}

// CREATE TICKET
export const createTicket = async (req, res) => {
  try {
    const { email, message } = req.body;

    const tokenId = generateToken();

    const newTicket = await Helpdesk.create({
      tokenId,
      email,
      message,
      status: "Open",
      responses: [
        {
          from: "bot",
          text: "Thanks — we received your request. We'll reach out soon.",
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Ticket created successfully",
      ticket: newTicket,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
