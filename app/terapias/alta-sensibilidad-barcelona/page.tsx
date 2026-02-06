import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Psicóloga Alta Sensibilidad Barcelona | PAS',
  description:
    'Psicóloga especializada en alta sensibilidad (PAS) en Barcelona. Acompañamiento para personas altamente sensibles. Consulta en Gràcia y terapia online.',
  keywords: [
    'psicóloga alta sensibilidad barcelona',
    'PAS barcelona',
    'personas altamente sensibles barcelona',
    'psicólogo PAS gràcia',
    'alta sensibilidad terapia',
  ],
  alternates: {
    canonical: 'https://aitanabarredapsicologia.com/terapias/alta-sensibilidad-barcelona',
  },
  openGraph: {
    title: 'Psicóloga Alta Sensibilidad Barcelona | Aitana Barreda',
    description: 'Acompañamiento especializado para personas altamente sensibles (PAS) en Barcelona.',
    images: [{ url: '/images/og.png', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: '¿Qué significa ser una persona altamente sensible (PAS)?',
    answer:
      'La alta sensibilidad es un rasgo de personalidad presente en aproximadamente el 20% de la población. Implica un procesamiento más profundo de la información, mayor empatía, sensibilidad a estímulos y una vida emocional intensa. No es un trastorno ni algo que "arreglar".',
  },
  {
    question: '¿Cómo sé si soy PAS?',
    answer:
      'Algunas señales son: te afectan mucho los estímulos intensos (ruidos, luces), necesitas tiempo a solas para recargar, captas matices que otros no ven, tienes una vida interior rica, te conmueven el arte o la naturaleza, y te abrumas con facilidad en ambientes caóticos.',
  },
  {
    question: '¿En qué consiste la terapia para PAS?',
    answer:
      'No se trata de "curar" la sensibilidad, sino de aprender a gestionarla como una fortaleza. Trabajamos la regulación emocional, establecer límites, manejar la sobreestimulación y desarrollar una relación más amable contigo mismo/a.',
  },
]

export default function AltaSensibilidadBarcelonaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      {/* Hero */}
      <section className="py-24 lg:py-32 bg-fondo">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal>
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-texto/40 mb-5">
                Especialidad
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-texto font-light leading-[1.08] mb-6">
                Psicóloga especializada en{' '}
                <span className="italic">alta sensibilidad</span>
              </h1>
              <div className="w-16 h-px bg-verde mb-8" />
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-6">
                Si desde pequeño/a te han dicho que eres &quot;demasiado sensible&quot;, que
                te tomas las cosas muy a pecho o que piensas demasiado, es posible
                que seas una persona altamente sensible (PAS).
              </p>
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-8">
                La alta sensibilidad no es un defecto: es un rasgo que, bien gestionado,
                puede ser una gran fortaleza. En mi consulta te ayudo a entender tu
                sensibilidad y a vivir en paz con ella.
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
              <Image
                src="/images/retrato-profesional-2.jpeg"
                alt="Aitana Barreda, psicóloga especializada en alta sensibilidad en Barcelona"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-20 lg:py-28 bg-rosa-light/15">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.12] mb-10 text-center">
              ¿Te identificas con esto?
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Te abrumas con facilidad en ambientes ruidosos o caóticos',
              'Necesitas tiempo a solas para recargar energía',
              'Captas detalles y matices que otros pasan por alto',
              'Te afectan mucho las emociones de los demás',
              'Tienes una vida interior rica y profunda',
              'Te conmueven la belleza, el arte o la naturaleza',
              'Eres muy consciente de los cambios sutiles en tu entorno',
              'Te cuesta tomar decisiones porque ves todas las perspectivas',
            ].map((caracteristica, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 p-5 bg-fondo rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-verde mt-2 shrink-0" />
                  <p className="font-body text-texto/75 text-[15px] leading-relaxed">
                    {caracteristica}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enfoque */}
      <section className="py-20 lg:py-28 bg-fondo">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.12] mb-8">
              Acompañamiento para personas PAS
            </h2>
            <div className="space-y-6 font-body text-texto/65 text-base leading-[1.85]">
              <p>
                La terapia con personas altamente sensibles no consiste en &quot;dejar de
                ser sensible&quot;, porque ni sería posible ni deseable. Se trata de aprender a
                vivir con tu sensibilidad de una forma que te permita florecer en
                lugar de sufrir.
              </p>
              <p>
                Trabajamos en varias áreas: entender tu sistema nervioso y por qué
                reaccionas como reaccionas, desarrollar estrategias de regulación
                emocional, aprender a establecer límites sanos, y transformar la
                narrativa de &quot;soy demasiado&quot; por una de autocompasión y aceptación.
              </p>
              <p>
                Como psicóloga sensible, entiendo de primera mano los desafíos que
                enfrentas. En mi consulta encontrarás un espacio tranquilo, sin prisas,
                donde tu sensibilidad es bienvenida y valorada.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-verde-light/15">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.12] mb-10 text-center">
              Preguntas frecuentes
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
              Tu sensibilidad es un regalo
            </h2>
            <p className="font-body text-fondo/70 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Si quieres aprender a vivir en paz con tu alta sensibilidad,
              estaré encantada de acompañarte.
            </p>
            <Link
              href="/servicios#contacto"
              className="inline-flex items-center gap-2 bg-fondo text-texto font-body text-[13px] font-medium tracking-wide px-7 py-3.5 hover:bg-rosa-light transition-colors duration-300"
            >
              Contactar
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
