import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Construction, ArrowLeft, Phone } from "lucide-react";
import Button from "../../components/Button/Button";

const UnderConstruction = ({ pageName = "This Page" }) => {
  return (
    <div className="min-h-screen bg-charcoal flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] border border-gold/5 rounded-full" />
        <div className="w-[400px] h-[400px] border border-gold/10 rounded-full absolute" />
        <div className="w-[200px] h-[200px] border border-gold/15 rounded-full absolute" />
      </div>

      <motion.div
        className="relative z-10 text-center max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Icon */}
        <div className="w-20 h-20 border-2 border-gold flex items-center justify-center mx-auto mb-8">
          <Construction size={30} className="text-gold" />
        </div>

        {/* Label */}
        <p className="text-gold text-xs font-semibold tracking-[0.4em] uppercase mb-4">
          {pageName}
        </p>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight">
          Under Construction
        </h1>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />

        {/* Text */}
        <p className="text-white/60 leading-relaxed mb-10">
          We are crafting something extraordinary for this page. Our team is working diligently to deliver an experience worthy of the IMS standard. Please check back soon.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/">
            <Button
              variant="outline"
              icon={<ArrowLeft size={15} />}
              iconPosition="left"
            >
              Back to Home
            </Button>
          </Link>
          <a href="tel:+18005550199">
            <Button variant="ghost" icon={<Phone size={14} />} iconPosition="left">
              Call Us
            </Button>
          </a>
        </div>

        {/* Progress bar animation */}
        <div className="mt-12 w-full h-px bg-white/10 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gold"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            style={{ width: "40%" }}
          />
        </div>
        <p className="text-white/20 text-xs mt-3 tracking-widest uppercase">
          Coming Soon
        </p>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;
