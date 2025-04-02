import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sagar Mamindla | Portfolio',
  description: 'Portfolio of Sagar Mamindla - Software Engineer',
  keywords: ['portfolio', 'software engineer', 'developer', 'AI', 'machine learning'],
  openGraph: {
    title: 'Sagar Mamindla | Portfolio',
    description: 'Portfolio of Sagar Mamindla - Software Engineer',
    url: 'https://sagar-portfolio.vercel.app',
    siteName: 'Sagar Mamindla Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sagar Mamindla Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sagar Mamindla | Portfolio',
    description: 'Portfolio of Sagar Mamindla - Software Engineer',
    images: ['/og-image.png'],
  },
}
