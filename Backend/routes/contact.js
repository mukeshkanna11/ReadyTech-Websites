import express from "express";
import dotenv from "dotenv";
import validator from "validator";
import { Resend } from "resend";

dotenv.config();

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

console.log("=================================");
console.log("📧 RESEND CONFIG CHECK");
console.log("RESEND_API_KEY EXISTS:", !!process.env.RESEND_API_KEY);
console.log("MAIL_TO:", process.env.MAIL_TO);
console.log("=================================");

// ==========================================
// Helper Function
// ==========================================
const safeSendMail = async ({
  to,
  subject,
  html,
  replyTo = null,
}) => {
  try {
    const response = await resend.emails.send({
      from: "ReadyTech Support <onboarding@resend.dev>",
      to,
      reply_to: replyTo || undefined,
      subject,
      html,
    });

    console.log("✅ Email Sent:", response.data?.id);

    return response;
  } catch (error) {
    console.error("❌ Resend Email Error:", error);
  }
};

// ==========================================
// CONTACT FORM
// POST /api/contact
// ==========================================
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        msg: "Name, email and message are required.",
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        msg: "Invalid email address.",
      });
    }

    // Company Mail
    await safeSendMail({
      to:
        process.env.MAIL_TO ||
        "quries.readytechsolutions@gmail.com",

      replyTo: email,

      subject: `📬 New Contact Form - ${name}`,

      html: `
        <h2>New Contact Form Submission</h2>

        <p><strong>Name:</strong> ${validator.escape(name)}</p>
        <p><strong>Email:</strong> ${validator.escape(email)}</p>
        <p><strong>Phone:</strong> ${
          phone
            ? validator.escape(phone)
            : "N/A"
        }</p>

        <hr/>

        <p><strong>Message:</strong></p>

        <div style="
          background:#f5f5f5;
          padding:15px;
          border-radius:8px;
        ">
          ${validator.escape(message)}
        </div>
      `,
    });

    // Auto Reply
    await safeSendMail({
      to: email,

      subject:
        "✅ We received your message",

      html: `
        <h2>Hello ${validator.escape(name)},</h2>

        <p>
          Thank you for contacting
          ReadyTech Solutions.
        </p>

        <p>
          We received your message and
          our team will contact you soon.
        </p>

        <hr/>

        <p>
          <strong>Your Message:</strong>
        </p>

        <div style="
          background:#f5f5f5;
          padding:15px;
          border-radius:8px;
        ">
          ${validator.escape(message)}
        </div>

        <br/>

        <p>
          Regards,<br/>
          ReadyTech Solutions
        </p>
      `,
    });

    return res.status(200).json({
      success: true,
      msg: "Message sent successfully.",
    });
  } catch (err) {
    console.error("❌ CONTACT ERROR:", err);

    return res.status(500).json({
      success: false,
      msg: "Failed to send message.",
      error: err.message,
    });
  }
});

// ==========================================
// NEWSLETTER
// POST /api/contact/subscribe
// ==========================================
router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body;

    if (
      !email ||
      !validator.isEmail(email)
    ) {
      return res.status(400).json({
        success: false,
        msg: "Invalid email address.",
      });
    }

    await safeSendMail({
      to:
        process.env.MAIL_TO ||
        "quries.readytechsolutions@gmail.com",

      subject:
        "📰 New Newsletter Subscriber",

      html: `
        <h2>New Subscriber</h2>

        <p>
          <strong>Email:</strong>
          ${validator.escape(email)}
        </p>
      `,
    });

    await safeSendMail({
      to: email,

      subject:
        "🎉 Welcome to ReadyTech Newsletter",

      html: `
        <h2>Welcome 🚀</h2>

        <p>
          Thanks for subscribing to
          ReadyTech Newsletter.
        </p>

        <p>
          You'll receive updates,
          tips and company news.
        </p>
      `,
    });

    return res.status(200).json({
      success: true,
      msg: "Subscribed successfully.",
    });
  } catch (err) {
    console.error(
      "❌ SUBSCRIBE ERROR:",
      err
    );

    return res.status(500).json({
      success: false,
      msg: "Subscription failed.",
      error: err.message,
    });
  }
});

// ==========================================
// HELPDESK EMAIL
// POST /api/contact/helpdesk-email
// ==========================================
router.post(
  "/helpdesk-email",
  async (req, res) => {
    try {
      const { email, message } =
        req.body;

      if (!email || !message) {
        return res.status(400).json({
          success: false,
          msg: "Email and message required.",
        });
      }

      console.log(
        "📩 Helpdesk Email Received:",
        req.body
      );

      await safeSendMail({
        to:
          process.env.MAIL_TO ||
          "quries.readytechsolutions@gmail.com",

        replyTo: email,

        subject:
          "🎫 New Helpdesk Message",

        html: `
          <h2>Helpdesk Message</h2>

          <p>
            <strong>Email:</strong>
            ${validator.escape(email)}
          </p>

          <hr/>

          <div style="
            background:#f5f5f5;
            padding:15px;
            border-radius:8px;
          ">
            ${validator.escape(message)}
          </div>
        `,
      });

      return res.status(200).json({
        success: true,
        msg: "Helpdesk message sent.",
      });
    } catch (err) {
      console.error(
        "❌ HELPDESK ERROR:",
        err
      );

      return res.status(500).json({
        success: false,
        msg: "Failed to send helpdesk message.",
      });
    }
  }
);

export default router;