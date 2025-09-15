// src/components/AnimatedCamera.jsx
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function AnimatedCamera() {
  const { camera } = useThree();
  const start = new THREE.Vector3(5, 5, 10); // Start door se
  const end = new THREE.Vector3(0, 1, 2); // Final position
  const progress = useRef(0);
  const [done, setDone] = useState(false);

  useFrame((_, delta) => {
    if (done) return;

    progress.current += delta * 0.5; // speed
    const t = Math.min(progress.current, 1);

    camera.position.lerpVectors(start, end, t);
    camera.lookAt(0, 0, 0);

    if (t >= 1) setDone(true);
  });

  return null;
}
