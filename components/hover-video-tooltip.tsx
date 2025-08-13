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
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const triggerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const preloadVideoRef = useRef<HTMLVideoElement | null>(null);

  // Preload video on component mount
  useEffect(() => {
    const preloadVideo = document.createElement("video");
    preloadVideo.preload = "auto"; // Changed from 'metadata' to 'auto'
    preloadVideo.muted = true;
    preloadVideo.loop = true;
    preloadVideo.src = videoUrl;
    preloadVideo.style.display = "none";

    // Add to DOM to ensure it loads
    document.body.appendChild(preloadVideo);
    preloadVideoRef.current = preloadVideo;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
    };

    const handleCanPlayThrough = () => {
      setIsVideoReady(true);
    };

    preloadVideo.addEventListener("loadeddata", handleLoadedData);
    preloadVideo.addEventListener("canplaythrough", handleCanPlayThrough);

    // Force load
    preloadVideo.load();

    return () => {
      preloadVideo.removeEventListener("loadeddata", handleLoadedData);
      preloadVideo.removeEventListener("canplaythrough", handleCanPlayThrough);
      if (
        preloadVideoRef.current &&
        document.body.contains(preloadVideoRef.current)
      ) {
        document.body.removeChild(preloadVideoRef.current);
      }
    };
  }, [videoUrl]);

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

  const handleMouseEnter = () => {
    setIsHovering(true);
    // If video is ready, start playing immediately
    if (isVideoReady && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(console.error);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <span
      ref={triggerRef}
      className={`relative cursor-pointer font-medium text-blue-600 hover:underline ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
            className="fixed z-50 w-64 md:w-80 rounded-lg shadow-lg overflow-hidden bg-black/90 backdrop-blur-sm"
            style={{ pointerEvents: "auto" }}
          >
            {!isVideoLoaded ? (
              <div className="w-full h-40 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
              </div>
            ) : (
              <video
                ref={videoRef}
                loop
                autoPlay={isVideoReady}
                className="w-full h-full object-cover"
                playsInline
                onClick={(e) => {
                  e.stopPropagation();
                  const video = e.currentTarget as HTMLVideoElement;
                  video.muted = false;
                  video.play();
                }}
                style={{ pointerEvents: "auto" }}
              >
                <source src={videoUrl} type="video/webm" />
                <source
                  src={videoUrl.replace(".webm", ".mp4")}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </span>
  );
}
