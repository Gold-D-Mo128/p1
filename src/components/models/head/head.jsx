import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { ShaderMaterial, Color, Vector4 } from "three";
import { vertexShader } from "./vertex";
import { fragmentShader } from "./frag";
// Define the vertex and fragment shader code

export default function Head(props) {
  // Load the GLTF model
  const gltf = useRef();
  const { nodes, materials } = useLoader(GLTFLoader, "/assets/head/scene.gltf");
  const rotation = [-Math.PI / 2, 0, 0];
  const uniforms = {
    time: { value: 0 }, // Initialize time to zero, update it in your animation loop
    resolution: { value: new Vector4() }, // This will be automatically set by Three.js
  };

  useFrame((state, delta) => {
    uniforms.time.value += 0.03; // Update the time uniform based on the elapsed time
  });

  // Create a ShaderMaterial with the defined shaders
  const shaderMaterial = new ShaderMaterial({
    uniforms: uniforms,
    vertexShader,
    fragmentShader,
  });

  // Assign the shaderMaterial to the model
  nodes.Object_2.material = shaderMaterial;

  return (
    <group
      {...props}
      rotation={rotation}
      position={[0, 0, -75]}
      scale={[1, 1, 1]}
    >
      <mesh geometry={nodes.Object_2.geometry} material={shaderMaterial} />
    </group>
  );
}
