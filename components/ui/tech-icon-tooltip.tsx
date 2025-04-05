"use client";

import type React from "react";
import { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import type { IconType } from "react-icons/lib";

interface TechIconTooltipProps {
  Icon: IconType;
  className?: string;
  techName: string; // Add explicit techName prop
}

export default function TechIconTooltip({
  Icon,
  className = "",
  techName = "Technology", // Default fallback
}: TechIconTooltipProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Animation configuration
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-15, 15]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-20, 20]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent) => {
    const halfWidth = (event.currentTarget as HTMLElement).offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Icon className="h-full w-full" />

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 10,
              },
            }}
            exit={{ opacity: 0, y: 20, scale: 0.6 }}
            style={{
              translateX: translateX,
              rotate: rotate,
              whiteSpace: "nowrap",
            }}
            className="absolute -top-10 left-1/2 z-50 -translate-x-1/2 rounded-md bg-black px-3 py-1.5 text-xs shadow-xl"
          >
            <div className="absolute left-0 right-0 -bottom-px z-30 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
            <div className="absolute left-0 right-0 -bottom-px z-30 mx-auto h-px w-[80%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            <div className="text-white">{techName}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
