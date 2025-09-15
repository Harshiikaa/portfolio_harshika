// src/pages/HeroSection.jsx
import { OrbitControls, Text, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import AnimatedCamera from "../components/animatedCamera";
import useSmoothScroll from "../hooks/useSmoothScroll";
import HeroText from "../components/HeroText";

function Sculpture() {
  const { scene } = useGLTF("/models/rhetorician.glb");
  return (
    <primitive
      object={scene}
      scale={0.2}
      //   position={[-0.6, -0.6, 0]} // ideal if we use fov 25
      position={[-0.4, -0.85, 0]}
      rotation={[-Math.PI / 8, Math.PI / 2, 0]} // rotates the model to face front
    />
  );
}

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
        >
          {/* <axesHelper args={[2]} /> */}

          <Suspense fallback={null}>
            <AnimatedCamera />
            <ambientLight intensity={0.5} />
            <spotLight
              position={[0, 5, 5]}
              angle={0.3}
              penumbra={1}
              intensity={1.5}
              castShadow
            />
            {/* <Environment preset="sunset" /> */}
            <OrbitControls
              enableZoom={true}
              //   autoRotate
              //   autoRotateSpeed={1.0}
              //   autoRotateSpeed={-3.0} // for a bit higher speed
            />
            <Sculpture />
            {/* <HaloRing /> */}
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
