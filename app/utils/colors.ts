// Color Tokens - Milk White & Light Blue Theme (cassie.codes inspired)
export const colors = {
  // Background Colors - Milk white & soft variations
  background: {
    primary: '#FFFDF7',
    secondary: '#FAFAF8',
    tertiary: '#F5F7FA',
    card: '#FFFFFF',
  },

  // Text Colors - Dark for contrast on light
  text: {
    primary: '#1a1a2e',
    secondary: '#2d3748',
    muted: '#64748b',
    disabled: '#94a3b8',
  },

  // Accent Colors - Light blue theme
  accent: {
    primary: '#42A5F5',
    secondary: '#64B5F6',
    light: '#B3E5FC',
    dark: '#2196F3',
  },

  // Gradient Colors - Soft blue gradients
  gradient: {
    primary: 'linear-gradient(135deg, #42A5F5 0%, #64B5F6 100%)',
    secondary: 'linear-gradient(135deg, #B3E5FC 0%, #E3F2FD 100%)',
    backgroundPrimary: 'linear-gradient(180deg, #FFFDF7 0%, #FAFAF8 50%, #F5F7FA 100%)',
    backgroundSecondary: 'linear-gradient(180deg, #F5F7FA 0%, #E8F4FC 100%)',
    backgroundTertiary: 'linear-gradient(180deg, #F8F9FC 0%, #E3F2FD 30%, #F8F9FC 100%)',
  },

  // Overlay Colors - Light blue tints
  overlay: {
    blue: 'rgba(66, 165, 245, 0.08)',
    blueStrong: 'rgba(66, 165, 245, 0.15)',
    card: 'rgba(255, 255, 255, 0.9)',
    cardBorder: 'rgba(66, 165, 245, 0.2)',
    cardBorderHover: 'rgba(66, 165, 245, 0.35)',
  },

  // Status Colors
  status: {
    success: '#22C55E',
    error: '#EF4444',
    warning: '#F59E0B',
  },
} as const
