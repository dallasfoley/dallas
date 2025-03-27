"use client";

import { JSX, useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import React from "react"; // Import React

interface TextRevealProps {
  text?: string;
  className?: string;
  once?: boolean;
  delay?: number;
  duration?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function TextReveal({
  text = "",
  className = "",
  once = true,
  delay = 0,
  duration = 0.05,
  as: Component = "h2",
}: TextRevealProps) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  const words = text.split(" ");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return React.createElement(
    Component,
    { className: className },
    <React.Fragment>
      <span className="sr-only">{text}</span>
      <motion.span
        ref={ref}
        aria-hidden
        initial="hidden"
        animate={controls}
        variants={{
          visible: {
            transition: { staggerChildren: duration, delayChildren: delay },
          },
          hidden: {},
        }}
        className="inline-block"
      >
        {words.map((word, i) => (
          <span key={i} className="inline-block whitespace-nowrap">
            {Array.from(word).map((char, j) => (
              <motion.span
                key={j}
                variants={{
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    scale: 1,
                  },
                  hidden: {
                    opacity: 0,
                    y: 20,
                    rotate: 10,
                    scale: 0.8,
                  },
                }}
                transition={{
                  type: "spring",
                  damping: 12,
                  stiffness: 100,
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </React.Fragment>
  );
}
