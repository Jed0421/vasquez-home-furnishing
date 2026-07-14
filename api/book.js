import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const { name, email, phone } = req.body;

    console.log("Incoming data:", name, email, phone);

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jedidiah0421@gmail.com',
      subject: 'New Consultation Booking',
      html: `
        <h2>New Booking</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
      `,
    });

    console.log("Email response:", response);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({ error: error.message });
  }
}