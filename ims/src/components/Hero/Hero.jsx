import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star } from "lucide-react";

const slides = [
  {
    bg: "/hero-1.avif",
    tagline: "Where Luxury Meets the Road",
    headline: "Executive Ground\nTransportation",
    subtext:
      "Experience the pinnacle of chauffeured travel. Impeccably maintained vehicles, rigorously trained drivers, and a standard of service that defines VVIP.",
  },
  // Rolls-Royce slide removed
  {
    bg: "/cadical-xts.avif",
    tagline: "VVIP Airport Transfers",
    headline: "Never Wait.\nAlways Arrive.",
    subtext:
      "Real-time flight tracking, meet-and-greet service, and a personal chauffeur waiting — because your time is the most precious commodity.",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      {slides.map((s, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <img
            src={s.bg}
            alt="IMS Luxury Vehicle"
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-40 pb-16 w-full">
        <div className="max-w-2xl">
          {/* Rating Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 mb-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} fill="#b88b40" className="text-gold" />
              ))}
            </div>
            <span className="text-white/80 text-xs tracking-widest uppercase">
              Rated #1 Luxury Chauffeur Service
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            key={`tag-${current}`}
            className="text-gold text-xs font-semibold tracking-[0.4em] uppercase mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {slide.tagline}
          </motion.p>

          {/* Headline */}
          <motion.h1
            key={`h-${current}`}
            className="text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-[1.05] mb-6 whitespace-pre-line tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {slide.headline}
          </motion.h1>

          {/* Gold divider */}
          <div className="w-16 h-0.5 bg-gold mb-6" />

          {/* Subtext */}
          <motion.p
            key={`sub-${current}`}
            className="text-white/70 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {slide.subtext}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Link to="/booking" className="btn-primary gap-2 group">
              Reserve Your Ride
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="tel:8327663140" className="btn-ghost gap-2">
              <Phone size={14} />
              Call Now
            </a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            className="flex flex-wrap gap-8 mt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[
              { value: "15+", label: "Years of Excellence" },
              { value: "50K+", label: "Happy Clients" },
              { value: "24/7", label: "Availability" },
            ].map((stat) => (
              <div key={stat.label} className="border-l-2 border-gold pl-4">
                <p className="text-2xl font-serif font-bold text-white">{stat.value}</p>
                <p className="text-white/50 text-xs tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 md:right-16 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-400 ${
              i === current
                ? "w-8 h-1.5 bg-gold"
                : "w-4 h-1.5 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-white/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
