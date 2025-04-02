import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sagar Mamindla - Software Engineer',
  description: 'Portfolio of Sagar Mamindla - Software Engineer with 3+ years of experience in front-end development and pursuing MSc in Artificial Intelligence',
  keywords: ['portfolio', 'software engineer', 'react', 'javascript', 'ai', 'machine learning'],
  authors: [{ name: 'Sagar Mamindla' }],
  creator: 'Sagar Mamindla',
  publisher: 'Sagar Mamindla',
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Sagar Mamindla - Software Engineer',
    description: 'Portfolio of Sagar Mamindla - Software Engineer with 3+ years of experience in front-end development and pursuing MSc in Artificial Intelligence',
    url: 'https://sagar-portfolio.vercel.app',
    siteName: 'Sagar Mamindla',
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
    title: 'Sagar Mamindla - Software Engineer',
    description: 'Portfolio of Sagar Mamindla - Software Engineer with 3+ years of experience in front-end development and pursuing MSc in Artificial Intelligence',
    images: ['/og-image.png'],
  },
}
