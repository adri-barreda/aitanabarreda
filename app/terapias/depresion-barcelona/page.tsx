import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Psicóloga Depresión Barcelona | Terapia en Gràcia',
  description:
    'Psicóloga especializada en depresión en Barcelona. Tratamiento de tristeza profunda, apatía y falta de motivación. Consulta en Gràcia y terapia online.',
  keywords: [
    'psicóloga depresión barcelona',
    'terapia depresión barcelona',
    'tratamiento depresión gràcia',
    'psicólogo tristeza barcelona',
    'apatía terapia barcelona',
  ],
  alternates: {
    canonical: 'https://aitanabarredapsicologia.com/terapias/depresion-barcelona',
  },
  openGraph: {
    title: 'Psicóloga Depresión Barcelona | Aitana Barreda',
    description: 'Tratamiento especializado de depresión en Barcelona.',
    images: [{ url: '/images/og.png', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: '¿Cómo sé si tengo depresión o solo estoy triste?',
    answer:
      'La tristeza es una emoción normal que viene y va. La depresión es más persistente (semanas o meses), afecta a tu funcionamiento diario e incluye síntomas como pérdida de interés, cambios en el sueño/apetito, dificultad para concentrarte y pensamientos negativos recurrentes.',
  },
  {
    question: '¿La terapia funciona para la depresión?',
    answer:
      'Sí. La psicoterapia tiene amplia evidencia científica para el tratamiento de la depresión. En muchos casos, la terapia sola es suficiente; en otros, puede combinarse con medicación. Lo importante es pedir ayuda.',
  },
  {
    question: '¿Cuánto dura el tratamiento de la depresión?',
    answer:
      'Depende de cada persona y de la severidad de los síntomas. Generalmente, la mejoría empieza a notarse entre 8-12 sesiones, aunque el trabajo completo puede llevar más tiempo. Vamos a tu ritmo.',
  },
]

export default function DepresionBarcelonaPage() {
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
                <span className="italic">depresión</span> en Barcelona
              </h1>
              <div className="w-16 h-px bg-verde mb-8" />
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-6">
                Cuando la tristeza se queda, todo cuesta más. Levantarte, trabajar,
                relacionarte... incluso las cosas que antes disfrutabas pierden su
                brillo. Si llevas tiempo sintiéndote así, no estás solo/a.
              </p>
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-8">
                En mi consulta de Barcelona te acompaño a entender qué está pasando
                y a encontrar el camino de vuelta hacia ti.
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
                alt="Aitana Barreda, psicóloga especializada en depresión en Barcelona"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Síntomas */}
      <section className="py-20 lg:py-28 bg-rosa-light/15">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.12] mb-10 text-center">
              Señales de que podrías estar pasando por una depresión
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Tristeza persistente que no se va',
              'Has perdido interés en cosas que antes disfrutabas',
              'Cambios en el sueño: duermes mucho o muy poco',
              'Cambios en el apetito o el peso',
              'Te sientes agotado/a aunque no hagas mucho',
              'Dificultad para concentrarte o tomar decisiones',
              'Pensamientos de culpa o inutilidad',
              'Sensación de vacío o desesperanza',
            ].map((sintoma, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 p-5 bg-fondo rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-verde mt-2 shrink-0" />
                  <p className="font-body text-texto/75 text-[15px] leading-relaxed">
                    {sintoma}
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
              Mi enfoque para trabajar la depresión
            </h2>
            <div className="space-y-6 font-body text-texto/65 text-base leading-[1.85]">
              <p>
                La depresión no es &quot;estar triste&quot; ni &quot;falta de voluntad&quot;. Es una
                condición real que afecta a tu cuerpo, tus pensamientos y tu forma
                de relacionarte con el mundo. Y tiene tratamiento.
              </p>
              <p>
                En terapia trabajamos para entender qué te ha llevado hasta aquí,
                identificar los patrones de pensamiento que mantienen la depresión,
                y construir poco a poco actividades y conexiones que te devuelvan
                la energía y el sentido.
              </p>
              <p>
                No voy a pedirte que &quot;le pongas ganas&quot; ni que &quot;pienses en positivo&quot;.
                Voy a acompañarte a tu ritmo, con paciencia y sin juicio, porque sé
                que cuando estás en ese lugar oscuro, cualquier paso es un logro.
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
              Pedir ayuda es el primer paso
            </h2>
            <p className="font-body text-fondo/70 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Si te reconoces en lo que has leído, no esperes más. La depresión
              tiene tratamiento y se puede salir.
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
