"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/styles/overlayButton.css";

const DistortionButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handleTap = () => {
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 200);
  };

  return (
    <motion.button
      animate={{ scale: 1.5 }}
      whileTap={{
        scale: 0.9,
        rotate: isPressed ? 10 : -5,
        skewX: isPressed ? 15 : -15,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
      onTap={handleTap}
      className="relative px-2 py-1  rounded-xl bg-blue-500 text-white font-semibold border border-white/5 radial-gradient"
    >
      Motion
    </motion.button>
  );
};

export default DistortionButton;
