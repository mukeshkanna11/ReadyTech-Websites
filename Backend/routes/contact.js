// routes/contact.js
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();

/**
 * @route   POST /api/contact
 * @desc    Send contact form message via email and confirm to user
 * @access  Public
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // ---------------- Validate Input ----------------
    if (!name || !email || !message) {
      return res.status(400).json({
        msg: "Name, email, and message are required"
      });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ msg: "Invalid email format" });
    }

    // ---------------- Nodemailer Transport ----------------
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    });

    // ---------------- Email to Company ----------------
    const companyMailOptions = {
      from: `"ReadyTech Contact" <${process.env.MAIL_USER}>`,
      to: "uiuxmukesh@gmail.com", // Replace with your company inbox
      subject: "📩 New Contact Form Submission",
      html: `
        <h2>📩 New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // ---------------- Confirmation Email to User ----------------
    const userMailOptions = {
      from: `"ReadyTech Solutions" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "✅ We received your message!",
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for contacting ReadyTech Solutions. We have received your message and our team will get back to you shortly.</p>
        <p><strong>Your Message:</strong></p>
        <p>${message}</p>
        <p>Best Regards,<br/>ReadyTech Solutions Team</p>
      `
    };

    // ---------------- Send Emails ----------------
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ msg: "Message sent successfully ✅" });
  } catch (err) {
    console.error("CONTACT ERROR:", err);
    res.status(500).json({
      msg: "Server error, failed to send message",
      error: err.message
    });
  }
});

export default router;
