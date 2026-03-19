'use client'

import { ReactNode } from 'react'
import GradientBackground from './GradientBackground'

interface SectionWithGradientProps {
  id: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  overlayPosition?: {
    cyan?: { x: string; y: string }
    purple?: { x: string; y: string }
  }
  className?: string
}

export default function SectionWithGradient({
  id,
  children,
  variant = 'tertiary',
  overlayPosition,
  className = '',
}: SectionWithGradientProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        padding: 'clamp(3rem, 8vw, 5rem) clamp(1rem, 5vw, 2rem)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <GradientBackground variant={variant} overlayPosition={overlayPosition} />
      <div style={{ 
        maxWidth: '1200px', 
        width: '100%', 
        margin: '0 auto', 
        position: 'relative', 
        zIndex: 1 
      }}>
        {children}
      </div>
    </section>
  )
}

