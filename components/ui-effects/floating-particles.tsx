"use client";

import { useRef, useEffect } from "react";
import { useThree, Canvas } from "@react-three/fiber";
import { PointMaterial, Points } from "@react-three/drei";
import { inSphere } from "maath/random";

function ParticleCloud({ count = 2000 }) {
  const points = useRef();
  const sphere = inSphere(new Float32Array(count * 3), { radius: 1.5 });

  useThree(({ camera }) => {
    camera.layers.enable(1);
  });

  useEffect(() => {
    if (points.current) {
      points.current.material.size = 0.015;
    }
  }, []);

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x += delta * 0.05;
      points.current.rotation.y += delta * 0.075;
    }
  });

  return (
    <Points
      ref={points}
      positions={sphere}
      stride={3}
      frustumCulled={false}
      layers={1}
    >
      <PointMaterial
        transparent
        color="#8a2be2"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        blending={2}
      />
    </Points>
  );
}

export default function FloatingParticles() {
  return (
    <div className="w-full h-screen fixed inset-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleCloud />
      </Canvas>
    </div>
  );
}

function useFrame(callback) {
  const { invalidate } = useThree();

  useEffect(() => {
    let animationId;
    const animate = () => {
      callback();
      invalidate();
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [callback, invalidate]);
}
