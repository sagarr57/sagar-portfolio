'use client'

import { ReactNode } from 'react'
import SectionWithGradient from './SectionWithGradient'
import { colors } from '../../utils/colors'

interface SectionContainerProps {
  id: string
  children: ReactNode
  backgroundColor?: string
  className?: string
}

export default function SectionContainer({
  id,
  children,
  backgroundColor = colors.background.tertiary,
  className = '',
}: SectionContainerProps) {
  const getVariant = (): 'primary' | 'secondary' | 'tertiary' => {
    if (backgroundColor === colors.background.primary) return 'primary'
    if (backgroundColor === colors.background.secondary) return 'secondary'
    return 'tertiary'
  }

  return (
    <SectionWithGradient
      id={id}
      variant={getVariant()}
      className={className}
      overlayPosition={{
        cyan: { x: '15%', y: '30%' },
        purple: { x: '85%', y: '70%' },
      }}
    >
      {children}
    </SectionWithGradient>
  )
}
