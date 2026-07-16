import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Card = ({
  image,
  badge,
  title,
  subtitle,
  description,
  features,
  className = "",
  delay = 0,
}) => {
  return (
    <motion.div
      className={`luxury-card overflow-hidden group ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {/* Image */}
      {image && (
        <div className="relative overflow-hidden h-56">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
          {badge && (
            <span className="absolute top-4 right-4 bg-gold text-white text-xs font-semibold tracking-widest uppercase px-3 py-1.5">
              {badge}
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      )}

      {/* Content */}
      <div className="p-7">
        {subtitle && (
          <span className="text-xs text-gold font-semibold tracking-widest uppercase mb-2 block">
            {subtitle}
          </span>
        )}
        <h3 className="text-xl font-serif font-bold text-charcoal mb-3 group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        {description && (
          <p className="text-gray-500 text-sm leading-relaxed mb-4">{description}</p>
        )}
        {features && features.length > 0 && (
          <ul className="space-y-1.5">
            {features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle size={14} className="text-gold flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Bottom accent */}
      <div className="h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

export default Card;
