'use client'

import { ReactNode } from 'react'
import GradientBackground from './GradientBackground'

interface SectionWithGradientProps {
  id: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'contact'
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
        padding: 'clamp(2.25rem, 6vw, 4rem) clamp(1rem, 5vw, 2rem)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        borderTop: variant === 'contact' ? '1px solid rgba(15, 23, 42, 0.08)' : undefined,
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

