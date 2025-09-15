// src/pages/HeroSection.jsx
import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";
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

  // Set halo ring to pink and increase glow
  useEffect(() => {
    if (!scene) return;
    scene.traverse((obj) => {
      if (!obj || !obj.isMesh) return;
      const name = (obj.name || "").toLowerCase();
      if (
        name.includes("nimbus") ||
        name.includes("halo") ||
        name.includes("ring")
      ) {
        const mat = obj.material;
        if (mat) {
          const haloColor = "#ff4ecb"; // vibrant pink
          if (mat.color) mat.color.set(haloColor);
          if (mat.emissive) mat.emissive.set(haloColor);
          if (typeof mat.emissiveIntensity === "number")
            mat.emissiveIntensity = 4.0;
          // Additive blend for stronger effect
          mat.transparent = true;
          mat.blending = THREE.AdditiveBlending;
          mat.depthWrite = false;
          mat.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  // Add an additive overlay to make halo rings self-glow (safe)
  useEffect(() => {
    if (!scene) return;
    const overlays = [];
    const targets = [];
    scene.traverse((obj) => {
      if (!obj || !obj.isMesh) return;
      if (obj.userData && obj.userData.isHaloOverlay) return; // skip overlays
      const name = (obj.name || "").toLowerCase();
      if (
        name.includes("nimbus") ||
        name.includes("halo") ||
        name.includes("ring")
      ) {
        const already = (obj.children || []).some(
          (c) => c.userData && c.userData.isHaloOverlay
        );
        if (!already) targets.push(obj);
      }
    });
    targets.forEach((obj) => {
      const overlayMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#ff4ecb"),
        transparent: true,
        opacity: 0.5,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const overlay = new THREE.Mesh(obj.geometry, overlayMat);
      overlay.userData = { ...(overlay.userData || {}), isHaloOverlay: true };
      overlay.name = `${obj.name || "halo"}__overlay`;
      overlay.scale.copy(obj.scale).multiplyScalar(1.03);
      overlay.position.set(0, 0, 0);
      overlay.quaternion.identity();
      overlay.renderOrder = 1000;
      obj.add(overlay);
      overlays.push(overlay);
    });
    return () => {
      overlays.forEach((o) => o.parent && o.parent.remove(o));
    };
  }, [scene]);

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
          gl={{ toneMappingExposure: 1.1 }}
          style={{ touchAction: "none" }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.7} color="#ff4ecb" />
            <pointLight
              position={[0.2, 1.1, 1]}
              intensity={4}
              color="#ff4ecb"
              distance={12}
            />
            <pointLight
              position={[-0.6, 1.0, -1]}
              intensity={2}
              color="#ff4ecb"
              distance={10}
            />
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
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
