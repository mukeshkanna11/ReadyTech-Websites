import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

// Contact Us
router.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER, // You will receive the message
      subject: "New Contact Message",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.json({ msg: "Message sent successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Failed to send message" });
  }
});

// Subscribe
router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Subscriber",
      text: `New subscriber: ${email}`
    });

    res.json({ msg: "Subscribed successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Subscription failed" });
  }
});

export default router;
