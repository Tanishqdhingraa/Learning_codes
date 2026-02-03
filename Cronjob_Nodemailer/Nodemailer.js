import nodemailer from "nodemailer";

export async function sendMail(subject, text) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // or use SMTP config
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS  // app password (not real password)
      }
    });

    const info = await transporter.sendMail({
      from: `"Cron Job" <${process.env.EMAIL_USER}>`,
      to: "admin@example.com", // receiver email
      subject,
      text
    });

    console.log("📧 Email sent:", info.messageId);
  } catch (error) {
    console.error("❌ Email error:", error.message);
  }
}
