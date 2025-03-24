"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HoverVideoTooltipProps {
  children: React.ReactNode;
  videoUrl: string;
  className?: string;
}

export default function HoverVideoTooltip({
  children,
  videoUrl,
  className = "",
}: HoverVideoTooltipProps) {
  const [isHovering, setIsHovering] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Position the tooltip based on the trigger element
  useEffect(() => {
    if (!isHovering || !triggerRef.current || !tooltipRef.current) return;

    const updatePosition = () => {
      if (!triggerRef.current || !tooltipRef.current) return;

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const tooltipRect = tooltipRef.current.getBoundingClientRect();

      // Center the tooltip horizontally relative to the trigger
      const left =
        triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;

      // Position the tooltip above the trigger
      const top = triggerRect.top - tooltipRect.height - 10;

      // Adjust if tooltip would go off screen
      const adjustedLeft = Math.max(
        10,
        Math.min(left, window.innerWidth - tooltipRect.width - 10)
      );
      const adjustedTop = top < 10 ? triggerRect.bottom + 10 : top;

      tooltipRef.current.style.left = `${adjustedLeft}px`;
      tooltipRef.current.style.top = `${adjustedTop}px`;
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [isHovering]);

  return (
    <span
      ref={triggerRef}
      className={`relative cursor-pointer font-medium text-blue-600 hover:underline ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {children}

      <AnimatePresence>
        {isHovering && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="fixed z-50 w-64 md:w-80 rounded-lg shadow-lg overflow-hidden"
            style={{ pointerEvents: "auto" }}
          >
            <video
              autoPlay
              loop
              className="w-full h-full object-cover"
              ref={(el) => {
                if (el) {
                  el.muted = false;
                  // Some browsers still require user interaction to play with sound
                  el.addEventListener("click", () => {
                    el.muted = false;
                    el.play();
                  });
                }
              }}
              onClick={(e) => {
                // Prevent the tooltip from closing when clicking the video
                e.stopPropagation();
                const video = e.currentTarget as HTMLVideoElement;
                video.muted = false;
                video.play();
              }}
              style={{ pointerEvents: "auto" }}
            >
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
