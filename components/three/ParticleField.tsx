"use client";
import { useMemo } from "react";
import * as THREE from "three";

export default function ParticleField({ count = 3000, color = "#6672f1" }: { count?: number; color?: string }) {
  const geom = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const r = 18;
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const rr = r * Math.cbrt(Math.random());
      positions[i * 3 + 0] = rr * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = rr * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = rr * Math.cos(phi);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [count]);

  return (
    <points geometry={geom}>
      <pointsMaterial size={0.05} color={color} transparent opacity={0.8} />
    </points>
  );
}
