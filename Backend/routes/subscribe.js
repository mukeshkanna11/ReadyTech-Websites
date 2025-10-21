import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

/**
 * @route   POST /api/contact/subscribe
 * @desc    Add a new email subscriber
 * @access  Public
 */
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    // 🔹 Basic validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ msg: "Please enter a valid email address." });
    }

    // 🔹 Check if email already exists
    const existing = await Subscriber.findOne({ email });
    if (existing) {
      return res.status(200).json({ msg: "This email is already subscribed." });
    }

    // 🔹 Save new subscriber
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    return res.status(201).json({ msg: "Thank you for subscribing! 🎉" });
  } catch (err) {
    console.error("❌ Subscribe Error:", err);
    return res.status(500).json({ msg: "Internal server error. Please try again later." });
  }
});

export default router;
