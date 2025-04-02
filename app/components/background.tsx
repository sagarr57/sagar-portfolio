'use client'

import { styled, keyframes, css } from 'styled-components'

const starFall = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translate(0, -100vh);
    opacity: 0;
  }
`

const connectionPulse = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    opacity: 0;
  }
`

const particleFloat = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
`

const codeRain = keyframes`
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: translate(0, 100vh);
    opacity: 0;
  }
`

// Styled components
const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`

const Star = styled.div<{ $size: number; $speed: number; $trail?: boolean }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: white;
  border-radius: 50%;
  opacity: 0.5;
  animation: ${starFall} ${props => props.$speed}s linear infinite;

  ${props => props.$trail && css`
    &:after {
      content: '';
      position: absolute;
      width: 2px;
      height: 20px;
      background: linear-gradient(transparent, rgba(255, 255, 255, 0.1));
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: ${starFall} ${props.$speed}s linear infinite;
    }
  `}
`

const Connection = styled.div<{ $x1: number; $y1: number; $x2: number; $y2: number }>`
  position: absolute;
  width: ${props => Math.abs(props.$x2 - props.$x1)}%;
  height: ${props => Math.abs(props.$y2 - props.$y1)}%;
  transform: translate(${props => props.$x1}%, ${props => props.$y1}%);
  transform-origin: 0 0;
  rotate: ${props => Math.atan2(props.$y2 - props.$y1, props.$x2 - props.$x1) * (180 / Math.PI)}deg;
  background: linear-gradient(
    to right,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  animation: ${connectionPulse} 3s ease-in-out infinite;
`

const Particle = styled.div<{ $size: number; $speed: number; $type: 'neuron' | 'data' }>`
  position: absolute;
  width: ${props => props.$size}px;
  height: ${props => props.$size}px;
  background: ${props => props.$type === 'neuron' ? 'rgba(255, 0, 0, 0.5)' : 'rgba(0, 255, 0, 0.5)'};
  border-radius: 50%;
  animation: ${particleFloat} ${props => props.$speed}s ease-in-out infinite;
`

const CodeParticle = styled.div<{ $speed: number }>`
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 24px;
  color: ${props => props.$speed > 8 ? '#00ff00' : '#00ffff'};
  animation: ${codeRain} ${props => props.$speed}s linear infinite;
`

export default function Background() {
  // Create falling stars with trails
  const stars = Array.from({ length: 100 }, (_, i) => (
    <Star
      key={`star-${i}`}
      $size={Math.random() * 2 + 1}
      $speed={Math.random() * 10 + 5}
      $trail={i % 5 === 0}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  ));

  // Create neural network connections
  const connections = Array.from({ length: 30 }, (_, i) => (
    <Connection
      key={`connection-${i}`}
      $x1={Math.random() * 100}
      $y1={Math.random() * 100}
      $x2={Math.random() * 100}
      $y2={Math.random() * 100}
      style={{
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  ));

  // Create AI data flow particles with different types
  const particles = Array.from({ length: 50 }, (_, i) => (
    <Particle
      key={`particle-${i}`}
      $size={Math.random() * 3 + 2}
      $speed={Math.random() * 15 + 10}
      $type={i % 3 === 0 ? 'neuron' : 'data'}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    />
  ));

  // Create matrix-like code rain
  const codeParticles = Array.from({ length: 30 }, (_, i) => (
    <CodeParticle
      key={`code-${i}`}
      $speed={Math.random() * 10 + 5}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
    >
      {Math.random() > 0.5 ? '0' : '1'}
    </CodeParticle>
  ));

  return (
    <BackgroundContainer>
      {stars}
      {connections}
      {particles}
      {codeParticles}
    </BackgroundContainer>
  );
}
