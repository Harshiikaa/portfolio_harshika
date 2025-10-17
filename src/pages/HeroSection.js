// src/pages/HeroSection.jsx
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import useSmoothScroll from "../hooks/useSmoothScroll";
import MuseumHeroText from "../components/MuseumHeroText";

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerpVec3(out, a, b, t) {
  out.set(lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t));
}

function Sculpture({ progressRef }) {
  const groupRef = useRef();
  const { scene, animations } = useGLTF("/models/rhetorician.glb");
  const { actions } = useAnimations(animations, groupRef);
  const animationSpeed = 2.0; // speed multiplier
  const targetPos = useRef(new THREE.Vector3());
  const frames = useMemo(
    () => [
      // Right side; visible clockwise rotation across frames
      {
        pos: [0.7, -0.74, -0.05],
        rot: [0, Math.PI / 2 - 1.15, 0],
        scale: 0.25,
      },
      {
        pos: [0.7, -0.74, -0.05],
        rot: [0, Math.PI / 2 - 1.15, 0],
        scale: 0.25,
      },
      {
        pos: [0.7, -0.74, -0.05],
        rot: [0, Math.PI / 2 - 1.15, 0],
        scale: 0.25,
      },
      {
        pos: [0.7, -0.74, -0.05],
        rot: [0, Math.PI / 2 - 1.15, 0],
        scale: 0.25,
      },
    ],
    []
  );

  useEffect(() => {
    if (!actions) return;
    Object.values(actions).forEach((action) => {
      if (!action) return;
      action.reset();
      action.setEffectiveTimeScale(animationSpeed);
      action.play();
    });
  }, [actions]);

  // Keep original materials
  useEffect(() => {}, [scene]);

  // No additive overlays
  useEffect(() => {}, [scene]);

  useFrame(() => {
    if (!groupRef.current) return;
    const p = Math.min(Math.max(progressRef.current || 0, 0), 1);
    const segments = frames.length - 1;
    const f = p * segments;
    const i = Math.floor(f);
    const t = Math.min(1, Math.max(0, f - i));
    const a = frames[i];
    const b = frames[Math.min(i + 1, frames.length - 1)];
    lerpVec3(targetPos.current, a.pos, b.pos, t);
    groupRef.current.position.lerp(targetPos.current, 0.15);
    groupRef.current.rotation.x = lerp(a.rot[0], b.rot[0], t);
    groupRef.current.rotation.y = lerp(a.rot[1], b.rot[1], t);
    groupRef.current.rotation.z = lerp(a.rot[2], b.rot[2], t);
    const s = lerp(a.scale, b.scale, t);
    groupRef.current.scale.setScalar(s);
  });

  return (
    <group
      ref={groupRef}
      scale={0.2}
      position={[-0.4, -0.65, 0.1]}
      rotation={[0, Math.PI / 2 - 1.15, 0]}
    >
      <primitive object={scene} />
    </group>
  );
}

// Halo and animations removed

// function HaloRing() {
//   return (
//     <Text
//       position={[0, 1.1, 0]}
//       rotation={[Math.PI / 2, 0, 0]}
//       fontSize={0.1}
//       color="#ff99ff"
//       maxWidth={2}
//       anchorX="center"
//       anchorY="middle"
//     >
//       01011010 01101111 01101110 01100101 🔁 01001110 01100101 01110101 01110010
//     </Text>
//   );
// }

export default function HeroSection() {
  const projectsRef = useRef(null);
  const artRef = useRef(null);
  const scroll = useSmoothScroll();
  const canvasGroup = useRef(null);
  const sectionRef = useRef(null);
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // section-scoped progress 0..1 across the whole hero area (spans hero -> about)
    const onScroll = () => {
      if (!sectionRef.current || !canvasGroup.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = Math.min(Math.max(0, -rect.top), total);
      const t = total > 0 ? scrolled / total : 0;
      progressRef.current = t;
      setProgress(t);
      // subtle depth parallax
      const depth = THREE.MathUtils.lerp(0, -0.25, t);
      canvasGroup.current.position.z = depth;
      canvasGroup.current.position.y = THREE.MathUtils.lerp(0, -0.15, t);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* === HERO + ABOUT-ME SCROLL SECTION (sticky Canvas) === */}
      <section
        ref={sectionRef}
        id="hero"
        className="relative h-screen w-full overflow-hidden bg-black"
      >
        <div className="sticky top-0 h-screen w-full">
          <Canvas
            camera={{ position: [2.2, 1.0, 1.55], fov: 20 }}
            gl={{ toneMappingExposure: 1.05 }}
            style={{ touchAction: "none" }}
          >
            <Suspense fallback={null}>
              {/* slight parallax group */}
              <group ref={canvasGroup}>
                {/* soft cinematic lighting */}
                <ambientLight intensity={0.25} />
                <directionalLight position={[3, 5, 4]} intensity={0.6} />
                <pointLight
                  position={[0, 1.2, 2]}
                  intensity={1.8}
                  color="#b58bff"
                  distance={10}
                />
                <Environment preset="warehouse" resolution={256} />
                {/* glowing circular ring behind the model */}
                <mesh position={[0, 0.35, -1.2]}>
                  <ringGeometry args={[0.65, 0.9, 64]} />
                  <meshBasicMaterial
                    color="#9b87f5"
                    transparent
                    opacity={0.35}
                    blending={THREE.AdditiveBlending}
                  />
                </mesh>
                <Sculpture progressRef={progressRef} />
                <OrbitControls
                  enableDamping
                  dampingFactor={0.08}
                  enableZoom={false}
                  enableRotate={false}
                />
              </group>
            </Suspense>
          </Canvas>

          {/* HERO overlay text (fades out by mid scroll) */}
          <div
            className="absolute inset-0 z-10 flex items-center"
            style={{ opacity: 1 - Math.min(1, progress * 2) }}
          >
            <div className="px-8 md:px-16">
              <MuseumHeroText />
            </div>
          </div>
        </div>
      </section>

      {/* Removed placeholders */}
    </div>
  );
}
