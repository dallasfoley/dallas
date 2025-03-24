"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Card3D({
  children,
  className = "",
  containerClassName = "",
  cardClassName = "",
  glareClassName = "",
  rotationIntensity = 10,
  glareOpacity = 0.2,
  glareSize = 0.8,
  borderRadius = "1rem",
  shadow = true,
  ...props
}: {
  children: React.ReactNode;
  className: string;
  containerClassName: string;
  cardClassName: string;
  glareClassName: string;
  rotationIntensity: number;
  glareOpacity: number;
  glareSize: number;
  borderRadius: string;
  shadow: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rotateY = (mouseX / width - 0.5) * rotationIntensity;
    const rotateX = (mouseY / height - 0.5) * -rotationIntensity;

    setRotateX(rotateX);
    setRotateY(rotateY);
    setMouseX(mouseX / width);
    setMouseY(mouseY / height);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative perspective-1000", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className={cn(
          "preserve-3d relative w-full h-full",
          shadow && "shadow-xl",
          cardClassName
        )}
        style={{
          borderRadius,
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className={cn("h-full w-full", className)}>{children}</div>

        {/* Glare effect */}
        <div
          className={cn("absolute inset-0 pointer-events-none", glareClassName)}
          style={{
            borderRadius,
            opacity: glareOpacity,
            background: `radial-gradient(
              circle at ${mouseX * 100}% ${mouseY * 100}%, 
              rgba(255, 255, 255, 0.8), 
              transparent ${glareSize * 100}%
            )`,
          }}
        />
      </motion.div>
    </div>
  );
}
