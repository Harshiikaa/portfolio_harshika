import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpVec3(out, a, b, t) {
  out.set(lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t));
}

function KeyframedSculpture({ progressRef }) {
  const groupRef = useRef();
  const { scene } = useGLTF("/models/rhetorician.glb");

  const frames = useMemo(
    () => [
      { pos: [0.0, -0.85, 0.0], rot: [0.0, Math.PI * 0.55, 0.0], scale: 0.2 },
      { pos: [0.18, -0.9, -0.1], rot: [0.05, Math.PI * 0.75, 0.02], scale: 0.22 },
      { pos: [0.38, -0.92, -0.18], rot: [0.03, Math.PI * 0.95, -0.02], scale: 0.24 },
      { pos: [0.1, -0.96, -0.3], rot: [0.0, Math.PI * 1.15, 0.0], scale: 0.28 },
    ],
    []
  );

  useFrame(() => {
    if (!groupRef.current) return;
    const p = Math.min(Math.max(progressRef.current || 0, 0), 1);
    const segments = frames.length - 1;
    const f = p * segments;
    const i = Math.floor(f);
    const t = Math.min(1, Math.max(0, f - i));
    const a = frames[i];
    const b = frames[Math.min(i + 1, frames.length - 1)];

    // interpolate
    const targetPos = new THREE.Vector3();
    lerpVec3(targetPos, a.pos, b.pos, t);
    groupRef.current.position.lerp(targetPos, 0.15);

    groupRef.current.rotation.x = lerp(a.rot[0], b.rot[0], t);
    groupRef.current.rotation.y = lerp(a.rot[1], b.rot[1], t);
    groupRef.current.rotation.z = lerp(a.rot[2], b.rot[2], t);
    const s = lerp(a.scale, b.scale, t);
    groupRef.current.scale.setScalar(s);
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

export default function AboutMe3D() {
  const sectionRef = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(0, -rect.top), total);
      progressRef.current = total > 0 ? scrolled / total : 0;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[300vh] bg-black text-white">
      {/* sticky 3D viewport */}
      <div className="sticky top-0 h-screen w-full">
        <Canvas camera={{ position: [2.2, 1.2, 0.9], fov: 18 }} gl={{ toneMappingExposure: 1.05 }}>
          {/* lighting similar to hero */}
          <ambientLight intensity={0.25} />
          <directionalLight position={[3, 5, 4]} intensity={0.6} />
          <pointLight position={[0, 1.2, 2]} intensity={1.8} color="#b58bff" distance={10} />
          <Environment preset="warehouse" resolution={256} />
          {/* ring behind model */}
          <mesh position={[0.0, 0.35, -1.2]}>
            <ringGeometry args={[0.65, 0.9, 64]} />
            <meshBasicMaterial color="#9b87f5" transparent opacity={0.35} blending={THREE.AdditiveBlending} />
          </mesh>
          <KeyframedSculpture progressRef={progressRef} />
        </Canvas>
        {/* overlay heading */}
        <div className="absolute inset-0 pointer-events-none flex items-center">
          <div className="px-8 md:px-16">
            <h2 className="font-[PlayfairDisplay] text-[clamp(2rem,6vw,4rem)] tracking-tight text-white/90">About Me</h2>
            <p className="mt-4 max-w-xl text-white/70 font-[Inter]">
              I design and build immersive, performant experiences. Scroll to explore different
              perspectives of the piece and the story behind my work.
            </p>
          </div>
        </div>
      </div>
      {/* spacer content to drive scroll steps */}
      <div className="h-[200vh]" />
    </section>
  );
}


