import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

useGLTF.preload("/assets/watch-v1.glb");

export const BannerScene = ({ ...props }) => {
  const ref = useRef<THREE.Group>(null);
  const { nodes, materials } = useGLTF("/assets/watch-v1.glb");

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.z += 0.01;
    }
  });

  return (
    <group {...props} ref={ref} dispose={null}>
      <mesh
        //@ts-ignore
        geometry={nodes.Object005_glass_0.geometry}
        material={materials.glass}
      ></mesh>
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.Object006_watch_0.geometry}
        material={materials.watch}
      />
    </group>
  );
};
