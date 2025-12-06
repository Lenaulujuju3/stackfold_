"use client";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AtmosphericGlow({ color = "#6672f1" }: { color?: string }) {
  const ref = useRef<THREE.Points>(null!);
  const materialRef = useRef<THREE.PointsMaterial>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.02; // very slow
    }
    if (materialRef.current) {
      materialRef.current.opacity = 0.24 + Math.sin(t * 0.25) * 0.04;
    }
  });

  // Create a large, faint particle shell
  const geometry = React.useMemo(() => {
    const count = 1200;
    const positions = new Float32Array(count * 3);
    const r = 40;
    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.cos(phi);
      const z = r * Math.sin(phi) * Math.sin(theta);
      positions.set([x, y, z], i * 3);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, []);

  return (
    <points ref={ref} geometry={geometry} renderOrder={-1}>
      <pointsMaterial ref={materialRef} color={color} size={0.12} transparent opacity={0.28} depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}
