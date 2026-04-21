import { Outfit, DM_Sans } from 'next/font/google'
import './globals.css'
import type { Metadata, Viewport } from 'next'

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  preload: true,
  adjustFontFallback: true,
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: 'Sagar Mamindla - AI Engineer & Full-Stack Developer',
  description:
    'AI Engineer and Full-Stack Developer in Dubai building fintech products, intelligent automation, and measurable web experiences.',
  keywords: [
    'Sagar Mamindla',
    'AI Engineer',
    'Full-Stack Developer',
    'Next.js',
    'React',
    'Python',
    'FastAPI',
    'Portfolio',
  ],
  authors: [{ name: 'Sagar Mamindla' }],
  creator: 'Sagar Mamindla',
  publisher: 'Sagar Mamindla',
  openGraph: {
    title: 'Sagar Mamindla - AI Engineer & Full-Stack Developer',
    description:
      'Building production-grade AI automation, fintech workflows, and full-stack products with measurable business outcomes.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Sagar Mamindla Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagar Mamindla - AI Engineer & Full-Stack Developer',
    description:
      'AI + full-stack portfolio: fintech products, automation systems, and performance-focused web engineering.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0a0f1a',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sagar Mamindla',
              jobTitle: 'AI Engineer & Full-Stack Developer',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dubai',
                addressCountry: 'UAE',
              },
              email: 'sagar05.ms@gmail.com',
              sameAs: ['https://github.com/sagarr57', 'https://linkedin.com/in/sagar-mamindla'],
            }),
          }}
        />
      </head>
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
