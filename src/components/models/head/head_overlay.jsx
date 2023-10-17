import { OrbitControls } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { MeshPhysicalMaterial } from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
// Define the vertex and fragment shader code

export default function Glassy_OverLay(props) {
  // Load the GLTF model
  const main = useRef();
  const { nodes } = useLoader(GLTFLoader, "/assets/head/scene.gltf");
  const rotation = [-Math.PI / 2, 0, 0];

  // Create a ShaderMaterial with the defined shaders
  const physicalMaterial = new MeshPhysicalMaterial({
    roughness: 0.4,
    transmission: 1,
    thickness: 2,
    envMapIntensity: 3,
    // color: "#000000",
  });

  // Assign the shaderMaterial to the model
  nodes.Object_2.material = physicalMaterial;

  return (
    <group
      {...props}
      rotation={rotation}
      position={[0, 0, -75]}
      scale={(1.1, 1.1, 1.1)}
    >
      <mesh geometry={nodes.Object_2.geometry} material={physicalMaterial} />
    </group>
  );
}
