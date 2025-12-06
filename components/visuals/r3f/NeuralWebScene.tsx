"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import ParticleField from "../../three/ParticleField";
import AtmosphericGlow from "../../three/AtmosphericGlow";

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null!);
  const [nodes, setNodes] = useState<
    { id: number; position: [number, number, number]; color: string; connections: number[] }[]
  >([]);
  const [hovered, setHovered] = useState<number | null>(null);

  const sphereGeometries = useMemo(() => {
    const geometries = new Map<number, THREE.SphereGeometry>();
    return {
      get: (id: number, isHovered: boolean) => {
        if (!geometries.has(id)) {
          geometries.set(id, new THREE.SphereGeometry(isHovered ? 0.6 : 0.4, 16, 16));
        }
        return geometries.get(id)!;
      },
    };
  }, []);

  useEffect(() => {
    // Create network nodes
    const count = 24;
    const newNodes: { id: number; position: [number, number, number]; color: string; connections: number[] }[] = Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 12 + Math.random() * 8;
      return {
        id: i,
        position: [Math.cos(angle) * radius, (Math.random() - 0.5) * 16, Math.sin(angle) * radius] as [number, number, number],
        color: ["#6672f1", "#38bdf8", "#818cf8"][Math.floor(Math.random() * 3)],
        connections: [] as number[],
      };
    });

    // Create random connections
    newNodes.forEach((node, i) => {
      const connectionCount = 2 + Math.floor(Math.random() * 3);
      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * newNodes.length);
        if (targetIndex !== i && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex);
        }
      }
    });

    setNodes(newNodes);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  const lines = useMemo(() => {
    const allLines: { start: [number, number, number]; end: [number, number, number]; color: string }[] = [];
    nodes.forEach((node) => {
      node.connections.forEach((targetId) => {
        const target = nodes[targetId];
        if (target) {
          allLines.push({
            start: node.position,
            end: target.position,
            color: node.color,
          });
        }
      });
    });
    return allLines;
  }, [nodes]);

  return (
    <group ref={groupRef}>
      <ParticleField count={2000} color="#6672f1" />
      <AtmosphericGlow color="#38bdf8" />

      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry
            attach="geometry"
            ref={(geo) => {
              if (geo) {
                const positions = new Float32Array([...line.start, ...line.end]);
                geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
              }
            }}
          />
          <lineBasicMaterial attach="material" color={line.color} opacity={0.6} transparent linewidth={1} />
        </line>
      ))}

      {nodes.map((node) => (
        <mesh
          key={node.id}
          position={node.position}
          geometry={sphereGeometries.get(node.id, hovered === node.id)}
          onPointerOver={() => setHovered(node.id)}
          onPointerOut={() => setHovered(null)}
        >
          <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.2} />
        </mesh>
      ))}
    </group>
  );
}

export default function NeuralWebScene() {
  const [dpr, setDpr] = useState<[number, number]>([1, 2]);
  const fog = useMemo(() => new THREE.Fog("#020617", 60, 140), []);

  useEffect(() => {
    const updateDpr = () => {
      const dprValue = typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1;
      setDpr([dprValue, dprValue]);
    };

    updateDpr();
    window.addEventListener("resize", updateDpr);
    return () => window.removeEventListener("resize", updateDpr);
  }, []);

  return (
    <div className="mx-auto aspect-square w-full max-w-[540px] overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur">
      <Canvas dpr={dpr} camera={{ fov: 60, position: [0, 0, 70] }}>
        <primitive object={fog} attach="fog" />
        <ambientLight intensity={0.35} />
        <directionalLight position={[10, 15, 20]} intensity={0.6} />
        <directionalLight position={[-12, -10, -18]} intensity={0.3} color={"#38bdf8"} />
        <pointLight position={[0, 10, 0]} intensity={0.4} color={"#6672f1"} />
        <NeuralNetwork />
      </Canvas>
    </div>
  );
}
