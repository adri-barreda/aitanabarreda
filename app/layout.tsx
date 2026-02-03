import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

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
  metadataBase: new URL('https://aitanabarredapsicologia.com'),
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
    images: [{ url: '/images/og.png', width: 1200, height: 630, alt: 'Aitana Barreda - Psicóloga en Barcelona' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og.png'],
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
              '@type': 'Psychologist',
              '@id': 'https://aitanabarredapsicologia.com/#psychologist',
              name: 'Aitana Barreda',
              jobTitle: 'Psicóloga General Sanitaria',
              description:
                'Psicóloga General Sanitaria en Barcelona especializada en ansiedad, trauma, alta sensibilidad y crecimiento personal. Sesiones presenciales en Gràcia y online.',
              url: 'https://aitanabarredapsicologia.com',
              telephone: '+34681328552',
              email: 'aitanapacientes@gmail.com',
              image: 'https://aitanabarredapsicologia.com/images/retrato-profesional-2.jpeg',
              address: {
                '@type': 'PostalAddress',
                streetAddress: "C/ de l'Escorial, 11",
                addressLocality: 'Barcelona',
                postalCode: '08024',
                addressRegion: 'Cataluña',
                addressCountry: 'ES',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 41.4061683,
                longitude: 2.1620431,
              },
              areaServed: [
                { '@type': 'City', name: 'Barcelona' },
                { '@type': 'AdministrativeArea', name: 'Gràcia' },
              ],
              priceRange: '$$',
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '20:00',
              },
              hasCredential: {
                '@type': 'EducationalOccupationalCredential',
                credentialCategory: 'Psicóloga General Sanitaria',
                recognizedBy: {
                  '@type': 'Organization',
                  name: "Col·legi Oficial de Psicologia de Catalunya",
                },
                identifier: '31174',
              },
              knowsAbout: [
                'Ansiedad',
                'Trauma',
                'EMDR',
                'Alta sensibilidad',
                'Depresión',
                'Autoestima',
                'Terapia de pareja',
                'Terapia familiar',
                'Duelo',
                'Crecimiento personal',
              ],
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Terapia individual presencial',
                    description: 'Sesiones de 50 minutos en consulta de Barcelona (Gràcia)',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Terapia online',
                    description: 'Sesiones de terapia por videollamada segura',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Terapia de pareja',
                    description: 'Acompañamiento terapéutico para parejas',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Terapia familiar',
                    description: 'Trabajo con dinámicas familiares',
                  },
                },
              ],
              sameAs: ['https://www.instagram.com/ansioliti_ka/'],
            }),
          }}
        />
      </head>
      <body className="bg-fondo text-texto font-body antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  )
}
