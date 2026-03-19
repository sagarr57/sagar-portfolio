'use client'

import { ReactNode } from 'react'
import { typography } from '../../utils/typography'

interface TypographyProps {
  variant: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small' | 'meta'
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div'
}

const variantToTag: Record<string, 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span'> = {
  hero: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  body: 'p',
  small: 'p',
  meta: 'span',
}

export default function Typography({ 
  variant, 
  children, 
  className = '',
  style = {},
  as 
}: TypographyProps) {
  const Tag = as || variantToTag[variant] || 'p'
  const typographyStyle = {
    fontSize: typography.sizes[variant].clamp,
    fontFamily: 'var(--font-poppins), "Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
    fontWeight: variant === 'hero' || variant.startsWith('h') 
      ? typography.weights.semibold 
      : typography.weights.regular,
    lineHeight: variant === 'hero' || variant === 'h1' 
      ? typography.lineHeights.tight 
      : variant.startsWith('h') 
      ? typography.lineHeights.normal 
      : typography.lineHeights.body,
    letterSpacing: variant.startsWith('h') 
      ? typography.letterSpacing.tight 
      : variant === 'meta'
      ? typography.letterSpacing.wider
      : 'normal',
    color: variant.startsWith('h') 
      ? typography.colors.primary 
      : variant === 'meta'
      ? typography.colors.muted
      : typography.colors.secondary,
    ...style,
  }

  return (
    <Tag className={className} style={typographyStyle}>
      {children}
    </Tag>
  )
}

