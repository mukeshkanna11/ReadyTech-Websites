import nodemailer from "nodemailer";

// ==========================================
// Environment Debug Logs
// ==========================================
console.log("=================================");
console.log("📧 MAIL CONFIG CHECK");
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS EXISTS:", !!process.env.MAIL_PASS);
console.log("MAIL_FROM:", process.env.MAIL_FROM);
console.log("=================================");

// ==========================================
// Nodemailer Transport
// ==========================================
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  requireTLS: true,

  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },

  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

// ==========================================
// Verify SMTP Connection
// ==========================================
transporter.verify()
  .then(() => {
    console.log("✅ Mail Server Connected");
  })
  .catch((err) => {
    console.error("❌ Mail Server Error:", err);
  });

// ==========================================
// Send Helpdesk Mail
// ==========================================
export const sendHelpdeskMail = async ({
  customerEmail,
  customerMessage,
  customerName = "Website Visitor",
}) => {
  try {
    console.log("=================================");
    console.log("📨 EMAIL FUNCTION CALLED");
    console.log("Customer Email:", customerEmail);
    console.log("Customer Name:", customerName);
    console.log("=================================");

    const info = await transporter.sendMail({
      from:
        process.env.MAIL_FROM ||
        `ReadyTech Support <${process.env.MAIL_USER}>`,

      // Mail goes to company inbox
      to: process.env.MAIL_USER,

      // Customer email for direct reply
      replyTo: customerEmail,

      subject: `📩 New Helpdesk Inquiry from ${customerName}`,

      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;max-width:700px;margin:auto;">
          
          <h2 style="color:#2563eb;margin-bottom:20px;">
            New Helpdesk Inquiry
          </h2>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px;font-weight:bold;width:180px;">
                Customer Name
              </td>
              <td style="padding:10px;">
                ${customerName}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                Customer Email
              </td>
              <td style="padding:10px;">
                ${customerEmail}
              </td>
            </tr>

            <tr>
              <td style="padding:10px;font-weight:bold;">
                Date
              </td>
              <td style="padding:10px;">
                ${new Date().toLocaleString()}
              </td>
            </tr>
          </table>

          <hr style="margin:20px 0;" />

          <h3>Customer Message</h3>

          <div
            style="
              background:#f5f5f5;
              padding:16px;
              border-radius:8px;
              line-height:1.6;
            "
          >
            ${customerMessage}
          </div>

          <hr style="margin:20px 0;" />

          <p style="color:#666;font-size:14px;">
            Submitted from ReadyTech Helpdesk Chat
          </p>

        </div>
      `,
    });

    console.log("=================================");
    console.log("✅ EMAIL SENT SUCCESSFULLY");
    console.log("MESSAGE ID:", info.messageId);
    console.log("ACCEPTED:", info.accepted);
    console.log("REJECTED:", info.rejected);
    console.log("RESPONSE:", info.response);
    console.log("=================================");

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("=================================");
    console.error("❌ HELPDESK EMAIL ERROR");
    console.error(error);
    console.error("=================================");

    throw error;
  }
};