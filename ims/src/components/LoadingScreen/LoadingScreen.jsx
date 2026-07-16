import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{
            backgroundColor: "rgba(250, 247, 242, 0.88)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          {/* Decorative corner lines */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-gold/40 pointer-events-none" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-gold/40 pointer-events-none" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-gold/40 pointer-events-none" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-gold/40 pointer-events-none" />

          {/* Center content */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Logo */}
            <motion.img
              src="/logo.png"
              alt="IMS Limo"
              className="h-36 w-auto object-contain mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            />

            {/* Gold divider */}
            <motion.div
              className="h-px bg-gold mb-6"
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            {/* Tagline */}
            <motion.p
              className="text-[10px] font-semibold tracking-[0.45em] uppercase text-gold/80 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Houston's Finest Chauffeur Service
            </motion.p>

            {/* Dot loader */}
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-gold"
                  animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Bottom progress bar */}
          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ width: "0%", left: "50%" }}
            animate={{ width: "100%", left: "0%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;

