"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// Cube component with wireframe material
function WireframeCube({ position, rotation, scale = 1 }) {
  const meshRef = useRef();
  const [randomRotation] = useState(() => [
    Math.random() * 0.01 - 0.005,
    Math.random() * 0.01 - 0.005,
    Math.random() * 0.01 - 0.005,
  ]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += randomRotation[0];
      meshRef.current.rotation.y += randomRotation[1];
      meshRef.current.rotation.z += randomRotation[2];
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial
        color="#ffffff"
        wireframe={true}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

// Pyramid component with wireframe material
function WireframePyramid({ position, rotation, scale = 1 }) {
  const meshRef = useRef(null);
  const [randomRotation] = useState(() => [
    Math.random() * 0.01 - 0.005,
    Math.random() * 0.01 - 0.005,
    Math.random() * 0.01 - 0.005,
  ]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += randomRotation[0];
      meshRef.current.rotation.y += randomRotation[1];
      meshRef.current.rotation.z += randomRotation[2];
    }
  });

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <tetrahedronGeometry args={[1, 0]} />
      <meshBasicMaterial
        color="#ffffff"
        wireframe={true}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
}

// Scene component with all the shapes
function Scene() {
  // Generate positions for small cubes
  const smallCubes = [];
  for (let i = 0; i < 20; i++) {
    smallCubes.push({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5,
      ],
      rotation: [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ],
      scale: 0.2 + Math.random() * 0.4,
    });
  }

  return (
    <>
      {/* Main pyramid in the center */}
      <WireframePyramid
        position={[0, 0, 0]}
        rotation={[0.5, 0.3, 0]}
        scale={2}
      />

      {/* Larger cubes */}
      <WireframeCube
        position={[-2, -1, 0.5]}
        rotation={[0.5, 0.5, 0.5]}
        scale={1.2}
      />
      <WireframeCube
        position={[1, -2, 0]}
        rotation={[0.2, 0.3, 0.1]}
        scale={1.5}
      />

      {/* Small cubes scattered around */}
      {smallCubes.map((cube, index) => (
        <WireframeCube
          key={index}
          position={cube.position}
          rotation={cube.rotation}
          scale={cube.scale}
        />
      ))}
    </>
  );
}

export default function Background3D() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
