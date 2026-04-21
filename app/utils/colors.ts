// Color Tokens - Clean modern light theme
export const colors = {
  // Background Colors - Neutral light with cool tint
  background: {
    primary: '#F8FAFC',
    secondary: '#F2F6FB',
    tertiary: '#EEF3FA',
    card: '#FFFFFF',
  },

  // Text Colors - Dark for contrast on light
  text: {
    primary: '#0F172A',
    secondary: '#334155',
    muted: '#64748b',
    disabled: '#94a3b8',
  },

  // Accent Colors - Professional blue scale
  accent: {
    primary: '#3B82F6',
    secondary: '#60A5FA',
    light: '#BFDBFE',
    dark: '#2563EB',
  },

  // Gradient Colors
  gradient: {
    primary: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
    secondary: 'linear-gradient(135deg, #DBEAFE 0%, #EFF6FF 100%)',
    backgroundPrimary: 'linear-gradient(180deg, #F8FAFC 0%, #F2F6FB 50%, #EEF3FA 100%)',
    backgroundSecondary: 'linear-gradient(180deg, #EEF3FA 0%, #E6F0FB 100%)',
    backgroundTertiary: 'linear-gradient(180deg, #F3F7FC 0%, #EAF2FC 30%, #F3F7FC 100%)',
  },

  // Overlay Colors
  overlay: {
    blue: 'rgba(59, 130, 246, 0.08)',
    blueStrong: 'rgba(59, 130, 246, 0.14)',
    card: 'rgba(255, 255, 255, 0.88)',
    cardBorder: 'rgba(148, 163, 184, 0.28)',
    cardBorderHover: 'rgba(59, 130, 246, 0.32)',
  },

  // Status Colors
  status: {
    success: '#22C55E',
    error: '#EF4444',
    warning: '#F59E0B',
  },
} as const
