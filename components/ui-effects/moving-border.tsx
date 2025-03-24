"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderRadius = "1rem",
  colors = ["rgba(138, 43, 226, 0.8)", "rgba(75, 0, 130, 0.8)"],
  as: Component = "div",
  ...otherProps
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    if (renderedRef.current) return;
    renderedRef.current = true;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === container) {
          const { width, height } = entry.contentRect;
          canvas.width = width;
          canvas.height = height;
          startAnimation();
        }
      }
    });

    resizeObserver.observe(container);

    let animationFrame;
    let startTime;

    function startAnimation() {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      startTime = performance.now();
      animateGradient();
    }

    function animateGradient() {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const progress = (elapsed % duration) / duration;

      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Create gradient
      const gradient = ctx.createLinearGradient(
        width * Math.cos(progress * Math.PI * 2),
        height * Math.sin(progress * Math.PI * 2),
        width * Math.cos((progress + 0.5) * Math.PI * 2),
        height * Math.sin((progress + 0.5) * Math.PI * 2)
      );

      // Add color stops
      colors.forEach((color, i) => {
        gradient.addColorStop(i / (colors.length - 1), color);
      });

      // Draw border
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 4;

      // Calculate border radius
      const radiusValue = Number.parseFloat(borderRadius);
      const radiusUnit = borderRadius.match(/[a-z]+/i)?.[0] || "px";
      const cornerRadius =
        radiusUnit === "rem" ? radiusValue * 16 : radiusValue;

      // Draw rounded rectangle
      ctx.beginPath();
      ctx.moveTo(cornerRadius, 0);
      ctx.lineTo(width - cornerRadius, 0);
      ctx.quadraticCurveTo(width, 0, width, cornerRadius);
      ctx.lineTo(width, height - cornerRadius);
      ctx.quadraticCurveTo(width, height, width - cornerRadius, height);
      ctx.lineTo(cornerRadius, height);
      ctx.quadraticCurveTo(0, height, 0, height - cornerRadius);
      ctx.lineTo(0, cornerRadius);
      ctx.quadraticCurveTo(0, 0, cornerRadius, 0);
      ctx.closePath();
      ctx.stroke();

      animationFrame = requestAnimationFrame(animateGradient);
    }

    startAnimation();

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      resizeObserver.disconnect();
    };
  }, [borderRadius, colors, duration]);

  return (
    <Component
      ref={containerRef}
      className={cn("relative p-[4px] group", containerClassName)}
      {...otherProps}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div
        className={cn(
          "relative w-full h-full bg-black rounded-[calc(1rem-2px)]",
          className
        )}
      >
        {children}
      </div>
    </Component>
  );
}
