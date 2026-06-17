import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// Verify transporter on startup
transporter.verify((error) => {
  if (error) {
    console.error("❌ Mail Server Error:", error);
  } else {
    console.log("✅ Mail Server Connected");
  }
});

export const sendHelpdeskMail = async ({
  customerEmail,
  customerMessage,
  customerName = "Website Visitor",
}) => {
  try {
    const info = await transporter.sendMail({
      from:
        process.env.MAIL_FROM ||
        `ReadyTech Support <${process.env.MAIL_USER}>`,

      // Company inbox receives lead
      to: process.env.MAIL_USER,

      replyTo: customerEmail,

      subject: `📩 New Helpdesk Inquiry from ${customerName}`,

      html: `
        <div style="font-family:Arial,sans-serif;padding:20px;">
          
          <h2 style="color:#2563eb;">
            New Helpdesk Message
          </h2>

          <table style="border-collapse:collapse;width:100%;">
            <tr>
              <td style="padding:8px;font-weight:bold;">
                Customer Email:
              </td>
              <td style="padding:8px;">
                ${customerEmail}
              </td>
            </tr>

            <tr>
              <td style="padding:8px;font-weight:bold;">
                Customer Name:
              </td>
              <td style="padding:8px;">
                ${customerName}
              </td>
            </tr>

            <tr>
              <td style="padding:8px;font-weight:bold;">
                Date:
              </td>
              <td style="padding:8px;">
                ${new Date().toLocaleString()}
              </td>
            </tr>
          </table>

          <hr/>

          <h3>Customer Message</h3>

          <div
            style="
              background:#f5f5f5;
              padding:15px;
              border-radius:8px;
            "
          >
            ${customerMessage}
          </div>

          <hr/>

          <p style="color:#666;">
            Submitted from ReadyTech Helpdesk Chat
          </p>
        </div>
      `,
    });

    console.log("✅ Helpdesk Email Sent:", info.messageId);

    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error(
      "❌ Helpdesk Email Error:",
      error
    );

    throw error;
  }
};