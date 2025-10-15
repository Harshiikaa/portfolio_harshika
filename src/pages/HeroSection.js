// src/pages/HeroSection.jsx
import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";
import useSmoothScroll from "../hooks/useSmoothScroll";
import MuseumHeroText from "../components/MuseumHeroText";

function Sculpture() {
  const groupRef = useRef();
  const { scene, animations } = useGLTF("/models/rhetorician.glb");
  const { actions } = useAnimations(animations, groupRef);
  const animationSpeed = 2.0; // speed multiplier
  const baseRotation = useRef(0);

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

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    baseRotation.current += delta * 0.15; // slow auto-rotate
    groupRef.current.rotation.y = baseRotation.current;
  });

  return (
    <group
      ref={groupRef}
      scale={0.2}
      position={[-0.4, -0.85, 0]}
      rotation={[0, Math.PI / 2, 0]}
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

  useEffect(() => {
    // parallax depth based on scroll
    const onScroll = () => {
      if (!canvasGroup.current) return;
      const t = window.scrollY / window.innerHeight; // 0..1 across viewport
      const depth = THREE.MathUtils.lerp(0, -0.25, Math.min(t, 1));
      canvasGroup.current.position.z = depth;
      canvasGroup.current.position.y = THREE.MathUtils.lerp(
        0,
        -0.15,
        Math.min(t, 1)
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      {/* === HERO SECTION === */}
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden bg-black"
      >
        <Canvas
          camera={{ position: [2.2, 1.2, 0.9], fov: 18 }}
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
              <Sculpture />
              <OrbitControls
                enableDamping
                dampingFactor={0.08}
                enableZoom={false}
                enableRotate={false}
              />
            </group>
          </Suspense>
        </Canvas>

        {/* === OVERLAY TEXT === */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="px-8 md:px-16">
            <MuseumHeroText />
          </div>
        </div>
      </section>

      {/* === PROJECTS PLACEHOLDER === */}
      <section
        ref={projectsRef}
        className="min-h-screen bg-neutral-950 text-white flex items-center justify-center"
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
