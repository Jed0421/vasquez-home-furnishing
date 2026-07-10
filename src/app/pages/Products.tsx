import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { X, ZoomIn } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import barCounterDrawers from "@/imports/Bar_Counter_Drawers.jpg";
import bathroomCabinet from "@/imports/Bathroom_Cabinet.jpg";
import bedroomWall from "@/imports/Bedroom_Wall.jpg";
import kitchenDrawer1 from "@/imports/Kitchen_Drawer1.jpg";
import kitchenDrawers from "@/imports/Kitchen_Drawers.jpg";
import kitchenDrawer2 from "@/imports/KitchenDrawer2.jpg";
import sinkMirrorLight from "@/imports/Sink_Mirror_Light.jpg";
import sinkWall from "@/imports/Sink_Wall.jpg";
import studyTable from "@/imports/Study_Table.jpg";
import wardrobe from "@/imports/Wardrobe.jpg";

import cabinet from "@/imports/Cabinet.jpg";
import curvedBarCounter from "@/imports/Curved_Bar_Counter.jpg";
import drawer from "@/imports/DRAWER.jpg";
import kitchenDrawer from "@/imports/Kitchen_Drawer.jpg";
import kitchenDrawer3 from "@/imports/KitchenDrawer3.jpg";
import loftBed2 from "@/imports/LOFT_BED_2.jpg";
import loftBed from "@/imports/LOFT_BED.jpg";
import sinkDrawer from "@/imports/Sink_Drawer.jpg";
import tableCabinet from "@/imports/Table_Cabinet.jpg";
import tvBackground2 from "@/imports/TV_Background_2.jpg";
import tvBackground from "@/imports/TV_Background.jpg";
import tvBedroom3 from "@/imports/Tv_Bedroom_3.jpg";

const PRODUCTS = [
  { id: 1, title: "Kitchen Drawer Systems", category: "Kitchen", desc: "Precision-crafted drawer systems with soft-close mechanisms and custom organizers.", img: kitchenDrawers },
  { id: 2, title: "Study & Home Office", category: "Office", desc: "Modular study tables and shelving units designed for productivity and style.", img: studyTable },
  { id: 3, title: "Walk-in Wardrobe", category: "Bedroom", desc: "Floor-to-ceiling custom closets with soft-close mechanisms and LED lighting.", img: wardrobe },
  { id: 4, title: "Bathroom Cabinet", category: "Bathroom", desc: "Moisture-resistant vanity cabinets with integrated sink and smart storage.", img: bathroomCabinet },
  { id: 5, title: "Loft Bed with Storage", category: "Bedroom", desc: "Space-maximizing loft beds with integrated drawers and modular shelving.", img: loftBed },
  { id: 6, title: "Bar & Counter Drawers", category: "Drawers", desc: "Heavy-duty drawer systems for bars, counters, and entertainment spaces.", img: barCounterDrawers },
  { id: 7, title: "Custom Cabinets", category: "Cabinets", desc: "Bespoke cabinet solutions crafted to fit any room's dimensions and style.", img: cabinet },
  { id: 8, title: "TV & Media Wall", category: "Cabinets", desc: "Integrated media walls with hidden cable management and ambient lighting.", img: tvBackground2 },
];

const GALLERY_ITEMS = [
  { id: 1, img: kitchenDrawer1, category: "Kitchen", title: "Kitchen Drawer Detail", desc: "Custom pull-out drawer with precision joinery" },
  { id: 2, img: kitchenDrawer, category: "Kitchen", title: "Kitchen Cabinet Drawer", desc: "Sleek kitchen drawer with clean finish" },
  { id: 3, img: kitchenDrawer2, category: "Kitchen", title: "Kitchen Pull-Out System", desc: "Deep drawer organizers for culinary essentials" },
  { id: 4, img: kitchenDrawer3, category: "Kitchen", title: "Kitchen Drawer Suite", desc: "Full-width drawer unit with soft-close rails" },
  { id: 5, img: kitchenDrawers, category: "Kitchen", title: "Kitchen Cabinet Suite", desc: "Complete kitchen drawer and cabinet installation" },
  { id: 6, img: studyTable, category: "Office", title: "Home Study Setup", desc: "Modular study table with built-in shelving" },
  { id: 7, img: wardrobe, category: "Bedroom", title: "Full-Wall Wardrobe", desc: "Floor-to-ceiling custom closet with soft-close doors" },
  { id: 8, img: bedroomWall, category: "Bedroom", title: "Bedroom Wall Unit", desc: "Built-in modular bedroom furniture" },
  { id: 9, img: loftBed, category: "Bedroom", title: "Loft Bed with Storage", desc: "Elevated bed with integrated drawer system" },
  { id: 10, img: loftBed2, category: "Bedroom", title: "Loft Bed Variant", desc: "Space-saving loft bed with modular shelving" },
  { id: 11, img: bathroomCabinet, category: "Bathroom", title: "Bathroom Cabinet", desc: "Floating vanity with integrated storage" },
  { id: 12, img: sinkMirrorLight, category: "Bathroom", title: "Sink, Mirror & Light", desc: "Coordinated bathroom fixture installation" },
  { id: 13, img: sinkWall, category: "Bathroom", title: "Sink Wall Detail", desc: "Full bathroom wall with integrated cabinetry" },
  { id: 14, img: sinkDrawer, category: "Bathroom", title: "Sink Drawer Unit", desc: "Under-sink drawer with moisture-resistant finish" },
  { id: 15, img: barCounterDrawers, category: "Drawers", title: "Bar Counter Drawers", desc: "Custom drawer units for bar and entertainment areas" },
  { id: 16, img: curvedBarCounter, category: "Drawers", title: "Curved Bar Counter", desc: "Bespoke curved counter with concealed drawer system" },
  { id: 17, img: drawer, category: "Drawers", title: "Precision Drawer System", desc: "Heavy-duty drawers with full-extension slides" },
  { id: 18, img: cabinet, category: "Cabinets", title: "Custom Cabinet Unit", desc: "Freestanding cabinet with adjustable shelving" },
  { id: 19, img: tableCabinet, category: "Cabinets", title: "Table & Cabinet Combo", desc: "Integrated table and cabinet for versatile use" },
  { id: 20, img: tvBackground2, category: "Cabinets", title: "TV Media Wall", desc: "Full media wall with hidden storage and ambient lighting" },
  { id: 21, img: tvBackground, category: "Cabinets", title: "TV Feature Wall", desc: "Custom TV backdrop with integrated cabinet panels" },
  { id: 22, img: tvBedroom3, category: "Bedroom", title: "Bedroom TV Unit", desc: "Bedroom media wall with built-in shelving and cabinetry" },
];

const CATEGORIES = ["All", "Kitchen", "Bedroom", "Bathroom", "Office", "Drawers", "Cabinets"];

export function Products() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const filteredProducts = activeFilter === "All"
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  const filteredGallery = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="pt-24 pb-24 bg-[#FAFAFA] min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 pt-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Products & Gallery</h1>
          <p className="text-xl text-neutral-600">Explore our wide range of custom modular solutions tailored to elevate any space.</p>
        </div>

        {/* Global Filters */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 sticky top-20 z-30 bg-[#FAFAFA]/90 backdrop-blur-sm py-4">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeFilter === cat
                  ? "bg-neutral-900 text-white shadow-md"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 border-b border-neutral-200 pb-4">Our Services</h2>
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={`prod-${product.id}`}
                className="bg-white rounded-sm overflow-hidden shadow-sm border border-neutral-100 group flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-sm text-neutral-900">
                    {product.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">{product.title}</h3>
                  <p className="text-neutral-600 mb-6 flex-grow">{product.desc}</p>
                  <Link to="/book" className="inline-flex w-max text-amber-700 font-medium hover:text-amber-800 transition-colors items-center gap-2 text-sm uppercase tracking-wider">
                    Request Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {filteredProducts.length === 0 && (
            <p className="text-neutral-500 italic py-8">No specific services found for this category, but view our portfolio below.</p>
          )}
        </div>

        {/* Masonry Gallery Section */}
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 border-b border-neutral-200 pb-4" id="gallery">Project Showcase</h2>
          <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 1024: 3}}>
            <Masonry gutter="1.5rem">
              {filteredGallery.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  key={`gal-${item.id}`}
                  className="relative group cursor-pointer overflow-hidden rounded-sm"
                  onClick={() => setSelectedImage(item)}
                >
                  <ImageWithFallback
                    src={item.img}
                    alt={item.title}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-neutral-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-6">
                    <ZoomIn className="text-white mb-4 w-8 h-8" />
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-neutral-300 text-sm">{item.category}</p>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
          {filteredGallery.length === 0 && (
            <p className="text-neutral-500 italic py-8">No portfolio items found for this category yet.</p>
          )}
        </div>
      </div>

      {/* Lightbox for Gallery */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/95 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-5xl w-full bg-white rounded-sm overflow-hidden flex flex-col md:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-full md:w-2/3 max-h-[70vh] bg-neutral-100">
                <ImageWithFallback
                  src={selectedImage.img}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-center bg-white">
                <div className="uppercase text-amber-700 font-bold text-xs tracking-widest mb-2">
                  {selectedImage.category}
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">{selectedImage.title}</h2>
                <p className="text-neutral-600 mb-6">{selectedImage.desc}</p>

                <div className="mt-8 border-t border-neutral-100 pt-6">
                  <p className="text-sm text-neutral-500 mb-4">Want something similar?</p>
                  <Link
                    to="/book"
                    className="block w-full text-center bg-neutral-900 text-white py-3 rounded-sm font-medium hover:bg-neutral-800 transition-colors"
                  >
                    Discuss This Style
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
