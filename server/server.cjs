console.log("🚀 THIS IS THE CORRECT SERVER FILE");
console.log("🚀 SERVER FILE LOADED");
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// ✅ VERY IMPORTANT (missing in most cases)
app.use(cors());
app.use(express.json());

// ✅ TEST ROUTE (optional)
app.get("/", (req, res) => {
  res.send("Server is working");
});

// ✅ EMAIL ROUTE
app.post("/send-email", async (req, res) => {
  console.log("🔥 ROUTE HIT");
  console.log("REQ BODY:", req.body);

  const { name, email, phone, projectType, address, message } = req.body;

  // ✅ Validate input (prevents silent fail)
  if (!name || !email) {
    console.log("❌ Missing required fields");
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Verify connection (IMPORTANT DEBUG)
    await transporter.verify();
    console.log("✅ Gmail transporter ready");

    await transporter.sendMail({
      from: `"Booking System" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Booking from ${name}`,
      html: `
        <h2>New Consultation Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("✅ EMAIL SENT SUCCESSFULLY");

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("❌ EMAIL ERROR:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ✅ START SERVER
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});