"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Application, SPEObject } from "@splinetool/runtime";
//import dynamic from "next/dynamic";
import { TECH_KEYS, type TechKey } from "@/lib/constants/keys";
import { useMediaQuery } from "@/hooks/use-media-query";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Import Spline with no SSR to avoid hydration issues
// const Spline = dynamic(() => import("@splinetool/react-spline"), {
//   ssr: false,
//   loading: () => (
//     <div className="w-full h-[300px] flex items-center justify-center">
//       <div className="bg-black/80 text-white px-4 py-2 rounded-lg">
//         Loading 3D keyboard...
//       </div>
//     </div>
//   ),
// });

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

      // Set up barrel roll animation
      setupBarrelRollAnimation(keyboard);

      // Also adjust camera position for better framing
      const camera = app.findObjectByName("Camera");
      if (camera) {
        adjustCameraForDevice(camera);
      }
    }
  };

  // Function to set up barrel roll animation
  const setupBarrelRollAnimation = (keyboard: SPEObject) => {
    if (!containerRef.current) return;

    // Store the initial rotation
    const initialRotation = {
      x: keyboard.rotation.x,
      y: keyboard.rotation.y,
      z: keyboard.rotation.z,
    };

    // Create a GSAP timeline with ScrollTrigger
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 50%",
      onEnter: () => {
        // Perform a barrel roll that returns to the original orientation
        gsap.to(keyboard.rotation, {
          x: initialRotation.x + Math.PI * 2, // Full barrel roll around x-axis
          y: initialRotation.y, // Maintain original y rotation
          z: initialRotation.z, // Maintain original z rotation
          duration: 1.5,
          ease: "power2.out",
        });
      },
      // Ensure the animation only triggers once
      once: true,
    });
  };

  // Function to apply responsive scaling
  const applyResponsiveScaling = useCallback(
    (keyboard: SPEObject) => {
      console.log(
        "Applying scaling - isMobile:",
        isMobile,
        "isSmallMobile:",
        isSmallMobile
      );

      if (isSmallMobile) {
        // Extra small devices
        console.log("Applying small mobile scaling (0.08)");
        keyboard.scale.x = 0.08;
        keyboard.scale.y = 0.08;
        keyboard.scale.z = 0.08;
        // Center it better
        keyboard.position.y = 0.5;
      } else if (isMobile) {
        keyboard.scale.x = 0.15;
        keyboard.scale.y = 0.15;
        keyboard.scale.z = 0.15;
        console.log("Applying mobile scaling (0.15)");
        keyboard.scale.x = 0.15;
        keyboard.scale.y = 0.15;
        keyboard.scale.z = 0.15;
        // Slight position adjustment
        keyboard.scale.x = 0.2;
        keyboard.scale.y = 0.2;
        keyboard.scale.z = 0.2;
      } else {
        // Desktop/tablet
        console.log("Applying desktop scaling (0.2)");
        keyboard.scale.x = 0.2;
        keyboard.scale.y = 0.2;
        keyboard.scale.z = 0.2;
      }
    },
    [isMobile, isSmallMobile]
  );

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

  // Re-apply scaling when media query changes
  useEffect(() => {
    if (splineApp && keyboardRef.current) {
      console.log("Media query changed, reapplying scaling");
      applyResponsiveScaling(keyboardRef.current);
    }
  }, [isMobile, isSmallMobile, splineApp, applyResponsiveScaling]);

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
