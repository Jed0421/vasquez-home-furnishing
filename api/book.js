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
        <p><h1><b>Name:</b></h1> ${name}</p>
        <p><h1><b>Email:</b></h1> ${email}</p>
        <p><h1><b>Phone:</b></h1> ${phone}</p>
        <p><h1><b>Address:</b></h1> ${address}</p>
        <p><h1><b>Property Type:</b></h1> ${propertyType}</p>
        <p><h1><b>Message:</b></h1> ${message}</p>
      `,
    });

    console.log("Email response:", response);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({ error: error.message });
  }
}