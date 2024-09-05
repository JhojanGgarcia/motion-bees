"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import "@/styles/overlayButton.css";
const BorderButton = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [positions, setPositions] = useState({});
  const [opacities, setOpacities] = useState({});

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
    setOpacities((prevOpacities) => ({
      ...prevOpacities,
      [index]: 1,
    }));
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setOpacities((prevOpacities) => ({
      ...prevOpacities,
      [hoveredIndex]: 0,
    }));
  };

  const i = 0;

  return (
    <motion.button
      initial={{ scale: 1.5 }}
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
      className="relative  rounded-xl bg-transparent  overflow-hidden radial-gradient"
    >
      <div
        key={i}
        onMouseMove={(e) => handleMouseMove(e, i)}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
        className="relative px-2 py-1  rounded-xl  flex flex-col items-center justify-center"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "inherit",
            border: "1px solid rgba(255, 255, 255, 0.5)",
            opacity: hoveredIndex === i ? opacities[i] : 0,
            pointerEvents: "none",
            WebkitMaskImage: `radial-gradient(circle 20px at ${
              positions[i]?.x || 0
            }px ${positions[i]?.y || 0}px, black 15%, transparent)`,
          }}
          className="transition-opacity duration-500 w-full absolute"
        />
        Motion
      </div>
    </motion.button>
  );
};

export default BorderButton;
