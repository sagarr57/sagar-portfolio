// Mirrors design tokens (see globals.css :root) for inline styles in components
// Palette: light — milky white / slate grey, clean & professional
export const colors = {
  background: {
    primary: '#ffffff',   // pure white — hero, experience
    secondary: '#dbeafe', // Blue 100 — about, contact
    tertiary: '#dcfce7',  // Green 100 — skills
    card: '#ffffff',       // white cards pop on tinted section backgrounds
    contact: '#dbeafe',   // Blue 100 — contact
    // Section-specific palettes
    education: '#f3e8ff', // Violet 100
    projects:  '#fef3c7', // Amber 100
    certs:     '#ccfbf1', // Teal 100
    whyHire:   '#ffe4e6', // Rose 100
  },

  text: {
    primary: '#0f172a',   // Slate 900 — strong, legible
    secondary: '#475569', // Slate 600 — comfortable body text
    muted: '#94a3b8',     // Slate 400 — labels, captions
    disabled: '#cbd5e1',  // Slate 300
  },

  accent: {
    primary: '#2563eb',   // Blue 600 — deeper for light bg
    secondary: '#3b82f6', // Blue 500
    light: '#60a5fa',     // Blue 400
    dark: '#1d4ed8',      // Blue 700
  },

  accentForeground: '#ffffff',
  keyword: '#2563eb',

  gradient: {
    primary: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    secondary: 'linear-gradient(135deg, rgba(37,99,235,0.10) 0%, rgba(29,78,216,0.05) 100%)',
    backgroundPrimary: 'linear-gradient(180deg, #f8fafc 0%, #f1f5f9 50%, #f8fafc 100%)',
    backgroundSecondary: 'linear-gradient(180deg, #f1f5f9 0%, #ffffff 100%)',
    backgroundTertiary: 'linear-gradient(180deg, #f1f5f9 0%, #f8fafc 100%)',
  },

  overlay: {
    blue: 'rgba(37, 99, 235, 0.07)',
    blueStrong: 'rgba(37, 99, 235, 0.12)',
    card: 'rgba(255, 255, 255, 0.98)',
    cardBorder: 'rgba(15, 23, 42, 0.08)',     // dark-on-light subtle border
    cardBorderHover: 'rgba(37, 99, 235, 0.28)',
  },

  status: {
    success: '#16a34a',
    error: '#dc2626',
    warning: '#d97706',
  },
} as const
