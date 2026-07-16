import React from "react";
import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "right",
  onClick,
  href,
  className = "",
  disabled = false,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold tracking-widest uppercase transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-gold text-white hover:bg-gold-dark hover:shadow-[0_8px_30px_rgba(184,139,64,0.45)]",
    outline:
      "border border-gold text-gold hover:bg-gold hover:text-white hover:shadow-[0_8px_30px_rgba(184,139,64,0.3)]",
    ghost:
      "border border-white text-white hover:bg-white hover:text-charcoal",
    dark:
      "bg-charcoal text-white hover:bg-charcoal-light hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]",
    gold_outline:
      "border-2 border-gold text-gold hover:bg-gold hover:text-white",
  };

  const sizes = {
    sm: "px-5 py-2.5 text-xs",
    md: "px-8 py-4 text-sm",
    lg: "px-10 py-5 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
