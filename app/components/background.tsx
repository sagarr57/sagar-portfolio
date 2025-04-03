'use client'

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

interface StarsProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
}

const Stars = (props: StarsProps) => {
  const ref = useRef<Points>(null);
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 2.5 }));

  useFrame((state, delta) => {
    if (ref.current) {
      const z = ref.current.position.z;
      if (z > (2.0 + 0.1)) {
        ref.current.position.z = -1.0;
      }
      ref.current.position.z += delta / 4;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#ffffff'
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

export default function Background() {
  return (
    <div className='fixed w-full h-full top-0 left-0 z-[-1] pointer-events-none'>
      <Canvas 
        camera={{ 
          position: [0, 0, 3], 
          fov: 90,
          near: 0.1,
          far: 10
        }}
        style={{ 
          width: '100vw', 
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1
        }}
      >
        <Stars />
        <Preload all />
      </Canvas>
    </div>
  );
}
