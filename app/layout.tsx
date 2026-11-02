import { Syne, DM_Sans } from 'next/font/google'
import './globals.css'
import type { Metadata, Viewport } from 'next'
import Cursor from './components/Cursor'
import SmoothScroll from './components/SmoothScroll'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700', '800'],
  variable: '--font-syne',
})

const dm = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm',
})

const title = 'Sagar Mamindla — AI Engineer & Full-Stack Developer'
const description =
  'AI engineer in Dubai shipping production AI systems: voice and call intelligence, ML pipelines, multi-tenant SaaS and fintech platforms. MSc Artificial Intelligence, Heriot-Watt.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Sagar Mamindla', 'AI Engineer', 'Full-Stack Developer', 'Machine Learning', 'NLP', 'Next.js', 'Laravel', 'Dubai'],
  authors: [{ name: 'Sagar Mamindla' }],
  openGraph: { title, description, type: 'website', locale: 'en_US', siteName: 'Sagar Mamindla' },
  twitter: { card: 'summary_large_image', title, description },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#050505',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dm.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sagar Mamindla',
              jobTitle: 'AI Engineer',
              address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'UAE' },
              email: 'sagar05.ms@gmail.com',
              sameAs: ['https://github.com/sagarr57', 'https://linkedin.com/in/sagar-mamindla'],
            }),
          }}
        />
      </head>
      <body>
        <SmoothScroll />
        <Cursor />
        <div className="grain" aria-hidden />
        {children}
      </body>
    </html>
  )
}
