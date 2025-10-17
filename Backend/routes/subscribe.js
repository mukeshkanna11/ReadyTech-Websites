import express from "express";
import Subscriber from "../models/Subscriber.js";

const router = express.Router();

// POST /api/subscribe
router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ msg: "Email is required" });
  }

  try {
    const exists = await Subscriber.findOne({ email });
    if (exists) {
      return res.json({ msg: "Email already subscribed" });
    }

    const newSub = new Subscriber({ email });
    await newSub.save();
    return res.json({ msg: "Thank you for subscribing!" });
  } catch (err) {
    console.error("Subscribe Error:", err.message);
    return res.status(500).json({ msg: "Server error" });
  }
});

export default router;
