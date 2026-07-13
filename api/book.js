import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, phone, projectType, address, message } = req.body;

    // ✅ Send email
    await resend.emails.send({
      from: "onboarding@resend.dev", // default test sender
      to: email, // sends to user
      subject: "Consultation Request Received",
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>Your booking has been received.</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({
      message: "Request Received!",
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);

    return res.status(500).json({
      message: "Failed to send email",
    });
  }
}