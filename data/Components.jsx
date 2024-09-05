
import OverlayButton from "./Components/OverlayButton";
import BorderButton from "@/data/Components/BorderButton";
import BackgroundButton from "./Components/BackgroundButton";
import TapButton from "./Components/TapButton";
import DistortionButton from "./Components/DistortionButton";
import BounceButton from "./Components/BounceButton";
import ParticleButton from "./Components/ParticleButton";
import ShadowButton from "./Components/ShadowButton";

export const Components = [
  {
    name: "Overlay button",
    type: "hover",
    stack: {
      tagAnimation: ["#Tailwind", "#Framer Motion", "#CSS"],
      tagDev: ["Code"],
    },
    Component() {
      return <OverlayButton />;
    },
    CSSCode() {
      return `
      .radial-gradient {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 1);
      transition: background 0.3s ease-in-out;
      }

      .radial-gradient:hover {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 0.5);
      }

      .linear-mask {
      mask-image: linear-gradient(
      -75deg,
      white calc(var(--x) + 20%),
      transparent calc(var(--x) + 30%),
      white calc(var(--x) + 100%)
      );
      -webkit-mask-image: linear-gradient(
      -75deg,
      white calc(var(--x) + 20%),
      transparent calc(var(--x) + 30%),
      white calc(var(--x) + 100%)
      );
      }

      .linear-overlay {
      background-image: linear-gradient(
      -75deg,
      rgba(255, 255, 255, 0.1) calc(var(--x) + 20%),
      rgba(255, 255, 255, 0.5) calc(var(--x) + 25%),
      rgba(255, 255, 255, 0.1) calc(var(--x) + 100%)
      );
      mask: linear-gradient(black, black) content-box, linear-gradient(black, black);
      -webkit-mask: linear-gradient(black, black) content-box,
      linear-gradient(black, black);
      mask-composite: exclude;
      -webkit-mask-composite: xor;
      padding: 1px;
      }

      `;
    },
    SourceCode() {
      return `

import { motion } from "framer-motion";
// remember to import '@/styles/radialgradient.css'

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
      <span className="absolute top-0 left-0 inset-0 rounded-xl w-full h-full linear-overlay" />
      <span className="text-neutral-100 font-light h-full w-full block relative linear-mask">
        Motion
      </span>
    </motion.button>
  );
}
      `;
    },
  },
  {
    name: "Border button",
    type: "hover",
    stack: {
      tagAnimation: ["#Tailwind", "#Framer Motion", "#CSS"],
      tagDev: ["Code"],
    },
    Component() {
      return <BorderButton />;
    },
    CSSCode() {
      return `
      .radial-gradient {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 1);
      transition: background 0.3s ease-in-out;
      }

      .radial-gradient:hover {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 0.5);
      }
      `;
    },
    SourceCode() {
      return `

import { motion } from "framer-motion";
import { useState } from "react";
// remember to import '@/styles/radialgradient.css'

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
    >
      <div
        key={i}
        onMouseMove={(e) => handleMouseMove(e, i)}
        onMouseEnter={() => handleMouseEnter(i)}
        onMouseLeave={handleMouseLeave}
        className="relative px-2 py-1 rounded-xl flex flex-col items-center justify-center"
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
            WebkitMaskImage: \`radial-gradient(circle 20px at \${positions[i]?.x || 0}px \${positions[i]?.y || 0}px, black 15%, transparent)\`,
          }}
          className="transition-opacity duration-500 w-full absolute"
        />
        Motion
      </div>
    </motion.button>
  );
};

export default BorderButton;
      `;
    },
  },
  {
    name: "Background button",
    type: "hover",
    stack: {
      tagAnimation: ["#Tailwind", "#Framer Motion", "#CSS"],
      tagDev: ["Code"],
    },
    Component() {
      return <BackgroundButton />;
    },
    CSSCode() {
      return `
      .radial-gradient {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 1);
      transition: background 0.3s ease-in-out;
      }

      .radial-gradient:hover {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 0.5);
      }
      `;
    },
    SourceCode() {
      return `

import React, { useState } from "react";
import { motion } from "framer-motion";
// remember to import '@/styles/radialgradient.css'

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
              ? \`radial-gradient(circle at \${positions[i]?.x}px \${positions[i]?.y}px, rgba(255, 255, 255, 0.1), transparent 80%)\`
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
      `;
    },
  },
  {
    name: "Tap button",
    type: "click",
    stack: {
      tagAnimation: ["#Tailwind", "#Framer Motion", "#CSS"],
      tagDev: ["Code"],
    },
    Component() {
      return <TapButton />;
    },
    CSSCode() {
      return `
      .radial-gradient {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 1);
      transition: background 0.3s ease-in-out;
      }

      .radial-gradient:hover {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 0.5);
      }
      `;
    },
    SourceCode() {
      return `

import React, { useState } from "react";
import { motion } from "framer-motion";
// remember to import '@/styles/radialgradient.css'

const TapButton = () => {
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
      {ripples.map(ripple => (
        <span
          key={ripple.key}
          className="absolute rounded-full bg-white opacity-50"
          style={{
            width: ripple.size,
            height: ripple.size,
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            transform: "scale(0)",
            animation: "ripple 0.6s linear",
          }}
        />
      ))}
      <span className="relative px-2 py-1 rounded-xl text-neutral-100 font-light">
        Motion
      </span>
    </motion.button>
  );
};

export default TapButton;
      `;
    },
  },
  {
    name: "Distortion button",
    type: "hover",
    stack: {
      tagAnimation: ["#Tailwind", "#Framer Motion", "#CSS"],
      tagDev: ["Code"],
    },
    Component() {
      return <DistortionButton />;
    },
    CSSCode() {
      return `
      .radial-gradient {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 1);
      transition: background 0.3s ease-in-out;
      }

      .radial-gradient:hover {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 0.5);
      }
      `;
    },
    SourceCode() {
      return `


import { motion } from "framer-motion";
// remember to import '@/styles/radialgradient.css'

const DistortionButton = () => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative rounded-xl overflow-hidden bg-transparent radial-gradient"
    >
      <span className="absolute inset-0 border-2 border-white" />
      <span className="relative px-2 py-1 rounded-xl text-neutral-100 font-light">
        Motion
      </span>
    </motion.button>
  );
};

export default DistortionButton;
      `;
    },
  },
  {
    name: "Bounce button",
    type: "hover",
    stack: {
      tagAnimation: ["#Tailwind", "#Framer Motion", "#CSS"],
      tagDev: ["Code"],
    },
    Component() {
      return <BounceButton />;
    },
    CSSCode() {
      return `
      .radial-gradient {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 1);
      transition: background 0.3s ease-in-out;
      }

      .radial-gradient:hover {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 0.5);
      }
      `;
    },
    SourceCode() {
      return `

import { motion } from "framer-motion";
// remember to import '@/styles/radialgradient.css'

const BounceButton = () => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative rounded-xl bg-transparent radial-gradient"
    >
      <span className="relative px-2 py-1 rounded-xl text-neutral-100 font-light">
        Motion
      </span>
    </motion.button>
  );
};

export default BounceButton;
      `;
    },
  },
  {
    name: "Particle button",
    type: "click",
    stack: {
      tagAnimation: ["#Tailwind", "#Framer Motion", "#CSS"],
      tagDev: ["Code"],
    },
    Component() {
      return <ParticleButton />;
    },
    CSSCode() {
      return `
      .radial-gradient {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 1);
      transition: background 0.3s ease-in-out;
      }

      .radial-gradient:hover {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 0.5);
      }
      `;
    },
    SourceCode() {
      return `

import React, { useState } from "react";
import { motion } from "framer-motion";
// remember to import '@/styles/radialgradient.css'

const ParticleButton = () => {
  const [particles, setParticles] = useState([]);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newParticles = Array.from({ length: 10 }).map((_, i) => ({
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      key: Date.now() + i,
    }));

    setParticles((prevParticles) => [...prevParticles, ...newParticles]);

    // Remove particles after animation
    setTimeout(() => {
      setParticles((prevParticles) =>
        prevParticles.filter(p => !newParticles.some(np => np.key === p.key))
      );
    }, 500);
  };

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative rounded-xl overflow-hidden bg-transparent radial-gradient"
      onClick={handleClick}
    >
      {particles.map(p => (
        <span
          key={p.key}
          className="absolute rounded-full bg-white opacity-50"
          style={{
            width: 10,
            height: 10,
            left: p.x,
            top: p.y,
            transform: "scale(0)",
            animation: "particle 0.5s forwards",
          }}
        />
      ))}
      <span className="relative px-2 py-1 rounded-xl text-neutral-100 font-light">
        Motion
      </span>
    </motion.button>
  );
};

export default ParticleButton;
      `;
    },
  },
  {
    name: "Shadow button",
    type: "hover",
    stack: {
      tagAnimation: ["#Tailwind", "#Framer Motion", "#CSS"],
      tagDev: ["Code"],
    },
    Component() {
      return <ShadowButton />;
    },
    CSSCode() {
      return `
      .radial-gradient {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 1);
      transition: background 0.3s ease-in-out;
      }

      .radial-gradient:hover {
      background: radial-gradient(
      circle at 50% 0%,
      rgba(250, 250, 250, 0.05) 0%,
      transparent 60%
      )
      rgba(15, 15, 15, 0.5);
      }
      `;
    },
    SourceCode() {
      return `


import { motion } from "framer-motion";
// remember to import '@/styles/radialgradient.css'

const ShadowButton = () => {
  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.1, boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)" }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative rounded-xl bg-transparent radial-gradient"
    >
      <span className="relative px-2 py-1 rounded-xl text-neutral-100 font-light">
        Motion
      </span>
    </motion.button>
  );
};

export default ShadowButton;
      `;
    },
  },
];
