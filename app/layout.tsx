'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'styled-components'
import StyledComponentsWrapper from './components/styled-components-wrapper'

const inter = Inter({ subsets: ['latin'] })

const theme = {
  colors: {
    primary: '#6366f1',
    secondary: '#3b82f6',
    accent: '#8b5cf6',
    background: '#0a0a0a',
    text: '#ffffff',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #3b82f6 100%)',
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{
        margin: 0,
        padding: 0,
        width: '100vw',
        overflowX: 'hidden',
        boxSizing: 'border-box'
      }}>
        <StyledComponentsWrapper>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </StyledComponentsWrapper>
      </body>
    </html>
  )
}
