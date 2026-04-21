// Typography system matching n8n.io exactly
// Based on n8n.io's typography scale

export const typography = {
  // Font sizes (matching n8n.io)
  sizes: {
    hero: {
      desktop: '3.5rem', // 56px
      tablet: '2.5rem', // 40px
      mobile: '2rem', // 32px
      clamp: 'clamp(2rem, 7vw, 3.5rem)',
    },
    h1: {
      desktop: '3.5rem', // 56px
      tablet: '2.5rem', // 40px
      mobile: '2rem', // 32px
      clamp: 'clamp(2rem, 7vw, 3.5rem)',
    },
    h2: {
      desktop: '2.5rem', // 40px
      tablet: '2rem', // 32px
      mobile: '1.5rem', // 24px
      clamp: 'clamp(1.5rem, 5vw, 2.5rem)',
    },
    h3: {
      desktop: '2rem', // 32px
      tablet: '1.5rem', // 24px
      mobile: '1.25rem', // 20px
      clamp: 'clamp(1.25rem, 4vw, 2rem)',
    },
    h4: {
      desktop: '1.25rem', // 20px
      tablet: '1.125rem', // 18px
      mobile: '1rem', // 16px
      clamp: 'clamp(1rem, 2.5vw, 1.25rem)',
    },
    body: {
      desktop: '1rem', // 16px
      tablet: '0.9375rem', // 15px
      mobile: '0.9375rem', // 15px
      clamp: 'clamp(0.9375rem, 2vw, 1rem)',
    },
    small: {
      desktop: '0.875rem', // 14px
      tablet: '0.8125rem', // 13px
      mobile: '0.8125rem', // 13px
      clamp: 'clamp(0.8125rem, 1.8vw, 0.875rem)',
    },
    meta: {
      desktop: '0.875rem', // 14px
      tablet: '0.8125rem', // 13px
      mobile: '0.75rem', // 12px
      clamp: 'clamp(0.75rem, 1.5vw, 0.875rem)',
    },
  },
  // Font weights (matching n8n.io)
  weights: {
    regular: 400,
    medium: 500,
    semibold: 500,
    bold: 500,
  },
  // Line heights (matching n8n.io)
  lineHeights: {
    tight: 1.1,
    normal: 1.2,
    relaxed: 1.25,
    body: 1.65,
    list: 1.6,
  },
  // Letter spacing (matching n8n.io)
  letterSpacing: {
    tight: '-0.015em',
    normal: '-0.01em',
    wide: '0.01em',
    wider: '0.02em',
  },
  // Colors (matching n8n.io)
  colors: {
    primary: '#f9fafb',
    secondary: 'rgba(255, 255, 255, 0.72)',
    muted: 'rgba(255, 255, 255, 0.5)',
    disabled: 'rgba(255, 255, 255, 0.35)',
  },
}

// Typography utility functions
export const getTypographyStyle = (variant: keyof typeof typography.sizes) => {
  return {
    fontSize: typography.sizes[variant].clamp,
    fontFamily:
      variant === 'hero' || variant.startsWith('h')
        ? 'var(--font-display), "Outfit", system-ui, sans-serif'
        : 'var(--font-sans), "DM Sans", system-ui, sans-serif',
    fontWeight: variant === 'hero' || variant.startsWith('h') ? typography.weights.semibold : typography.weights.regular,
    lineHeight: variant === 'hero' || variant === 'h1' ? typography.lineHeights.tight : variant.startsWith('h') ? typography.lineHeights.normal : typography.lineHeights.body,
    letterSpacing: variant.startsWith('h') ? typography.letterSpacing.tight : 'normal',
    color: variant.startsWith('h') ? typography.colors.primary : typography.colors.secondary,
  }
}

