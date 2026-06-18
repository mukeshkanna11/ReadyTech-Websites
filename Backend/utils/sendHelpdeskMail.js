import { Resend } from "resend";

// ==========================================
// Environment Debug Logs
// ==========================================
console.log("=================================");
console.log("📧 RESEND CONFIG CHECK");
console.log("RESEND_API_KEY EXISTS:", !!process.env.RESEND_API_KEY);
console.log("MAIL_TO:", process.env.MAIL_TO);
console.log("=================================");

// ==========================================
// Resend Client
// ==========================================
const resend = new Resend(process.env.RESEND_API_KEY);

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
    console.log("📨 RESEND EMAIL FUNCTION CALLED");
    console.log("Customer Email:", customerEmail);
    console.log("Customer Name:", customerName);
    console.log("=================================");

    const response = await resend.emails.send({
      // Free Resend testing sender
      from: "ReadyTech Support <onboarding@resend.dev>",

      // Company inbox
      to: [process.env.MAIL_TO],

      // Reply directly to customer
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
    console.log("✅ RESEND EMAIL SENT");
    console.log("EMAIL ID:", response?.data?.id);
    console.log("FULL RESPONSE:", response);
    console.log("=================================");

    return {
      success: true,
      emailId: response?.data?.id,
    };
  } catch (error) {
    console.error("=================================");
    console.error("❌ RESEND EMAIL ERROR");
    console.error(error);
    console.error("=================================");

    throw error;
  }
};