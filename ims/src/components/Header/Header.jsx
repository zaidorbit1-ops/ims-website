import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { navLinks } from "../../data/dummyData";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen((v) => {
      document.body.style.overflow = !v ? "hidden" : "";
      return !v;
    });
  };

  const leftLinks = navLinks.slice(0, 3);
  const rightLinks = navLinks.slice(3);

  return (
    <>
      {/* ── Top bar (phone strip) ── */}
      <motion.div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
        } bg-gold border-b border-gold-dark/20`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-3 md:px-10 h-9 flex items-center justify-center sm:justify-between gap-2 md:gap-0">
          <p className="hidden sm:block text-white/80 text-[10px] tracking-[0.35em] uppercase whitespace-nowrap">
            VVIP Ground Transportation · Serving All Major Airports
          </p>
          <a
            href="tel:8327663140"
            className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 whitespace-nowrap"
            style={{ fontSize: '12px', paddingLeft: 4, paddingRight: 4 }}
          >
            <Phone size={12} />
            <span className="text-[11px] font-medium tracking-[0.22em] uppercase">
              832 766 3140
            </span>
          </a>
        </div>
      </motion.div>

      {/* ── Main Navbar ── */}
      <motion.header
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "top-0 bg-white shadow-[0_2px_20px_rgba(0,0,0,0.07)] border-b border-gray-100 py-4"
            : "top-9 bg-white border-b border-gray-100 py-5"
        }`}
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* Three-column layout: left nav | logo | right nav+cta */}
          <div className="flex items-center justify-between gap-6">

            {/* ── Left Nav ── */}
            <nav className="hidden lg:flex items-center gap-7 flex-1">
              {leftLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    className={`relative text-[11px] font-medium tracking-[0.22em] uppercase group ${
                      location.pathname === link.path
                        ? "text-gold"
                        : "text-black/70 hover:text-black"
                    } transition-colors duration-300`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-400 ${
                        location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* ── Centre Logo ── */}
            <Link
              to="/"
              className="flex-shrink-0 flex items-center justify-center"
            >
              <motion.img
                src="/logo.png"
                alt="IMS Limo & Chauffeur Service"
                className={`object-contain transition-all duration-500 ${
                  scrolled ? "h-12" : "h-16"
                }`}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              />
              {/* Fallback text mark */}
              <div
                className="hidden flex-col items-center"
                style={{ display: "none" }}
              >
                <span className="text-white font-serif font-light text-2xl tracking-[0.35em] uppercase">
                  IMS
                </span>
                <div className="h-px w-8 bg-gold my-1" />
                <span className="text-gold text-[8px] tracking-[0.4em] uppercase">
                  Limo & Chauffeur
                </span>
              </div>
            </Link>

            {/* ── Right Nav + CTA ── */}
            <div className="hidden lg:flex items-center gap-7 flex-1 justify-end">
              {rightLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                >
                  <Link
                    to={link.path}
                    className={`relative text-[11px] font-medium tracking-[0.22em] uppercase group ${
                      location.pathname === link.path
                        ? "text-gold"
                        : "text-black/70 hover:text-black"
                    } transition-colors duration-300`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-400 ${
                        location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Divider */}
              <div className="w-px h-4 bg-black/15" />

              {/* Book Now CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/booking"
                  className="group relative inline-flex items-center gap-2 px-6 py-2.5 overflow-hidden"
                >
                  {/* Border frame */}
                  <span className="absolute inset-0 border border-gold/50 group-hover:border-gold transition-colors duration-300" />
                  {/* Fill on hover */}
                  <span className="absolute inset-0 bg-gold scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-400" />
                  <span className="relative text-[10px] font-semibold tracking-[0.3em] uppercase text-gold group-hover:text-white transition-colors duration-300">
                    Reserve Now
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
              className="lg:hidden text-charcoal/70 hover:text-charcoal transition-colors p-1"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.div
                    key="x"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── Gold bottom line visible on scroll ── */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.header>

      {/* ── Full-screen Mobile Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* White background */}
            <div className="absolute inset-0 bg-white" />

            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold" />

            <div className="relative flex flex-col h-full">
              {/* Menu Header: logo + close */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
                <Link to="/" onClick={() => setMenuOpen(false)}>
                  <img src="/logo.png" alt="IMS" className="h-10 object-contain brightness-0" />
                </Link>
                <button
                  onClick={toggleMenu}
                  className="w-10 h-10 flex items-center justify-center border border-gray-200 hover:border-gold hover:text-gold transition-all duration-200"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav items */}
              <nav className="flex flex-col flex-1 px-6 pt-4 overflow-y-auto">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: i * 0.06, duration: 0.3 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center gap-4 py-4 border-b border-gray-100 group ${
                        location.pathname === link.path
                          ? "text-gold"
                          : "text-charcoal/70 hover:text-charcoal"
                      } transition-colors duration-200`}
                    >
                      <span className="text-[10px] text-gold/60 tracking-[0.3em] font-medium w-5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-2xl font-light tracking-wide flex-1">
                        {link.label}
                      </span>
                      <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300">
                        <span className="block w-4 h-px bg-gold" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                className="flex flex-col gap-3 px-6 py-6 border-t border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  to="/booking"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary justify-center text-xs"
                >
                  Reserve Your Ride
                </Link>
                <a
                  href="tel:+18005550199"
                  className="flex items-center justify-center gap-2 text-charcoal/50 hover:text-gold transition-colors text-xs tracking-widest uppercase"
                >
                  <Phone size={12} />
                  +1 (800) 555-0199
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

