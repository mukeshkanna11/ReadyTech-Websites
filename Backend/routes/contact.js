// routes/contact.js
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import validator from "validator";

dotenv.config();
const router = express.Router();

// ---------------- Nodemailer Transporter ----------------
// Uses Gmail SMTP with App Password (secure)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER, // Gmail address
    pass: process.env.MAIL_PASS, // Gmail App Password
  },
});

// Verify transporter on startup
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email transporter ready to send messages.");
  }
});

// ---------------- POST /api/contact ----------------
/**
 * Send contact form message
 * Sends notification to company and confirmation to user
 */
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ msg: "Name, email, and message are required." });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "Invalid email address." });
    }

    // Company notification email
    const companyMail = {
      from: `"ReadyTech Contact" <${process.env.MAIL_USER}>`,
      to: process.env.COMPANY_EMAIL || "uiuxmukesh@gmail.com",
      subject: `📬 New Contact from ${name}`,
      html: `
        <h2 style="color:#4f46e5;">📩 New Contact Submission</h2>
        <p><strong>Name:</strong> ${validator.escape(name)}</p>
        <p><strong>Email:</strong> ${validator.escape(email)}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="border-left:4px solid #4f46e5;padding-left:10px;">
          ${validator.escape(message)}
        </blockquote>
        <p style="font-size:12px;color:#999;">Sent via ReadyTech Website</p>
      `,
    };

    // User confirmation email
    const userMail = {
      from: `"ReadyTech Solutions" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "✅ We’ve received your message!",
      html: `
        <h2 style="color:#4f46e5;">Hello ${validator.escape(name)},</h2>
        <p>Thanks for reaching out to <strong>ReadyTech Solutions</strong>.</p>
        <p>We’ve received your message and our team will contact you soon.</p>
        <p><strong>Your Message:</strong></p>
        <blockquote style="border-left:4px solid #4f46e5;padding-left:10px;">
          ${validator.escape(message)}
        </blockquote>
        <p>Warm regards,<br/>ReadyTech Solutions Team</p>
      `,
    };

    // Send both emails in parallel
    await Promise.all([transporter.sendMail(companyMail), transporter.sendMail(userMail)]);

    res.status(200).json({ msg: "✅ Message sent successfully." });
  } catch (err) {
    console.error("❌ CONTACT ERROR:", err);
    res.status(500).json({ msg: "Failed to send message", error: err.message });
  }
});

// ---------------- POST /api/contact/subscribe ----------------
/**
 * Subscribe user to newsletter
 * Sends notification to company and confirmation to user
 */
router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ msg: "Please provide a valid email address." });
    }

    // Company notification email
    const companyMail = {
      from: `"New Settler Subscriptions" <${process.env.MAIL_USER}>`,
      to: process.env.COMPANY_EMAIL || "uiuxmukesh@gmail.com",
      subject: `📰 New Newsletter Subscriber`,
      html: `
        <h2 style="color:#4f46e5;">🆕 New Subscriber Alert</h2>
        <p><strong>Email:</strong> ${validator.escape(email)}</p>
        <p style="font-size:12px;color:#999;">New Settler Newsletter - ${new Date().toLocaleDateString()}</p>
      `,
    };

    // User confirmation email
    const userMail = {
      from: `"New Settler" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "🎉 Welcome to New Settler!",
      html: `
        <h2 style="color:#4f46e5;">Welcome to <strong>New Settler</strong> 🚀</h2>
        <p>Thank you for subscribing! You're now part of our community.</p>
        <p>We’ll share growth insights, digital marketing tips, and updates directly to your inbox.</p>
        <p>Stay tuned for your first edition soon!</p>
        <p>– The ReadyTech / New Settler Team</p>
      `,
    };

    // Send both emails
    await Promise.all([transporter.sendMail(companyMail), transporter.sendMail(userMail)]);

    res.status(200).json({ msg: "🎉 Subscribed successfully! Confirmation email sent." });
  } catch (err) {
    console.error("❌ SUBSCRIBE ERROR:", err);
    res.status(500).json({ msg: "Failed to subscribe. Please try again later.", error: err.message });
  }
});

export default router;
