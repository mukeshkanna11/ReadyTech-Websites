// ========================================================
// Newsletter Subscribe Route 🚀
// ========================================================
import express from "express";
import Subscriber from "../models/subscribe.js";

const router = express.Router();

/**
 * @route   POST /api/subscribe
 * @desc    Add a new email subscriber
 * @access  Public
 */
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ msg: "Please enter a valid email address." });
    }

    // Check if subscriber already exists
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(200).json({ msg: "This email is already subscribed." });
    }

    // Create new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return res.status(201).json({ msg: "Thank you for subscribing! 🎉" });
  } catch (err) {
    console.error("❌ Subscribe Error:", err);
    return res.status(500).json({
      msg: "Internal server error. Please try again later.",
      error: err.message,
    });
  }
});

export default router;
