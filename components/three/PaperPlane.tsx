"use client";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function PaperPlane({
  color = "#ffffff",
  transmission = 0.8,
  ior = 1.2,
  clearcoat = 1,
}: { color?: string; transmission?: number; ior?: number; clearcoat?: number }) {
  const group = useRef<THREE.Group>(null!);
  const geometry = useMemo(() => new THREE.PlaneGeometry(2, 2), []);
  const mat = useMemo(() => new THREE.MeshPhysicalMaterial({
    color,
    transparent: true,
    roughness: 0.1,
    metalness: 0.05,
    clearcoat,
    clearcoatRoughness: 0.05,
    transmission,
    thickness: 0.2,
    ior,
  }), [color, transmission, ior, clearcoat]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.position.y = Math.sin(t * 0.5) * 0.5;
      group.current.rotation.z = Math.sin(t * 0.3) * 0.1;
      group.current.rotation.x = Math.sin(t * 0.4) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <mesh geometry={geometry} material={mat} castShadow receiveShadow />
    </group>
  );
}
