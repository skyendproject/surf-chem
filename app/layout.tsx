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

  keywords: [
    'surfactants',
    'agrochemicals',
    'specialty chemicals',
    'chemical formulation',
    'chemical solutions',
  ],

  openGraph: {
    type: 'website',
    url: 'https://www.surfchem.co.uk',
    siteName: 'Surfactant Chemicals Company',
    title: 'Surfactant Chemicals Company',
    description:
      'Innovative surfactants, agrochemicals, formulation support, and specialty chemical solutions from Surfactant Chemicals Company.',
    images: [
      {
        url: 'https://www.surfchem.co.uk/assets/SSC-Logo.png',
        width: 1200,
        height: 630,
        alt: 'Surfactant Chemicals Company',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Surfactant Chemicals Company',
    description:
      'Innovative surfactants, agrochemicals, formulation support, and specialty chemical solutions from Surfactant Chemicals Company.',
    images: ['https://www.surfchem.co.uk/assets/SSC-Logo.png'],
  },

  icons: {
    icon: [
      { url: '/assets/logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/assets/logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/logo.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/assets/logo.png'],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
