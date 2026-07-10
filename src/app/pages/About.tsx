import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Hammer, ShieldCheck, HeartHandshake, CalendarDays, Wrench } from "lucide-react";
import kitchenDrawers from "@/imports/Kitchen_Drawers.jpg";
import cabinet from "@/imports/Cabinet.jpg";
import tvBackground from "@/imports/TV_Background.jpg";

export function About() {
  return (
    <div className="pt-24 bg-white">
      {/* Hero */}
      <section className="container mx-auto px-6 lg:px-12 pt-12 pb-24">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Our Story</h1>
          <p className="text-xl text-neutral-600">Built on two decades of craftsmanship, dedication, and an unwavering commitment to quality.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src={kitchenDrawers}
              alt="Vasquez custom kitchen cabinetry"
              className="w-full rounded-sm shadow-xl aspect-square object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">From Freelancer to Fabricator — The Julius Vasquez Story</h2>
            <p className="text-neutral-600 mb-5 text-lg">
              It all began in 2002, when Julius Vasquez started his journey as a freelance designer and project implementor — taking on interior design and planning projects one space at a time. Armed with an eye for detail and a genuine passion for well-crafted spaces, he built a reputation rooted in reliability and quality output.
            </p>
            <p className="text-neutral-600 mb-5 text-lg">
              As the years passed, the demand for modular cabinets surged across homes and commercial spaces alike. Recognizing this shift, Julius made a decisive move in 2018 — pivoting his focus entirely toward fabrication. What started as a one-man freelance operation grew into a dedicated workshop specializing in the design, fabrication, and installation of custom modular cabinetry.
            </p>
            <p className="text-neutral-600 text-lg">
              Today, Vasquez Home Furnishing stands as a testament to over two decades of hands-on experience — delivering premium cabinetry solutions at honest, affordable prices without ever compromising on quality.
            </p>
          </div>
        </div>
      </section>

      {/* Founder's Mission */}
      <section className="py-24 bg-neutral-950 text-white">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-amber-500 mb-4 uppercase tracking-wider text-sm font-bold">Our Mission</h3>
            <p className="text-2xl leading-relaxed font-light">
              "To provide the best quality products and services — meeting every client's demand and expectation — at prices that are fair, transparent, and accessible."
            </p>
          </div>
          <div>
            <h3 className="text-amber-500 mb-4 uppercase tracking-wider text-sm font-bold">Our Vision</h3>
            <p className="text-2xl leading-relaxed font-light">
              "To be the most trusted name in custom modular cabinetry in the Philippines — known for craftsmanship that lasts a lifetime and service that puts people first."
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Journey</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">Over twenty years of growth, learning, and building spaces people love.</p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-neutral-200 md:left-1/2" />
            {[
              {
                year: "2002",
                title: "The Beginning",
                desc: "Julius Vasquez started as a freelance designer and project implementor — taking on design and planning projects across residential and commercial spaces.",
                icon: CalendarDays,
                side: "right",
              },
              {
                year: "2018",
                title: "Shift to Fabrication",
                desc: "With modular cabinet demand peaking, Julius fully committed to fabrication — establishing a workshop focused on precision-built cabinetry and custom installations.",
                icon: Wrench,
                side: "left",
              },
              {
                year: "Today",
                title: "Vasquez Home Furnishing",
                desc: "A trusted name in custom modular cabinetry, serving homes and businesses with high-quality fabrication and professional installation across a growing range of interior solutions.",
                icon: Hammer,
                side: "right",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`relative flex items-start gap-8 mb-12 ${
                  item.side === "left" ? "md:flex-row-reverse md:text-right" : "md:flex-row"
                } flex-row`}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-700 rounded-full flex items-center justify-center z-10 relative">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white p-6 rounded-sm shadow-sm border border-neutral-100 flex-grow">
                  <span className="text-amber-700 font-bold text-sm uppercase tracking-wider">{item.year}</span>
                  <h4 className="text-xl font-bold text-neutral-900 mt-1 mb-2">{item.title}</h4>
                  <p className="text-neutral-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Specialize In */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">What We Specialize In</h2>
              <p className="text-neutral-600 text-lg mb-8">
                We handle every step in-house — from initial design through to final installation — ensuring consistency, accountability, and results that exceed expectations.
              </p>
              <ul className="space-y-4">
                {[
                  "Commercial counters and reception units",
                  "Kitchen cabinets and drawer systems",
                  "Console and media wall cabinets",
                  "Closet and wardrobe systems",
                  "Decorative modern partitions",
                  "Loft beds with integrated storage",
                  "Bathroom vanities and sink cabinets",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-amber-700 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithFallback
                src={cabinet}
                alt="Custom cabinet unit"
                className="w-full h-64 object-cover rounded-sm shadow-md"
              />
              <ImageWithFallback
                src={tvBackground}
                alt="TV media wall"
                className="w-full h-64 object-cover rounded-sm shadow-md mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Why Clients Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Hammer className="w-8 h-8 text-amber-700" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-3">20+ Years of Experience</h4>
              <p className="text-neutral-600">Julius has been designing and building custom spaces since 2002 — that depth of experience shows in every joint, panel, and finish.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8 text-amber-700" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-3">Quality at Fair Prices</h4>
              <p className="text-neutral-600">We believe premium craftsmanship shouldn't break the bank. Our pricing is transparent, competitive, and always tied to real value.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <HeartHandshake className="w-8 h-8 text-amber-700" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900 mb-3">Client-First Always</h4>
              <p className="text-neutral-600">From the first consultation to post-installation follow-up, your satisfaction drives every decision we make.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
