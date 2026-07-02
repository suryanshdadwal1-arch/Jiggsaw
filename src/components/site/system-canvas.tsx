"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sphere } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function MovingSystem() {
  const group = useRef<Group>(null);
  const points = useMemo(
    () => [
      [0.2, -0.65, 0],
      [1.2, 0.78, 0.2],
      [2.25, -0.12, 0],
      [3.1, 0.88, -0.1],
      [4.05, -0.35, 0.1],
    ] as [number, number, number][],
    [],
  );

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.z = Math.sin(clock.elapsedTime * 0.25) * 0.035;
    group.current.rotation.y = Math.sin(clock.elapsedTime * 0.18) * 0.08;
  });

  return (
    <group ref={group} position={[1.1, 0.2, 0]} scale={1.05}>
      <Line points={points} color="#ffffff" lineWidth={4} transparent opacity={0.5} />
      {points.map((point, index) => (
        <Float key={index} speed={1.25 + index * 0.12} rotationIntensity={0.5} floatIntensity={0.55}>
          <Sphere position={point} args={[index === 2 ? 0.34 : 0.24, 32, 32]}>
            <meshStandardMaterial color={index % 2 ? "#ff6b00" : "#0b72f0"} roughness={0.38} metalness={0.15} />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export function SystemCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 6], fov: 48 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[3, 3, 5]} intensity={2} />
        <MovingSystem />
      </Canvas>
    </div>
  );
}
