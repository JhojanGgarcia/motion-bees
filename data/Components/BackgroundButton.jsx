"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/styles/overlayButton.css";

const BackgroundButton = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [positions, setPositions] = useState({});

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPositions((prevPositions) => ({
      ...prevPositions,
      [index]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const i = 0;

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
      className="relative rounded-xl bg-transparent overflow-hidden radial-gradient"
      onMouseMove={(e) => handleMouseMove(e, i)}
      onMouseEnter={() => handleMouseEnter(i)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="relative px-2 py-1 rounded-xl flex flex-col items-center justify-center"
        style={{
          background:
            hoveredIndex === i
              ? `radial-gradient(circle at ${positions[i]?.x}px ${positions[i]?.y}px, rgba(255, 255, 255, 0.1), transparent 80%)`
              : "transparent",
          transition: "background 0.3s ease",
        }}
      >
        Motion
      </div>
    </motion.button>
  );
};

export default BackgroundButton;
