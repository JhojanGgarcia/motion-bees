"use client";
import React from "react";
import { motion } from "framer-motion";

const ShadowButton = () => {
  return (
    <motion.button
    animate={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)", scale: 1.5 }}
      whileTap={{ boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)" }}
      transition={{ duration: 0.3 }}
      className="relative px-2 py-1 rounded-xl border border-white/5 bg-red-500 text-white font-semibold radial-gradient"
    >
      Motion
    </motion.button>
  );
};

export default ShadowButton;
