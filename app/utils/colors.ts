// Color tokens — dark modern theme (automation / product-site style)
export const colors = {
  background: {
    primary: '#0B1120',
    secondary: '#0F172A',
    tertiary: '#111C2E',
    card: '#151F32',
  },

  text: {
    primary: '#F1F5F9',
    secondary: '#CBD5E1',
    muted: '#94A3B8',
    disabled: '#64748B',
  },

  accent: {
    primary: '#60A5FA',
    secondary: '#38BDF8',
    light: '#93C5FD',
    dark: '#3B82F6',
  },

  gradient: {
    primary: 'linear-gradient(135deg, #3B82F6 0%, #6366F1 55%, #38BDF8 100%)',
    secondary: 'linear-gradient(135deg, rgba(59, 130, 246, 0.35) 0%, rgba(99, 102, 241, 0.2) 100%)',
    backgroundPrimary: 'linear-gradient(180deg, #0B1120 0%, #0F172A 45%, #111C2E 100%)',
    backgroundSecondary: 'linear-gradient(180deg, #0F172A 0%, #111C2E 50%, #0B1120 100%)',
    backgroundTertiary: 'linear-gradient(180deg, #111C2E 0%, #0F172A 40%, #111C2E 100%)',
  },

  overlay: {
    blue: 'rgba(59, 130, 246, 0.14)',
    blueStrong: 'rgba(59, 130, 246, 0.22)',
    card: 'rgba(21, 31, 50, 0.94)',
    cardBorder: 'rgba(148, 163, 184, 0.18)',
    cardBorderHover: 'rgba(96, 165, 250, 0.38)',
  },

  status: {
    success: '#4ADE80',
    error: '#F87171',
    warning: '#FBBF24',
  },
} as const
