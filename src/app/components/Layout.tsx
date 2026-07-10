import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logoImg from "../../imports/logo.jpg";

export function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-neutral-900 bg-[#FAFAFA]">
      {/* Navigation */}
      <header className="fixed w-full z-50 bg-white border-b border-neutral-100 shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-neutral-900 flex items-center gap-3">
            <ImageWithFallback src={logoImg} alt="Vasquez Home Furnishing Logo" className="h-10 w-auto" />
            <span className="text-black hidden sm:block text-xl">Vasquez Home Furnishing</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                  location.pathname === link.path ? "text-amber-700" : "text-neutral-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/book"
              className="bg-neutral-900 text-white px-6 py-2.5 rounded-sm text-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm"
            >
              Get a Free Quote
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-neutral-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-xl font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`border-b border-neutral-100 pb-4 transition-colors ${
                    location.pathname === link.path ? "text-amber-700" : "text-neutral-900 hover:text-amber-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/book"
                className="bg-neutral-900 text-white text-center py-4 rounded-sm mt-4"
              >
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-300 py-16 mt-auto">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white flex items-center gap-3 mb-6">
              <ImageWithFallback src={logoImg} alt="Vasquez Home Furnishing Logo" className="h-12 w-auto brightness-0 invert" />
              <span className="text-white text-xl">Vasquez Home Furnishing</span>
            </Link>
            <p className="text-sm text-neutral-400 mb-6">
              Transforming homes and offices with high-quality custom cabinetry and furnishing solutions since 2010.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/jpv.modular.5" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/jpvasquezmodularcabinet" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>Kitchen Cabinets</li>
              <li>Office Furntiture</li>
              <li>Bathroom Vanities</li>
              <li>Custom Closets</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6">Contact Info</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>123 Craftsmanship Way</li>
              <li>Design District, CA 90210</li>
              <li className="mt-4">hello@vasquezhome.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-neutral-800 text-sm text-neutral-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 Vasquez Home Furnishing. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
