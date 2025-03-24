"use client";

import { useEffect, useRef, useState } from "react";
import type { Application, SPEObject } from "@splinetool/runtime";
import dynamic from "next/dynamic";
import { TECH_KEYS, type TechKey } from "@/lib/constants/keys";
import { useMediaQuery } from "@/hooks/use-media-query";

// Import Spline with no SSR to avoid hydration issues
const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] flex items-center justify-center">
      <div className="bg-black/80 text-white px-4 py-2 rounded-lg">
        Loading 3D keyboard...
      </div>
    </div>
  ),
});

const Keyboard = () => {
  const [splineApp, setSplineApp] = useState<Application | null>(null);
  const [hoveredKey, setHoveredKey] = useState<TechKey | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const keyboardRef = useRef<SPEObject>(null);

  // Use media query to detect mobile devices
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isSmallMobile = useMediaQuery("(max-width: 480px)");

  // Handle when Spline scene loads
  const handleSplineLoad = (app: Application) => {
    console.log("Spline scene loaded");
    setSplineApp(app);
    setIsLoading(false);

    // Get keyboard object
    const keyboard =
      app.findObjectByName("keyboard") || app.findObjectByName("Keyboard");

    if (keyboard) {
      keyboardRef.current = keyboard;

      // Apply appropriate scaling based on device size
      applyResponsiveScaling(keyboard);

      // Also adjust camera position for better framing
      const camera = app.findObjectByName("Camera");
      if (camera) {
        adjustCameraForDevice(camera);
      }
    }
  };

  // Function to apply responsive scaling
  const applyResponsiveScaling = (keyboard: SPEObject) => {
    if (isSmallMobile) {
      // Extra small devices
      keyboard.scale.x = 0.08;
      keyboard.scale.y = 0.08;
      keyboard.scale.z = 0.08;
      // Center it better
      keyboard.position.y = 0.5;
    } else if (isMobile) {
      // Mobile devices
      keyboard.scale.x = 0.15;
      keyboard.scale.y = 0.15;
      keyboard.scale.z = 0.15;
      // Slight position adjustment
      keyboard.position.y = 0.3;
    } else {
      // Desktop/tablet
      keyboard.scale.x = 0.2;
      keyboard.scale.y = 0.2;
      keyboard.scale.z = 0.2;
    }
  };

  // Function to adjust camera for different devices
  const adjustCameraForDevice = (camera: SPEObject) => {
    if (isMobile) {
      // For mobile, we might want to pull the camera back a bit
      // and adjust the field of view
      if (camera.position) {
        camera.position.z += 2; // Move camera back
      }

      // If the camera has a fov property (field of view)
      if ("fov" in camera) {
        camera.fov = isMobile ? 60 : 45; // Wider FOV on mobile
      }
    }
  };

  // Update scaling when screen size changes
  useEffect(() => {
    if (keyboardRef.current) {
      applyResponsiveScaling(keyboardRef.current);
    }
  }, [isMobile, isSmallMobile]);

  // Set up event listeners for keyboard interactions
  useEffect(() => {
    if (!splineApp) return;

    interface MouseHoverEvent {
      target: {
        name: string;
      };
    }

    const handleMouseHover = (e: MouseHoverEvent) => {
      // Check if the hovered object is one of our tech keys
      const techKey = TECH_KEYS[e.target.name];
      if (techKey) {
        setHoveredKey(techKey);
      } else if (
        e.target.name.includes("key-") ||
        e.target.name.includes("Key")
      ) {
        // Try to extract the key name if it follows a pattern
        const keyMatch =
          e.target.name.match(/key-(\w+)/i) || e.target.name.match(/(\w+)Key/i);
        if (keyMatch && keyMatch[1]) {
          const keyName = keyMatch[1].toLowerCase();
          const matchedKey = TECH_KEYS[keyName];
          if (matchedKey) {
            setHoveredKey(matchedKey);
          }
        }
      } else {
        // If we hover away from a key, clear the tooltip
        setHoveredKey(null);
      }
    };

    // Add event listener for mouse hover
    splineApp.addEventListener("mouseHover", handleMouseHover);

    // Cleanup event listener
    return () => {
      if (splineApp.removeEventListener) {
        splineApp.removeEventListener("mouseHover", handleMouseHover);
      }
    };
  }, [splineApp]);

  return (
    <div
      ref={containerRef}
      className={`w-full relative ${
        isSmallMobile
          ? "h-[250px]"
          : isMobile
          ? "h-[300px]"
          : "h-[400px] md:h-[500px]"
      }`}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 z-10">
          <div className="bg-black/80 text-white px-4 py-2 rounded-lg">
            Loading 3D keyboard...
          </div>
        </div>
      )}

      <Spline
        className="w-full h-full"
        onLoad={handleSplineLoad}
        scene="https://prod.spline.design/SoYGLjqgrEl0xgdd/scene.splinecode"
      />

      {/* Tooltip that appears when hovering over a key */}
      {hoveredKey && (
        <div
          className={`
          absolute z-20 bg-black/80 text-white p-3 rounded-lg 
          max-w-[250px] shadow-lg border border-gray-700
          ${
            isMobile
              ? "bottom-4 left-1/2 -translate-x-1/2"
              : "top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2"
          }
        `}
        >
          <h3 className="text-lg font-bold mb-1">{hoveredKey.label}</h3>
          <p className="text-sm">{hoveredKey.description}</p>
        </div>
      )}
    </div>
  );
};

export default Keyboard;
