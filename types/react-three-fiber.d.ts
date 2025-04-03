import { Points as ThreePoints, Object3DNode } from 'three';

declare module '@react-three/fiber' {
  export interface Points extends ThreePoints {
    position: {
      x: number;
      y: number;
      z: number;
    };
    rotation: {
      x: number;
      y: number;
      z: number;
    };
    scale: {
      x: number;
      y: number;
      z: number;
    };
    matrix: number[];
    quaternion: number[];
    up: number[];
    eulerOrder: string;
    renderOrder: number;
    frustumCulled: boolean;
    castShadow: boolean;
    receiveShadow: boolean;
    visible: boolean;
  }
}

declare module '@react-three/drei' {
  export type Points = ThreePoints;
  export type PointsBuffersProps = {
    positions: Float32Array;
    stride: number;
    frustumCulled: boolean;
  };
  export type PointsNode = Object3DNode<Points, typeof Points>;
}
