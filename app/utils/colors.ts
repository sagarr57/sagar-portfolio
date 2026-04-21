// Mirrors design tokens (see globals.css :root) for inline styles in components
export const colors = {
  background: {
    primary: '#0a0f1a',
    secondary: '#121b2e',
    tertiary: '#121b2e',
    card: '#121b2e',
    /** Contact / footer band */
    contact: 'rgba(0, 0, 0, 0.4)',
  },

  text: {
    primary: '#e8eef7',
    secondary: '#c8d4e8',
    muted: '#8b9dc4',
    disabled: '#64748b',
  },

  accent: {
    primary: '#3b82f6',
    secondary: '#60a5fa',
    light: '#93c5fd',
    dark: '#2563eb',
  },

  /** Text on solid accent buttons */
  accentForeground: '#f0f7ff',

  /** Highlighted keywords in prose */
  keyword: '#93c5fd',

  gradient: {
    primary: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
    secondary: 'linear-gradient(135deg, rgba(59, 130, 246, 0.22) 0%, rgba(37, 99, 235, 0.12) 100%)',
    backgroundPrimary: 'linear-gradient(180deg, #0a0f1a 0%, #121b2e 50%, #0a0f1a 100%)',
    backgroundSecondary: 'linear-gradient(180deg, #121b2e 0%, #1a2740 100%)',
    backgroundTertiary: 'linear-gradient(180deg, #121b2e 0%, #0a0f1a 100%)',
  },

  overlay: {
    blue: 'rgba(59, 130, 246, 0.14)',
    blueStrong: 'rgba(59, 130, 246, 0.22)',
    card: 'rgba(18, 27, 46, 0.92)',
    cardBorder: 'rgba(255, 255, 255, 0.12)',
    cardBorderHover: 'rgba(255, 255, 255, 0.18)',
  },

  status: {
    success: '#4ade80',
    error: '#f87171',
    warning: '#fbbf24',
  },
} as const
