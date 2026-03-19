import { Poppins } from 'next/font/google'
import './globals.css'
import type { Metadata, Viewport } from 'next'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Sagar Mamindla - AI Engineer & Full-Stack Developer',
  description: 'AI Engineer & Full-Stack Developer specializing in machine learning integration, intelligent automation, and cutting-edge web technologies.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#42A5F5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
