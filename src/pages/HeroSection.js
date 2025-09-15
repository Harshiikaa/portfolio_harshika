// src/pages/HeroSection.jsx
import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import useSmoothScroll from "../hooks/useSmoothScroll";
import HeroText from "../components/HeroText";

function Sculpture() {
  const groupRef = useRef();
  const { scene, animations } = useGLTF("/models/rhetorician.glb");
  const { actions } = useAnimations(animations, groupRef);
  const animationSpeed = 2.0; // speed multiplier

  useEffect(() => {
    if (!actions) return;
    Object.values(actions).forEach((action) => {
      if (!action) return;
      action.reset();
      action.setEffectiveTimeScale(animationSpeed);
      action.play();
    });
  }, [actions]);

  return (
    <group
      ref={groupRef}
      scale={0.2}
      position={[-0.4, -0.85, 0]}
      rotation={[-Math.PI / 8, Math.PI / 2, 0]}
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

  return (
    <div>
      {/* === HERO SECTION === */}
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden"
        style={{
          background: "radial-gradient(circle at center, #2a003f, #12001e)",
        }}
      >
        <Canvas
          camera={{ position: [2, 1.2, 0.5], fov: 15 }}
          gl={{ toneMappingExposure: 1.5 }}
          style={{ touchAction: "none" }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Sculpture />
            <OrbitControls enableDamping dampingFactor={0.08} />
          </Suspense>
        </Canvas>

        {/* === OVERLAY TEXT === */}
        <div className="absolute inset-0 flex flex-col items-end justify-end text-right z-10 pr-16 translate-x-10 md:translate-x-24 translate-y-[-40px] text-white">
          <HeroText />
        </div>
      </section>

      {/* === PROJECTS PLACEHOLDER === */}
      <section
        ref={projectsRef}
        className="min-h-screen bg-gray-950 text-white flex items-center justify-center"
      >
        <h2 className="text-4xl">Projects Section Placeholder</h2>
      </section>

      {/* === ART GALLERY PLACEHOLDER === */}
      <section
        ref={artRef}
        className="min-h-screen bg-black text-white flex items-center justify-center"
      >
        <h2 className="text-4xl">Art Gallery Section Placeholder</h2>
      </section>
    </div>
  );
}
