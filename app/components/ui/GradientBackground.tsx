'use client'

import { ReactNode } from 'react'
import { colors } from '../../utils/colors'

interface GradientBackgroundProps {
  children?: ReactNode
  variant?: 'primary' | 'secondary' | 'tertiary' | 'contact'
  overlayPosition?: {
    cyan?: { x: string; y: string }
    purple?: { x: string; y: string }
  }
  className?: string
}

export default function GradientBackground({
  children,
  variant = 'tertiary',
  className = '',
}: GradientBackgroundProps) {
  const flatBackground =
    variant === 'primary'
      ? colors.background.primary
      : variant === 'secondary'
        ? colors.background.secondary
        : variant === 'contact'
          ? colors.background.contact
          : colors.background.tertiary

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: flatBackground,
        zIndex: 0,
      }}
    >
      {children}
    </div>
  )
}
