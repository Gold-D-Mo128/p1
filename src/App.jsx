import { useEffect, useRef, useState } from "react";
import Head from "./components/models/head/head";
import "./App.css";
import { Canvas, useThree } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Glassy_OverLay from "./components/models/head/head_overlay";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="three-head">
        <Canvas
          // style={{ border: "1px solid red" }}
          camera={{ position: [0, 0, 0], fov: 2 }}
        >
          {/* <OrbitControls enableZoom makeDefault /> */}

          {/* <ambientLight intensity={0.5} /> */}
          {/* <hemisphereLight
            color={"#ffffff"}
            position={[1, -10, 1]}
            intensity={1}
          />
          <directionalLight
            color={"#ffffff"}
            position={[0, 1, 0]}
            intensity={0.5}
          />
          <pointLight
            color={"#ffffff"}
            position={[-100, 10, 50]}
            intensity={0.8}
          /> */}
          {/* <OrbitControls enableZoom enablePan enableRotate /> */}
          <Suspense fallback={"loading.... "}>
            <Head />
            <Glassy_OverLay />
          </Suspense>
          {/* <PerspectiveCamera makeDefault fov={23} position={[0, 0, 0]} /> */}
        </Canvas>
      </div>
    </>
  );
}

export default App;
