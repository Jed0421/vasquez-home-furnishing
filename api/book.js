export default async function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    // Get form data from frontend
    const {
      name,
      email,
      phone,
      projectType,
      address,
      message,
    } = req.body;

    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    // Log data (you’ll see this in Vercel logs)
    console.log("📥 New Booking:");
    console.log({
      name,
      email,
      phone,
      projectType,
      address,
      message,
    });

    // ✅ SUCCESS RESPONSE
    return res.status(200).json({
      message: "Booking successful",
    });

  } catch (error) {
    console.error("❌ ERROR:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
}