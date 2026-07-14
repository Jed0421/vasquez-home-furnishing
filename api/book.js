import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const { name, email, phone , address, propertyType, message} = req.body;

    console.log("Incoming data:", name, email, phone, address, propertyType, message);

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'jedidiah0421@gmail.com',
      subject: 'New Consultation Booking',
      html: `
        <h2>New Booking</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>Property Type:</b> ${propertyType}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    console.log("Email response:", response);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({ error: error.message });
  }
}