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
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to an API/Supabase
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 pt-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Book a Consultation</h1>
            <p className="text-xl text-neutral-600">Tell us about your project, and our team will get back to you to schedule a detailed discussion.</p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="bg-[#FAFAFA] p-8 md:p-12 rounded-sm shadow-sm border border-neutral-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">Contact Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition-all"
                    placeholder="(555) 000-0000"
                  />
                </div>
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-neutral-700 mb-2">Project Type *</label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option value="" disabled>Select a category</option>
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

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">Project Details & Inquiries</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-sm border border-neutral-300 focus:ring-2 focus:ring-amber-700 focus:border-transparent outline-none transition-all resize-y"
                  placeholder="Tell us a bit about what you're looking for, dimensions, materials, or any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-neutral-900 text-white font-medium py-4 rounded-sm hover:bg-neutral-800 transition-colors shadow-md text-lg"
              >
                Book Consultation
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 p-12 rounded-sm border border-green-100 text-center"
            >
              <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Request Received!</h2>
              <p className="text-lg text-neutral-600">
                Thank you for contacting Vasquez Home Furnishing. Our team will reach out to you shortly at <strong>{formData.email}</strong>.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-amber-700 font-medium hover:text-amber-800 underline"
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
