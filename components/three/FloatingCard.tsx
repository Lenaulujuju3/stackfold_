"use client";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export interface FloatingCardProps {
  geometryArgs?: [number, number, number];
  position?: [number, number, number];
  color?: string;
  clearcoat?: number;
  transmission?: number;
}

export default function FloatingCard({
  geometryArgs = [2, 2, 0.2],
  position = [0, 0, 0],
  color = "#1f2937",
  clearcoat = 1,
  transmission = 0.9,
}: FloatingCardProps) {
  const ref = useRef<THREE.Mesh>(null!);

  const geom = useMemo(() => new THREE.BoxGeometry(...geometryArgs), [geometryArgs]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // subtle hover and slow rotation
    if (ref.current) {
      ref.current.rotation.x = Math.sin(t * 0.25) * 0.05;
      ref.current.rotation.y = Math.sin(t * 0.2) * 0.08;
      ref.current.position.y = position[1] + Math.sin(t * 0.8) * 0.1;
    }
  });

  return (
    <mesh ref={ref} position={position} geometry={geom} castShadow receiveShadow>
      <meshPhysicalMaterial
        color={color}
        roughness={0.2}
        metalness={0.6}
        clearcoat={clearcoat}
        clearcoatRoughness={0.05}
        transmission={transmission}
        thickness={0.35}
        ior={1.2}
        transparent
        envMapIntensity={1.2}
      />
    </mesh>
  );
}
