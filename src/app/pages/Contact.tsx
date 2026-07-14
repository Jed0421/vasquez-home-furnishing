import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <div className="pt-24 pb-24 bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 pt-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Contact Us</h1>
          <p className="text-xl text-neutral-600">We're here to answer your questions and start planning your next project.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-sm overflow-hidden shadow-sm border border-neutral-200">
          {/* Contact Information */}
          <div className="p-10 md:p-16 bg-neutral-950 text-white">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-neutral-400 mb-12 text-lg">
              Whether you need a quick quote or want to discuss a full home renovation, our team is ready to assist you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-neutral-800 p-3 rounded-sm">
                  <MapPin className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Visit Our Showroom</h4>
                  <p className="text-neutral-400">Vasquez Home Furnishing<br />C. Lawis Street, Antipolo, 1870 Rizal, Philippines</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-neutral-800 p-3 rounded-sm">
                  <Phone className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Call Us</h4>
                  <p className="text-neutral-400">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-neutral-800 p-3 rounded-sm">
                  <Mail className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email Us</h4>
                  <p className="text-neutral-400">Jpvasquezhomefurnishing@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-neutral-800 p-3 rounded-sm">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Business Hours</h4>
                  <p className="text-neutral-400">Mon-Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM<br />Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative min-h-[400px] lg:min-h-full bg-neutral-200">
            {/* Embedded map placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d964.0!2d121.181146!3d14.5895487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bfbb4dc50f0d%3A0xd42cf75d10117733!2sVasquez+Advertising!5e0!3m2!1sen!2sph!4v1"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vasquez Home Furnishing Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
