"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/styles/overlayButton.css";

const BackgroundButton = () => {
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, size, key: Date.now() };
    
    setRipples((prevRipples) => [...prevRipples, newRipple]);

    // Remove ripple after animation is complete
    setTimeout(() => {
      setRipples((prevRipples) => prevRipples.filter(r => r.key !== newRipple.key));
    }, 600); // Duration of the ripple effect
  };

  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1.5 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        stiffness: 20,
        damping: 15,
        mass: 2,
        scale: {
          type: "spring",
          stiffness: 10,
          damping: 5,
          mass: 0.1,
        },
      }}
      className="relative overflow-hidden rounded-xl bg-transparent radial-gradient"
      onClick={handleClick}
    >
      <div className="relative px-2 py-1 rounded-xl flex flex-col items-center justify-center">
        Motion
      </div>
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.key}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: ripple.size / 10, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
            position: "absolute",
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}
    </motion.button>
  );
};

export default BackgroundButton;
