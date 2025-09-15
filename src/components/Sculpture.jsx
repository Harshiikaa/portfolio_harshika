import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Sculpture() {
  const { nodes, materials } = useGLTF("/models/rhetorician.glb");

  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();

  // Animate the halos
  useFrame(() => {
    if (ring1Ref.current) ring1Ref.current.rotation.y += 0.01;
    if (ring2Ref.current) ring2Ref.current.rotation.y += 0.01;
    if (ring3Ref.current) ring3Ref.current.rotation.y += 0.01;
  });

  return (
    <group
      scale={0.2}
      position={[-0.4, -0.85, 0]}
      rotation={[-Math.PI / 8, Math.PI / 2, 0]}
    >
      {/* Main sculpture */}
      <mesh
        geometry={nodes["mentor roman retopo_0"].geometry}
        material={materials["Material.001"] || materials["default"]} // fallback
      />

      {/* Halo rings */}
      <mesh
        ref={ring1Ref}
        geometry={nodes["nimbus.001_0"].geometry}
        material={nodes["nimbus.001_0"].material}
      />
      <mesh
        ref={ring2Ref}
        geometry={nodes["nimbus.002_0"].geometry}
        material={nodes["nimbus.002_0"].material}
      />
      <mesh
        ref={ring3Ref}
        geometry={nodes["nimbus.003_0"].geometry}
        material={nodes["nimbus.003_0"].material}
      />
    </group>
  );
}
