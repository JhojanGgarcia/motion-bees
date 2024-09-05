"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ParticleButton = () => {
  const [particles, setParticles] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticles = Array.from({ length: 20 }).map((_, index) => ({
      id: index,
      x: x + Math.random() * 20 - 10,
      y: y + Math.random() * 20 - 10,
      opacity: Math.random(),
      size: Math.random() * 5 + 2,
    }));

    setParticles(newParticles);

    // Clear particles after animation
    setTimeout(() => setParticles([]), 500);
  };

  return (
    <motion.button
    animate={{ scale: 1.5 }}
      onClick={handleClick}
      className="relative px-2 py-1 rounded-xl  text-white font-semibold overflow-hidden radial-gradient"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 1, scale: 1 }}
          animate={{
            opacity: 0,
            scale: particle.size,
            x: particle.x,
            y: particle.y,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: particle.size,
            height: particle.size,
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      ))}
      Motion
    </motion.button>
  );
};

export default ParticleButton;
