"use client";
import React from "react";
import { motion } from "framer-motion";

const BounceButton = () => {
  return (
    <motion.button
      whileTap={{ scale: 0.8 }}
      animate={{ scale: 1.5 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 15,
      }}
      className=" px-2 py-1 rounded-xl font-semibold border border-white/5  "
    >
      Motion
    </motion.button>
  );
};

export default BounceButton;
