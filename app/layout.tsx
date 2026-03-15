import ScrollToTop from '@/components/ScrollToTop'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.surfchem.co.uk'),
  title: {
    default: 'Surfactant Chemicals Company',
    template: '%s | Surfactant Chemicals Company',
  },
  description:
    'Innovative surfactants, agrochemicals, formulation support, and specialty chemical solutions from Surfactant Chemicals Company.',
  applicationName: 'Surfactant Chemicals Company',
  openGraph: {
    type: 'website',
    url: 'https://www.surfchem.co.uk',
    siteName: 'Surfactant Chemicals Company',
    title: 'Surfactant Chemicals Company',
    description:
      'Innovative surfactants, agrochemicals, formulation support, and specialty chemical solutions from Surfactant Chemicals Company.',
    images: [
      {
        url: '/assets/SSC-Logo.png',
        width: 1200,
        height: 630,
        alt: 'Surfactant Chemicals Company logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surfactant Chemicals Company',
    description:
      'Innovative surfactants, agrochemicals, formulation support, and specialty chemical solutions from Surfactant Chemicals Company.',
    images: ['/assets/SSC-Logo.png'],
  },
  icons: {
    icon: '/assets/logo.png',
    shortcut: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop>
          {children}
        </ScrollToTop>
      </body>
    </html>
  )
}
