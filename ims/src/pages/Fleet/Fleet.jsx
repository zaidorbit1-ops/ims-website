import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users, Luggage, CheckCircle, ArrowRight, X, ChevronLeft, ChevronRight,
} from "lucide-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Button from "../../components/Button/Button";
import { fleetData } from "../../data/dummyData";

// ─── Category Filter Tabs ──────────────────────────────────────────────────────
const categories = ["All", "Sedan", "SUV", "Limousine"];

function matchCategory(car, filter) {
  if (filter === "All") return true;
  if (filter === "Sedan") return car.category.toLowerCase().includes("sedan");
  if (filter === "SUV") return car.category.toLowerCase().includes("suv");
  if (filter === "Limousine") return car.category.toLowerCase().includes("limousine");
  return true;
}

// ─── Detail Modal ──────────────────────────────────────────────────────────────
const CarModal = ({ car, onClose, onPrev, onNext, hasPrev, hasNext }) => {
  if (!car) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm"
          onClick={onClose}
        />
        {/* Panel */}
        <motion.div
          className="relative z-10 bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ duration: 0.35 }}
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-10 h-10 bg-charcoal/80 text-white flex items-center justify-center hover:bg-gold transition-colors"
          >
            <X size={18} />
          </button>

          {/* Image */}
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
            <div className="absolute bottom-6 left-8">
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-gold block mb-1">
                {car.category}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-light text-white">
                {car.name}
              </h2>
            </div>
            {car.badge && (
              <span className="absolute top-4 left-4 bg-gold text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5">
                {car.badge}
              </span>
            )}
          </div>

          {/* Body */}
          <div className="p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10">
              {/* Left */}
              <div>
                <p className="text-gray-500 leading-relaxed mb-6">{car.description}</p>
                <div className="flex gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Users size={16} className="text-gold" />
                    <span className="text-sm font-medium text-charcoal">{car.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Luggage size={16} className="text-gold" />
                    <span className="text-sm font-medium text-charcoal">{car.luggage}</span>
                  </div>
                </div>
                <Link to="/booking">
                  <Button variant="primary" icon={<ArrowRight size={15} />}>
                    Book This Vehicle
                  </Button>
                </Link>
              </div>
              {/* Right */}
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-gold mb-4">
                  Features & Amenities
                </p>
                <ul className="space-y-3">
                  {car.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckCircle size={15} className="text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Prev / Next nav */}
          <div className="border-t border-gold/20 px-8 md:px-10 py-5 flex justify-between items-center">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-gold disabled:opacity-30 hover:text-gold-dark transition-colors"
            >
              <ChevronLeft size={16} /> Prev
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className="flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-gold disabled:opacity-30 hover:text-gold-dark transition-colors"
            >
              Next <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── Fleet Page ────────────────────────────────────────────────────────────────
const Fleet = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState(null);

  const filtered = fleetData.filter((c) => matchCategory(c, activeFilter));
  const selectedCar = selectedIndex !== null ? filtered[selectedIndex] : null;

  const openModal = (i) => setSelectedIndex(i);
  const closeModal = () => setSelectedIndex(null);
  const prevCar = () => setSelectedIndex((p) => (p > 0 ? p - 1 : p));
  const nextCar = () => setSelectedIndex((p) => (p < filtered.length - 1 ? p + 1 : p));

  return (
    <main>

      {/* ── Hero ── */}
      <section className="relative h-[55vh] min-h-[380px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80"
            alt="Our Fleet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/85 via-charcoal/65 to-charcoal/85" />
        </div>
        <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-gold/50" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-b border-r border-gold/50" />
        <div className="relative z-10 text-center px-4">
          <motion.span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-gold mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Houston, TX
          </motion.span>
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-light text-white leading-tight mb-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Our <span className="text-gold">Fleet</span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-5" />
          <motion.p
            className="text-white/70 max-w-xl mx-auto text-base leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Six meticulously curated vehicles — each chosen for its ability to deliver a truly exceptional experience.
          </motion.p>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="bg-cream border-b border-gold/20 px-4 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-gold text-white"
                  : "border border-gold/40 text-gold hover:bg-gold hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Fleet Grid ── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((car, i) => (
                <motion.div
                  key={car.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="luxury-card overflow-hidden group cursor-pointer"
                  onClick={() => openModal(i)}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden h-60">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                    {car.badge && (
                      <span className="absolute top-4 right-4 bg-gold text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5">
                        {car.badge}
                      </span>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                      <span className="bg-white text-charcoal text-xs font-semibold tracking-widest uppercase px-5 py-2.5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Details
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <span className="text-xs text-gold font-semibold tracking-widest uppercase mb-2 block">
                      {car.category}
                    </span>
                    <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
                      {car.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                      {car.description}
                    </p>

                    {/* Specs row */}
                    <div className="flex items-center gap-5 mb-5 pb-5 border-b border-gold/20">
                      <div className="flex items-center gap-2">
                        <Users size={14} className="text-gold" />
                        <span className="text-xs text-gray-500">{car.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Luggage size={14} className="text-gold" />
                        <span className="text-xs text-gray-500">{car.luggage}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-1.5 mb-6">
                      {car.features.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1 h-1 bg-gold rounded-full flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold tracking-widest uppercase text-gold group-hover:underline underline-offset-4">
                        View Details
                      </span>
                      <Link
                        to="/booking"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-semibold tracking-widest uppercase border border-gold text-gold px-4 py-2 hover:bg-gold hover:text-white transition-all duration-300"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1600&q=80"
            alt="Book a luxury vehicle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/88" />
        </div>
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-gold/40" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold/40" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <motion.span
            className="text-xs font-semibold tracking-[0.4em] uppercase text-gold mb-4 block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Ready to Ride?
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-serif font-light text-white mb-5 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Reserve Your <span className="text-gold">Perfect Vehicle</span>
          </motion.h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <motion.p
            className="text-white/60 leading-relaxed mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            24/7 availability. Instant confirmation. Luxury, on your schedule.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link to="/booking">
              <Button variant="primary" size="lg" icon={<ArrowRight size={16} />}>
                Book Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="ghost" size="lg">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Detail Modal ── */}
      {selectedCar && (
        <CarModal
          car={selectedCar}
          onClose={closeModal}
          onPrev={prevCar}
          onNext={nextCar}
          hasPrev={selectedIndex > 0}
          hasNext={selectedIndex < filtered.length - 1}
        />
      )}
    </main>
  );
};

export default Fleet;

