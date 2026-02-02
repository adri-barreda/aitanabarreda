import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Aitana Barreda · Psicóloga en Barcelona',
    template: '%s · Aitana Barreda Psicología',
  },
  description:
    'Psicóloga General Sanitaria en Barcelona. Terapia para ansiedad, trauma, alta sensibilidad y crecimiento personal. Sesiones presenciales y online.',
  keywords: [
    'psicóloga Barcelona',
    'terapia ansiedad Barcelona',
    'psicóloga trauma Barcelona',
    'alta sensibilidad psicóloga',
    'terapia online Barcelona',
  ],
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'Aitana Barreda Psicología',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': ['LocalBusiness', 'Psychologist'],
              name: 'Aitana Barreda - Psicóloga',
              description:
                'Psicóloga General Sanitaria en Barcelona. Terapia para ansiedad, trauma, alta sensibilidad y crecimiento personal.',
              url: 'https://aitanabarredapsicologia.com',
              telephone: '+34600000000',
              email: 'hola@aitanabarredapsicologia.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Barcelona',
                addressRegion: 'Cataluña',
                addressCountry: 'ES',
              },
              priceRange: '$$',
              openingHours: 'Mo-Fr 09:00-20:00',
            }),
          }}
        />
      </head>
      <body className="bg-fondo text-texto font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
