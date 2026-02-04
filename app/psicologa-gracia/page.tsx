import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Psicóloga Gràcia Barcelona | Aitana Barreda - Consulta en el Barrio',
  description:
    'Psicóloga en Gràcia, Barcelona. Consulta cerca de Joanic y Fontana. Terapia para ansiedad, trauma y crecimiento personal. Primera sesión informativa gratuita.',
  keywords: [
    'psicóloga gràcia',
    'psicologa gracia barcelona',
    'psicólogo gràcia',
    'terapia gràcia',
    'psicóloga joanic',
    'psicóloga fontana',
    'psicóloga barrio gràcia',
  ],
  alternates: {
    canonical: 'https://aitanabarredapsicologia.com/psicologa-gracia',
  },
  openGraph: {
    title: 'Psicóloga Gràcia Barcelona | Aitana Barreda',
    description: 'Consulta de psicología en el barrio de Gràcia. Cerca de metro Joanic y Fontana.',
    images: [{ url: '/images/og.png', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: '¿Dónde está exactamente tu consulta en Gràcia?',
    answer:
      "La consulta está en C/ de l'Escorial, 11, en pleno barrio de Gràcia. Está a 5 minutos andando del metro Joanic (L4) y a 8 minutos de Fontana (L3). También hay paradas de bus muy cerca.",
  },
  {
    question: '¿Hay facilidad para aparcar cerca?',
    answer:
      'Como en todo Gràcia, aparcar puede ser complicado. Te recomiendo venir en transporte público o usar el parking de la Plaça del Sol, que está a unos minutos caminando.',
  },
  {
    question: '¿En qué horarios atiendes?',
    answer:
      'Tengo disponibilidad de lunes a viernes, tanto en horario de mañana como de tarde. Buscamos juntos el horario que mejor te encaje.',
  },
  {
    question: '¿La primera cita es en la consulta de Gràcia?',
    answer:
      'La primera cita informativa puede ser presencial en la consulta de Gràcia o por videollamada, como prefieras. Es gratuita y sin compromiso.',
  },
]

export default function PsicologaGraciaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
              })),
            },
            {
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Aitana Barreda - Psicóloga',
              image: 'https://aitanabarredapsicologia.com/images/retrato-profesional-2.jpeg',
              '@id': 'https://aitanabarredapsicologia.com',
              url: 'https://aitanabarredapsicologia.com',
              telephone: '+34681328552',
              address: {
                '@type': 'PostalAddress',
                streetAddress: "C/ de l'Escorial, 11",
                addressLocality: 'Barcelona',
                addressRegion: 'Gràcia',
                postalCode: '08024',
                addressCountry: 'ES',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 41.4061683,
                longitude: 2.1620431,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '20:00',
              },
              areaServed: {
                '@type': 'AdministrativeArea',
                name: 'Gràcia, Barcelona',
              },
            },
          ]),
        }}
      />

      {/* Hero */}
      <section className="py-24 lg:py-32 bg-fondo">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-texto/40 mb-5">
                Consulta en Gràcia
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-texto font-light leading-[1.08] mb-6">
                Psicóloga en <span className="italic">Gràcia</span>, Barcelona
              </h1>
              <div className="w-16 h-px bg-verde mb-8" />
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-6">
                Mi consulta está en el corazón de Gràcia, uno de los barrios con más
                vida de Barcelona. Un espacio tranquilo y acogedor donde poder hablar
                con calma de lo que te preocupa.
              </p>
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-8">
                Muy bien comunicada: a 5 minutos del metro Joanic (L4) y a 8 de
                Fontana (L3). También accesible en bus y con parkings cercanos.
              </p>
              <Link
                href="/servicios#contacto"
                className="inline-flex items-center gap-2 bg-texto text-fondo font-body text-[13px] font-medium tracking-wide px-7 py-3.5 hover:bg-texto/85 transition-colors duration-300"
              >
                Pedir cita
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="relative">
                <div className="absolute top-6 -right-4 lg:-right-8 w-[85%] h-[90%] bg-rosa-light/25" />
                <Image
                  src="/images/retrato-profesional-2.jpeg"
                  alt="Aitana Barreda, psicóloga con consulta en Gràcia"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover relative z-10"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section className="py-16 bg-verde-light/15">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <div className="grid sm:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl text-texto font-light leading-[1.12] mb-6">
                  Cómo llegar a la consulta
                </h2>
                <div className="space-y-4 font-body text-texto/65 text-[15px] leading-relaxed">
                  <p>
                    <strong className="text-texto">Dirección:</strong><br />
                    C/ de l&apos;Escorial, 11<br />
                    08024 Barcelona (Gràcia)
                  </p>
                  <p>
                    <strong className="text-texto">Metro:</strong><br />
                    Joanic (L4) - 5 min andando<br />
                    Fontana (L3) - 8 min andando
                  </p>
                  <p>
                    <strong className="text-texto">Bus:</strong><br />
                    Líneas 39, 114, V17 (paradas cercanas)
                  </p>
                </div>
              </div>
              <div className="bg-texto/5 p-6 rounded-sm">
                <p className="font-body text-[11px] tracking-[0.2em] uppercase text-texto/40 mb-4">
                  Horario de atención
                </p>
                <div className="space-y-2 font-body text-texto/70 text-sm">
                  <p>Lunes a Viernes</p>
                  <p className="font-heading text-2xl text-texto font-light">9:00 - 20:00</p>
                  <p className="text-texto/50 text-xs mt-4">
                    Horarios flexibles según disponibilidad.<br />
                    También ofrezco sesiones online.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Qué esperar */}
      <section className="py-20 lg:py-28 bg-fondo">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.12] mb-8">
              Qué esperar de la primera visita
            </h2>
            <div className="space-y-6 font-body text-texto/65 text-base leading-[1.85]">
              <p>
                La primera sesión es gratuita e informativa. Es un espacio para
                conocernos: me cuentas qué te trae, qué esperas de la terapia, y
                resuelvo todas tus dudas sobre cómo trabajo.
              </p>
              <p>
                No hay presión ni compromiso. El objetivo es que puedas tomar una
                decisión informada sobre si quieres empezar un proceso conmigo.
                Si después de la primera sesión sientes que no soy la profesional
                adecuada para ti, sin problema.
              </p>
              <p>
                La consulta de Gràcia está pensada para que te sientas cómodo/a:
                un espacio luminoso, tranquilo y privado donde puedes ser tú.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-rosa-light/10">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.12] mb-10 text-center">
              Preguntas sobre la consulta
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-fondo p-6 rounded-sm">
                  <h3 className="font-heading text-lg text-texto font-medium mb-3">
                    {faq.question}
                  </h3>
                  <p className="font-body text-texto/65 text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-texto text-fondo">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] mb-6">
              Te espero en Gràcia
            </h2>
            <p className="font-body text-fondo/70 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Si buscas una psicóloga cerca de ti en Gràcia, escríbeme.
              La primera cita es gratuita.
            </p>
            <Link
              href="/servicios#contacto"
              className="inline-flex items-center gap-2 bg-fondo text-texto font-body text-[13px] font-medium tracking-wide px-7 py-3.5 hover:bg-rosa-light transition-colors duration-300"
            >
              Reservar cita gratuita
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
