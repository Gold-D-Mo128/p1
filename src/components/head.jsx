import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Head(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  // Return view, these are regular three.js elements expressed in JSX
  const gltf = useLoader(GLTFLoader, "../assets/head/scene.gltf");
  const loader = new GLTFLoader();

  loader.load("../assets/head/scene.gltf", (gltf) => {
    console.log("gtlf");
  });
  return (
    // <mesh
    //   {...props}
    //   ref={meshRef}
    //   scale={active ? 2 : 5}
    //   onClick={(event) => setActive(!active)}
    //   onPointerOver={(event) => setHover(true)}
    //   onPointerOut={(event) => setHover(false)}
    // >
    //   <boxGeometry args={[1, 1, 1]} />
    //   <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    // </mesh>
    // <primitive object={gltf.scene} />
    <></>
  );
}
