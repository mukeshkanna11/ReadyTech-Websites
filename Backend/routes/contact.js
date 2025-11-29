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

// ---------------- Helper: Safe sendMail ----------------
const safeSendMail = async (mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error("❌ Email send failed:", err);
    // Don't throw to stop other operations
  }
};

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

    // Email to company
    const companyMail = {
      from: `"ReadyTech Contact" <${process.env.MAIL_USER}>`,
      to: process.env.COMPANY_EMAIL || "quries.readytechsolutions@gmail.com",
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

    // Email to user
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

    // Send emails concurrently
    await Promise.all([safeSendMail(companyMail), safeSendMail(userMail)]);

    res.status(200).json({ msg: "✅ Message sent successfully." });
  } catch (err) {
    console.error("❌ CONTACT ERROR:", err);
    res.status(500).json({ msg: "Failed to send message. Please try again later.", error: err.message });
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
      from: `"Newsletter Subscription" <${process.env.MAIL_USER}>`,
      to: process.env.COMPANY_EMAIL || "quries.readytechsolutions@gmail.com",
      subject: `📰 New Newsletter Subscriber`,
      html: `
        <h2 style="color:#4f46e5;">🆕 New Subscriber Alert</h2>
        <p><strong>Email:</strong> ${validator.escape(email)}</p>
        <p style="font-size:12px;color:#999;">Newsletter - ${new Date().toLocaleDateString()}</p>
      `,
    };

    const userMail = {
      from: `"ReadyTech Newsletter" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "🎉 Welcome to Our Newsletter!",
      html: `
        <h2 style="color:#4f46e5;">Welcome! 🚀</h2>
        <p>Thank you for subscribing to our newsletter. You’ll receive updates, insights, and tips directly in your inbox.</p>
        <p>Stay tuned for your first edition soon!</p>
        <p>– ReadyTech Solutions Team</p>
      `,
    };

    await Promise.all([safeSendMail(companyMail), safeSendMail(userMail)]);

    res.status(200).json({ msg: "🎉 Subscribed successfully! Confirmation email sent." });
  } catch (err) {
    console.error("❌ SUBSCRIBE ERROR:", err);
    res.status(500).json({ msg: "Failed to subscribe. Please try again later.", error: err.message });
  }
});

// ---------------- POST /api/contact/helpdesk-email ----------------
router.post("/helpdesk-email", async (req, res) => {
  try {
    const { email, message } = req.body;
    if (!email || !message) {
      return res.status(400).json({ success: false, msg: "Email and message are required." });
    }

    console.log("📩 Helpdesk email received:", req.body);

    // Add Nodemailer code here if needed

    res.status(200).json({ success: true, msg: "Helpdesk message received successfully." });
  } catch (err) {
    console.error("❌ HELPDESK ERROR:", err);
    res.status(500).json({ success: false, msg: "Failed to process helpdesk message.", error: err.message });
  }
});

export default router;
