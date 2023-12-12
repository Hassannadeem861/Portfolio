// import { React, Suspense } from "react";
// import { Canvas } from "react-three-fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import CanvasLoader from "../Loader";

// enter image description hereI am successfully install @react-three/drei, "@react-three/fiber and three .

import { React, Suspense, useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = () => {
  const Computers = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={Computers.scene} />
    </mesh>
  );
};

// const Computers = () => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");
//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <pointLight intensity={1} />
//       <primitive object={computer.scene} />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   return (
//     <Canvas
//       frameLoop="demand"
//       shadows
//       camera={{ position: [20, 3, 5], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Html>
//           <div>
//             <Computers />
//           </div>
//         </Html>
//       </Suspense>
//       <Preload all />
//     </Canvas>
//   );
// };

const ComputersCanvas = () => {
  return (
    <Canvas
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Html>
          <div>
            <Computers />
          </div>
        </Html>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
