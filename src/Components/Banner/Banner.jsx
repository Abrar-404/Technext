// const Banner = () => {
//   return (
//     <div>
//       <CutoutTextLoader
//         height="450px"
//         background="#2B3440"
//         imgUrl="https://i.ibb.co/4dzVsxL/giphy.gif"
//         // imgUrl="https://i.ibb.co/b5sHtk5/offcie.webp"
//       />
//     </div>
//   );
// };

// const CutoutTextLoader = ({ height, background, imgUrl }) => {
//   return (
//     <div className="relative" style={{ height }}>
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${imgUrl})`,
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//         }}
//       />
//       <div
//         style={{ background }}
//         className="absolute inset-0 animate-pulse z-10"
//       />
//       <span
//         className="font-black absolute inset-0 z-20 text-center bg-clip-text text-transparent pointer-events-none"
//         style={{
//           backgroundImage: `url(${imgUrl})`,
//           backgroundPosition: 'center',
//           backgroundSize: 'cover',
//           fontSize: 'clamp(3rem, 12vw, 10rem)',
//           lineHeight: height,
//         }}
//       >
//         USIFY
//       </span>
//     </div>
//   );
// };

// export default Banner;

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { pointsInner, pointsOuter } from './utils';

const Banner = () => {
  return (
    <div className="relative">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: '100vh' }}
        className="bg-slate-900"
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>

      <h1 className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-slate-200 font-medium text-7xl md:text-5xl pointer-events-none">
        U S I F Y <br />{' '}
        <span className="text-sm text-center flex justify-center">
          M a n a g e ---  E f f i c i e n t l y
        </span>
      </h1>
    </div>
  );
};

const PointCircle = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={ref}>
      {pointsInner.map(point => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map(point => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  );
};

const Point = ({ position, color }) => {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  );
};

export default Banner;
