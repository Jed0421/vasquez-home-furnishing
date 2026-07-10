import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import kitchenDrawers from "@/imports/Kitchen_Drawers.jpg";
import kitchenDrawer1 from "@/imports/Kitchen_Drawer1.jpg";
import wardrobe from "@/imports/Wardrobe.jpg";
import studyTable from "@/imports/Study_Table.jpg";
import bathroomCabinet from "@/imports/Bathroom_Cabinet.jpg";
import bedroomWall from "@/imports/Bedroom_Wall.jpg";
import barCounterDrawers from "@/imports/Bar_Counter_Drawers.jpg";
import sinkMirrorLight from "@/imports/Sink_Mirror_Light.jpg";
import cabinet from "@/imports/Cabinet.jpg";
import curvedBarCounter from "@/imports/Curved_Bar_Counter.jpg";
import loftBed from "@/imports/LOFT_BED.jpg";
import loftBed2 from "@/imports/LOFT_BED_2.jpg";
import sinkWall from "@/imports/Sink_Wall.jpg";
import tvBackground from "@/imports/TV_Background.jpg";
import tvBackground2 from "@/imports/TV_Background_2.jpg";
import tvBedroom3 from "@/imports/Tv_Bedroom_3.jpg";
import kitchenDrawer2 from "@/imports/KitchenDrawer2.jpg";
import kitchenDrawer3 from "@/imports/KitchenDrawer3.jpg";
import sinkDrawer from "@/imports/Sink_Drawer.jpg";

const HERO_SLIDES = [
  { img: kitchenDrawers, alt: "Custom kitchen drawer systems" },
  { img: wardrobe, alt: "Walk-in wardrobe with floor-to-ceiling storage" },
  { img: loftBed, alt: "Loft bed with integrated storage" },
  { img: tvBackground, alt: "Custom TV feature wall" },
  { img: bathroomCabinet, alt: "Bathroom cabinet and vanity" },
  { img: bedroomWall, alt: "Bedroom wall unit" },
  { img: curvedBarCounter, alt: "Curved bar counter" },
  { img: cabinet, alt: "Custom cabinet unit" },
  { img: sinkMirrorLight, alt: "Sink, mirror and light installation" },
  { img: loftBed2, alt: "Loft bed variant with shelving" },
  { img: tvBackground2, alt: "TV media wall with storage" },
  { img: tvBedroom3, alt: "Bedroom TV unit" },
  { img: kitchenDrawer1, alt: "Kitchen drawer detail" },
  { img: kitchenDrawer2, alt: "Kitchen pull-out system" },
  { img: kitchenDrawer3, alt: "Kitchen drawer suite" },
  { img: sinkWall, alt: "Sink wall with integrated cabinetry" },
  { img: sinkDrawer, alt: "Under-sink drawer unit" },
  { img: barCounterDrawers, alt: "Bar counter drawers" },
  { img: studyTable, alt: "Home study setup" },
];

const SLIDE_DURATION = 4000;

export function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={HERO_SLIDES[current].img}
                alt={HERO_SLIDES[current].alt}
                className="w-full h-full object-cover brightness-[0.55]"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slide indicator dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center text-white mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-tight"
          >
            Custom Modular Cabinets Designed for Every Space
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-neutral-200 max-w-2xl mx-auto"
          >
            Transforming homes and offices with high-quality custom cabinetry and furnishing solutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/products" className="bg-white text-neutral-900 px-8 py-4 rounded-sm font-medium hover:bg-neutral-100 transition-colors">
              View Portfolio
            </Link>
            <Link to="/book" className="bg-amber-700 text-white px-8 py-4 rounded-sm font-medium hover:bg-amber-800 transition-colors">
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Our Premium Services</h2>
            <p className="text-neutral-600 text-lg">We craft bespoke storage solutions tailored to your unique space and style requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Kitchen Cabinets", img: kitchenDrawer1 },
              { title: "Bedroom Closets", img: wardrobe },
              { title: "Office Furnishing", img: studyTable },
              { title: "Bathroom Vanities", img: bathroomCabinet },
              { title: "Custom Modular Furniture", img: bedroomWall },
              { title: "Drawers & Storage", img: barCounterDrawers },
            ].map((service, idx) => (
              <Link to="/products" key={idx} className="group cursor-pointer block">
                <div className="relative h-80 overflow-hidden rounded-sm mb-4">
                  <ImageWithFallback
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-amber-700 transition-colors flex items-center justify-between">
                  {service.title}
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 duration-300" />
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <ImageWithFallback
              src={sinkMirrorLight}
              alt="Elegant sink, mirror and light installation"
              className="w-full h-[600px] object-cover rounded-sm shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">Mastering the Art of Custom Woodwork</h2>
            <p className="text-neutral-600 text-lg mb-10">We believe that every home deserves beautiful, functional storage that reflects the owner's personality. Our dedication to quality ensures pieces that last a lifetime.</p>

            <div className="space-y-6">
              {[
                { title: "Custom Design", desc: "Tailored to your specific measurements and aesthetic preferences." },
                { title: "Quality Materials", desc: "Sourced from premium, sustainable materials for durability." },
                { title: "Professional Installation", desc: "Expert fitting by our in-house team of master craftsmen." },
                { title: "Affordable Pricing", desc: "Transparent quotes with no hidden fees or surprise costs." },
                { title: "Years of Experience", desc: "Over 15 years transforming spaces across the country." },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900">{item.title}</h4>
                    <p className="text-neutral-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-y border-neutral-100">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-16">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Homeowner", text: "The kitchen cabinets Vasquez installed completely transformed our home. The attention to detail is unmatched." },
              { name: "Michael Chang", role: "Office Manager", text: "Professional from start to finish. Our office looks incredible and the modular desks fit our workflow perfectly." },
              { name: "Elena Rodriguez", role: "Interior Designer", text: "I constantly recommend Vasquez to my clients. Their custom wood finishes and hardware choices are strictly premium." }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-[#FAFAFA] p-8 rounded-sm text-left">
                <div className="flex gap-1 mb-4 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-neutral-700 mb-6 text-lg">"{testimonial.text}"</p>
                <div>
                  <h5 className="font-semibold text-neutral-900">{testimonial.name}</h5>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-neutral-950 text-center">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Upgrade Your Space?</h2>
          <p className="text-neutral-400 text-xl max-w-2xl mx-auto mb-10">Schedule a free consultation today and let's bring your vision to life.</p>
          <Link to="/book" className="inline-block bg-amber-700 text-white px-10 py-4 rounded-sm text-lg font-medium hover:bg-amber-600 transition-colors shadow-lg">
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
