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

const title = 'Sagar Mamindla — Full-Stack & AI Software Engineer'
const description =
  'Full-stack & AI software engineer in Dubai building multi-tenant SaaS, AI-powered workflows and integration middleware with TypeScript, React/Next.js, Laravel, Python and PostgreSQL.'

export const metadata: Metadata = {
  title,
  description,
  keywords: ['Sagar Mamindla', 'AI Software Engineer', 'AI Engineer', 'Full-Stack Developer', 'Machine Learning', 'NLP', 'Next.js', 'Laravel', 'Dubai'],
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
              jobTitle: 'Full-Stack & AI Software Engineer',
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
