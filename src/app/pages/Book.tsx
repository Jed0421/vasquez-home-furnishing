import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Book() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    address: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("Submitting form:", formData);

  try {
    const res = await fetch("http://127.0.0.1:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // ✅ FIXED
    });

    console.log("Response:", res);

    if (res.ok) {
      setIsSubmitted(true);
    } else {
      alert("❌ Failed to send booking");
    }
  } catch (error) {
    console.error("ERROR:", error);
    alert("⚠️ Server error");
  }
};

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 pt-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Book a Consultation
            </h1>
            <p className="text-xl text-neutral-600">
              Tell us about your project, and our team will get back to you to schedule a detailed discussion.
            </p>
          </div>

          {!isSubmitted ? (
            <form
              onSubmit={handleSubmit}
              className="bg-[#FAFAFA] p-8 md:p-12 rounded-sm shadow-sm border border-neutral-100"
            >
              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* PHONE + PROJECT */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Contact Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm"
                    placeholder="(555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-sm bg-white"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="Office">Office</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Bedroom">Bedroom</option>
                    <option value="Bathroom">Bathroom</option>
                    <option value="Cabinets">Cabinets</option>
                    <option value="Drawers">Drawers</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>

              {/* ✅ ADDRESS FULL WIDTH */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm"
                  placeholder="Enter your full address"
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Project Details & Inquiries
                </label>
                <textarea
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-900 text-white py-4 rounded-sm"
              >
                Book Consultation
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 p-12 rounded-sm border text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Request Received!</h2>
              <p>
                Thank you! We will contact you at{" "}
                <strong>{formData.email}</strong>.
              </p>

              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 underline"
              >
                Submit another request
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}