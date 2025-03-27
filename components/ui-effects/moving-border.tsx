"use client";

import React from "react";
import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type AsProps<C extends React.ElementType> = {
  as?: C;
};

type PropsWithAs<C extends React.ElementType, P = object> = AsProps<C> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof AsProps<C>> &
  P;

export interface MovingBorderOwnProps {
  children?: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderRadius?: string;
  colors?: string[];
}

export type MovingBorderProps<C extends React.ElementType = "div"> =
  PropsWithAs<C, MovingBorderOwnProps>;

export default function MovingBorder<C extends React.ElementType = "div">({
  as,
  children,
  duration = 2000,
  className,
  containerClassName,
  borderRadius = "1rem",
  colors = ["rgba(138, 43, 226, 0.8)", "rgba(75, 0, 130, 0.8)"],
  ...otherProps
}: MovingBorderProps<C>) {
  const Component = as || "div";
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

    let animationFrame: number | undefined;
    let startTime: number;

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

      if (!canvas) return;
      const width = canvas.width;
      const height = canvas.height;

      // Clear canvas
      if (!ctx) return;
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

  // Separate the props we want to pass to the Component
  const componentProps = {
    className: cn(
      "relative w-full h-full bg-black rounded-[calc(1rem-2px)]",
      className
    ),
    ...otherProps,
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative p-[4px] group", containerClassName)}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      {React.createElement(Component, componentProps, children)}
    </div>
  );
}
