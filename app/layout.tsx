import ScrollToTop from '@/components/ScrollToTop'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Surfactant Chemicals',
  description: 'Innovative Surface Chemistry',
  generator: 'v0.dev',
  openGraph: {
    title: 'Surfactant Chemicals',
    description: 'Innovative Surface Chemistry',
    url: "https://surfchem.co.uk/",
    siteName: "surfchem.co.uk",
    images: [
      {
        url: "public/assets/logo.png",
        width: 255,
        height: 88,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: 'Surfactant Chemicals',
    description: 'Innovative Surface Chemistry',
    images: ["public/assets/logo.png"],
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
