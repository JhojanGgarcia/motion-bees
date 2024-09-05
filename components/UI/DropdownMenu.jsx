"use client";
import "@/styles/mask.css";
import React, { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import {
  ChevronRightIcon,
  Github,
  Moon,
  Twitter,
  ChevronDown,
} from "lucide-react";

import { cn } from "@/utils/cn";

function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

  useEffect(() => {
    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 12px)"
          : "inset(10% 50% 90% 50% round 12px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen, animate, staggerMenuItems]);

  return scope;
}

const DropdownMenu = ({ containerClassName, itemClassName }) => {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);

  const items = [
    { name: "Stars on GitHub", link: "https://github.com/JhojanGgarcia/motion-bees" },
    { name: "Visit me", link: "https://x.com/MrcGgarcia" },
  ];

  return (
    <nav
      className={cn(
        "fixed bottom-5  md:left-5 max-w-[200px] w-full mx-auto space-y-2 z-50",
        containerClassName
      )}
      ref={scope}
    >
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="z-50  relative border backdrop-blur-xl border-white/5 w-full flex items-center justify-between p-5 rounded-xl"
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <span className="text-sm font-medium absolute left-2 text-neutral-300">
          Menu
        </span>
        <div
          className="absolute right-4"
          style={{ transformOrigin: "50% 55%" }}
        ></div>
          <span class="absolute left-12 w-[96px] inset-x-1 bottom-0 h-px bg-gradient-to-r from-black/0 via-white/20 to-black/0"></span>
      </motion.button>
      <ul
        className={cn(
          "absolute  bottom-12 z-50  backdrop-blur-md w-full space-y-1 p-2.5 border border-white/5 rounded-xl", // backdrop-blur-md para desenfoque
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        style={{
          clipPath: "inset(10% 50% 90% 50% round 12px)",
        }}
      >
      
        {items.map(({link, icon, name, customStyle }) => (
          <li className="relative flex" key={name}>
            
            <a
              href={link}
              className={cn(
                "group flex items-center gap-2 rounded-md border border-transparent text-neutral-400 hover:text-neutral-300 focus-visible:text-neutral-300 focus-visible:border-neutral-800 focus-visible:outline-none",
                itemClassName,
                customStyle
              )}
            >
              <span>{icon}</span>
              <span className="flex relative items-center gap-1 text-sm font-medium">
                {name}

              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DropdownMenu;
