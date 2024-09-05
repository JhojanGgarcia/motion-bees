"use client";
import { motion } from "framer-motion";
import React from "react";
import "@/styles/overlayButton.css";
export default function OverlayButton() {
  return (
    <motion.button
      initial={{ "--x": "100%", scale: 1.5 }}
      animate={{ "--x": "-100%" }}
      whileTap={{ scale: 0.97 }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 1,
        type: "spring",
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
      className="px-2 py-1 rounded-xl relative radial-gradient"
    >
      <span className=" absolute top-0 left-0 inset-0 rounded-xl w-full h-full linear-overlay" />
      <span className="text-neutral-100 font-light h-full w-full block relative linear-mask">
        Motion
      </span>
    </motion.button>
  );
}
