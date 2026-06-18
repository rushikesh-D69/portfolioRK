"use client";

import { useRef, useMemo, useState, useEffect, type MutableRefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

export interface MouseRef {
  x: number;
  y: number;
}

const HUB: [number, number, number] = [0, 0, 0];

const NETWORK_NODES: [number, number, number][] = [
  [1.6, 0.4, 0.5],
  [-1.3, 0.7, -0.3],
  [0.8, -1.1, 0.6],
  [-0.6, -0.9, -0.7],
  [0, 1.5, -0.4],
  [1.2, -0.5, -1.0],
];

const NETWORK_EDGES: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [1, 4], [2, 5], [3, 5], [1, 5],
];

const ORBITS_FULL = [
  { radius: 1.1, speed: 0.22, tilt: 0.55, phase: 0,    count: 2 },
  { radius: 1.65, speed: 0.14, tilt: -0.35, phase: 1.2, count: 3 },
  { radius: 2.1, speed: 0.09, tilt: 0.2,  phase: 2.4,  count: 2 },
];

const ORBITS_LITE = [
  { radius: 1.2, speed: 0.18, tilt: 0.4, phase: 0, count: 2 },
  { radius: 1.8, speed: 0.12, tilt: -0.3, phase: 1.5, count: 2 },
];

const SCENE_LABELS = [
  { label: "Ground Station", sub: "Hub node", position: "top-[12%] left-[8%]" },
  { label: "Orbital Nodes", sub: "LEO constellation", position: "top-[18%] right-[6%]" },
  { label: "Signal Links", sub: "NTN topology", position: "bottom-[14%] left-[10%]" },
];

function GlowingNode({
  position,
  size = 0.06,
  color = "#3B82F6",
}: {
  position: [number, number, number];
  size?: number;
  color?: string;
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[size, 12, 12]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.75}
        roughness={0.35}
        metalness={0.1}
      />
    </mesh>
  );
}

function OrbitRing({
  radius,
  speed,
  tilt,
  phase,
  count,
}: {
  radius: number;
  speed: number;
  tilt: number;
  phase: number;
  count: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) groupRef.current.rotation.y += delta * speed;
  });

  const satellites = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const angle = phase + (i / count) * Math.PI * 2;
        return [Math.cos(angle) * radius, 0, Math.sin(angle) * radius] as [
          number,
          number,
          number,
        ];
      }),
    [count, phase, radius]
  );

  return (
    <group ref={groupRef} rotation={[tilt, 0, 0]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.003, 8, 64]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.07} />
      </mesh>
      {satellites.map((pos, i) => (
        <GlowingNode key={i} position={pos} size={0.04} color="#8B5CF6" />
      ))}
    </group>
  );
}

function NetworkGraph({
  mouseRef,
  lite,
}: {
  mouseRef: MutableRefObject<MouseRef>;
  lite: boolean;
}) {
  const rootRef = useRef<THREE.Group>(null);
  const orbits = lite ? ORBITS_LITE : ORBITS_FULL;
  const nodes = lite ? NETWORK_NODES.slice(0, 4) : NETWORK_NODES;

  useFrame((state) => {
    if (!rootRef.current) return;
    const { x, y } = mouseRef.current;
    const targetY = x * 0.28 + state.clock.elapsedTime * 0.03;
    const targetX = y * 0.14;
    rootRef.current.rotation.y = THREE.MathUtils.lerp(rootRef.current.rotation.y, targetY, 0.035);
    rootRef.current.rotation.x = THREE.MathUtils.lerp(rootRef.current.rotation.x, targetX, 0.035);
  });

  const hubEdges = nodes.map((node) => [HUB, node] as [typeof HUB, typeof node]);

  return (
    <group ref={rootRef}>
      <Float speed={0.9} rotationIntensity={0.05} floatIntensity={0.18}>
        <group>
          <GlowingNode position={HUB} size={lite ? 0.08 : 0.1} color="#3B82F6" />
          <mesh position={HUB}>
            <sphereGeometry args={[0.16, 12, 12]} />
            <meshBasicMaterial color="#3B82F6" transparent opacity={0.05} />
          </mesh>

          {nodes.map((pos, i) => (
            <GlowingNode key={i} position={pos} size={0.045} color="#ffffff" />
          ))}

          {hubEdges.map((pts, i) => (
            <Line key={`hub-${i}`} points={pts} color="#3B82F6" transparent opacity={0.16} lineWidth={0.5} />
          ))}

          {!lite &&
            NETWORK_EDGES.map((pts, i) => (
              <Line
                key={`edge-${i}`}
                points={[NETWORK_NODES[pts[0]], NETWORK_NODES[pts[1]]]}
                color="#ffffff"
                transparent
                opacity={0.06}
                lineWidth={0.5}
              />
            ))}

          {orbits.map((orbit, i) => (
            <OrbitRing key={i} {...orbit} />
          ))}
        </group>
      </Float>
    </group>
  );
}

function SceneContent({
  mouseRef,
  lite,
}: {
  mouseRef: MutableRefObject<MouseRef>;
  lite: boolean;
}) {
  return (
    <>
      <fog attach="fog" args={["#050505", 4.5, 13]} />
      <ambientLight intensity={0.12} />
      <pointLight position={[4, 3, 4]} intensity={0.55} color="#3B82F6" />
      <pointLight position={[-4, -2, 3]} intensity={0.3} color="#8B5CF6" />
      <NetworkGraph mouseRef={mouseRef} lite={lite} />
    </>
  );
}

export default function HeroScene() {
  const mouseRef = useRef<MouseRef>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [lite, setLite] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setLite(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const onPointerMove = (e: PointerEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
        y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
      };
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[min(280px,32dvh)] sm:h-[min(340px,36dvh)] lg:h-[min(420px,42dvh)] rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.04)_0%,rgba(5,5,5,0.6)_55%,#050505_100%)] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-20">
        {SCENE_LABELS.map(({ label, sub, position }) => (
          <div
            key={label}
            className={`absolute ${position} hidden sm:block`}
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/70">
              {label}
            </p>
            <p className="text-[0.6rem] text-text-3 mt-0.5">{sub}</p>
          </div>
        ))}
      </div>

      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        dpr={lite ? [1, 1] : [1, 1.5]}
        gl={{ alpha: true, antialias: !lite, powerPreference: "high-performance" }}
        style={{ background: "transparent", pointerEvents: "none", touchAction: "pan-y" }}
      >
        <SceneContent mouseRef={mouseRef} lite={lite} />
      </Canvas>
    </div>
  );
}
