'use client'

import { ReactNode } from 'react'
import { colors } from '../../utils/colors'

interface GradientBackgroundProps {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary'
  overlayPosition?: {
    cyan?: { x: string; y: string }
    purple?: { x: string; y: string }
  }
  className?: string
}

export default function GradientBackground({
  children,
  variant = 'tertiary',
  overlayPosition = {
    cyan: { x: '15%', y: '30%' },
    purple: { x: '85%', y: '70%' },
  },
  className = '',
}: GradientBackgroundProps) {
  const getGradient = () => {
    switch (variant) {
      case 'primary':
        return colors.gradient.backgroundPrimary
      case 'secondary':
        return colors.gradient.backgroundSecondary
      case 'tertiary':
        return colors.gradient.backgroundTertiary
      default:
        return colors.gradient.backgroundTertiary
    }
  }

  return (
    <>
      <div
        className={className}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: getGradient(),
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${overlayPosition.cyan?.x || '15%'} ${overlayPosition.cyan?.y || '30%'}, ${colors.overlay.blue} 0%, transparent 50%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at ${overlayPosition.purple?.x || '85%'} ${overlayPosition.purple?.y || '70%'}, ${colors.overlay.blue} 0%, transparent 50%)`,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
    </>
  )
}
