import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const { name, email, phone , address, propertyType, message} = req.body;

    console.log("Incoming data:", name, email, phone, address, propertyType, message);

    const response = await resend.emails.send({
      from: 'New-Client@resend.dev',
      to: 'jedidiah0421@gmail.com',
      subject: 'New Consultation Booking',
      html: `
        <h2>New Booking</h2>
        <p><h3><b>Name:</b></h3> ${name}</p>
        <p><h3><b>Email:</b></h3> ${email}</p>
        <p><h3><b>Phone:</b></h3> ${phone}</p>
        <p><h3><b>Address:</b></h3> ${address}</p>
        <p><h3><b>Property Type:</b></h3> ${propertyType}</p>
        <p><h3><b>Message:</b></h3> ${message}</p>
      `,
    });

    console.log("Email response:", response);

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res.status(500).json({ error: error.message });
  }
}