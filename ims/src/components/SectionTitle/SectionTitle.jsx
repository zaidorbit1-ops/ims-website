import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) => {
  const alignClass = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <motion.div
      className={`flex flex-col ${alignClass[align]} mb-14 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {label && (
        <span
          className={`text-xs font-semibold tracking-[0.3em] uppercase mb-3 ${
            light ? "text-gold-light" : "text-gold"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-tight mb-4 tracking-tight ${
          light ? "text-white" : "text-charcoal"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-16 h-0.5 mb-5 ${
          align === "center" ? "mx-auto" : ""
        } bg-gold`}
      />
      {subtitle && (
        <p
          className={`max-w-2xl text-base md:text-lg leading-relaxed ${
            light ? "text-white/70" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
