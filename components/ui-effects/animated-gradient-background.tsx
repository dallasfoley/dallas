"use client";

import { useEffect, useRef } from "react";

export default function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId: number;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Create gradient points
    const gradientPoints = [
      {
        x: canvas.width * 0.1,
        y: canvas.height * 0.1,
        vx: 0.2,
        vy: 0.3,
        color: "#8a2be2",
      },
      {
        x: canvas.width * 0.9,
        y: canvas.height * 0.2,
        vx: -0.1,
        vy: 0.2,
        color: "#4b0082",
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.8,
        vx: 0.3,
        vy: -0.2,
        color: "#9400d3",
      },
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.7,
        vx: 0.2,
        vy: -0.1,
        color: "#800080",
      },
    ];

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update gradient points
      gradientPoints.forEach((point) => {
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;
      });

      // Create gradient
      const gradient = ctx.createRadialGradient(
        gradientPoints[0].x,
        gradientPoints[0].y,
        0,
        gradientPoints[0].x,
        gradientPoints[0].y,
        canvas.width * 0.8
      );

      // Add color stops
      gradientPoints.forEach((point, index) => {
        gradient.addColorStop(index / gradientPoints.length, point.color);
      });

      // Fill canvas with gradient
      ctx.fillStyle = gradient;
      ctx.filter = "blur(100px)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 opacity-30"
    />
  );
}
