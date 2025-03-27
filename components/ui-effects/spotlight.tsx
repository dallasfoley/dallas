"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

import { ReactNode } from "react";

export default function Spotlight({
  children,
  className = "",
  size = 600,
  color = "rgba(138, 43, 226, 0.15)",
}: {
  children: ReactNode;
  className?: string;
  size?: number;
  color?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX.current = x;
      mouseY.current = y;

      // Update CSS variables
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={
        {
          "--spotlight-size": `${size}px`,
          "--spotlight-color": color,
        } as React.CSSProperties
      }
    >
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `radial-gradient(
            circle var(--spotlight-size) at var(--mouse-x, 0) var(--mouse-y, 0),
            var(--spotlight-color),
            transparent
          )`,
          opacity: 0.8,
        }}
      />
      {children}
    </div>
  );
}
