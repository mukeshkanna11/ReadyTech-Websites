// routes/contact.js
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import validator from "validator";

dotenv.config();
const router = express.Router();

// ---------------- Nodemailer Transporter ----------------
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
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ msg: "Name, email, and message are required." });
    }
    if (!validator.isEmail(email)) {
      return res.status(400).json({ msg: "Invalid email address." });
    }

    // Company email
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

    await Promise.all([transporter.sendMail(companyMail), transporter.sendMail(userMail)]);

    res.status(200).json({ msg: "✅ Message sent successfully." });
  } catch (err) {
    console.error("❌ CONTACT ERROR:", err);
    res.status(500).json({ msg: "Failed to send message", error: err.message });
  }
});

// ---------------- POST /api/contact/subscribe ----------------
router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !validator.isEmail(email)) {
      return res.status(400).json({ msg: "Please provide a valid email address." });
    }

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

    await Promise.all([transporter.sendMail(companyMail), transporter.sendMail(userMail)]);

    res.status(200).json({ msg: "🎉 Subscribed successfully! Confirmation email sent." });
  } catch (err) {
    console.error("❌ SUBSCRIBE ERROR:", err);
    res.status(500).json({ msg: "Failed to subscribe. Please try again later.", error: err.message });
  }
});

// ---------------- POST /api/contact/helpdesk-email ----------------
// ===================== HELP DESK EMAIL HANDLER =====================
const sendHelpdeskEmail = async (req, res) => {
  try {
    const { email, message } = req.body;

    // Validate
    if (!email || !message) {
      return res.status(400).json({
        success: false,
        msg: "Email and message are required.",
      });
    }
    console.log("📩 Helpdesk email received:", req.body);

    // If you want to send the email using Nodemailer later, add here.

    return res.status(200).json({
      success: true,
      msg: "Helpdesk message received successfully.",
    });

  } catch (err) {
    console.error("❌ HELPDESK ERROR:", err);
    return res.status(500).json({
      success: false,
      msg: "Failed to process helpdesk message.",
      error: err.message,
    });
  }
};

// Route
router.post("/helpdesk-email", sendHelpdeskEmail);


export default router;
