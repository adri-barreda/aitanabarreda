import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Psicóloga Relaciones y Pareja Barcelona | Gràcia',
  description:
    'Psicóloga especializada en relaciones de pareja en Barcelona. Terapia individual y de pareja para problemas de comunicación, conflictos y dependencia emocional.',
  keywords: [
    'psicóloga pareja barcelona',
    'terapia de pareja barcelona',
    'problemas de relación barcelona',
    'dependencia emocional psicólogo',
    'terapia relaciones gràcia',
  ],
  alternates: {
    canonical: 'https://aitanabarredapsicologia.com/terapias/relaciones-pareja-barcelona',
  },
  openGraph: {
    title: 'Psicóloga Relaciones y Pareja Barcelona | Aitana Barreda',
    description: 'Terapia especializada en relaciones de pareja en Barcelona.',
    images: [{ url: '/images/og.png', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: '¿La terapia es individual o de pareja?',
    answer:
      'Ofrezco ambas modalidades. A veces es útil trabajar primero de forma individual para entender tus patrones relacionales antes de hacer terapia de pareja. Otras veces, la pareja viene junta desde el inicio. Valoramos juntos qué es lo mejor para tu caso.',
  },
  {
    question: '¿Podemos salvar nuestra relación con terapia?',
    answer:
      'La terapia de pareja puede ayudar mucho, pero requiere compromiso de ambas partes. A veces el objetivo es mejorar la relación; otras veces, es acompañar una separación sana. Lo importante es que ambos estéis dispuestos a trabajar.',
  },
  {
    question: '¿Qué pasa si mi pareja no quiere venir a terapia?',
    answer:
      'Puedes venir solo/a. Trabajar tus patrones de relación, tus necesidades y tus límites puede transformar la dinámica de la pareja, aunque solo venga uno de los dos. Y también te ayuda a ti independientemente del resultado.',
  },
]

export default function RelacionesParejaBarcelonaPage() {
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
                Terapia de{' '}
                <span className="italic">pareja y relaciones</span> en Barcelona
              </h1>
              <div className="w-16 h-px bg-verde mb-8" />
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-6">
                Las relaciones son una de las fuentes más importantes de bienestar...
                y también de sufrimiento. Problemas de comunicación, conflictos
                repetitivos, celos, dependencia emocional o la sensación de que
                &quot;siempre me pasa lo mismo&quot;.
              </p>
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-8">
                En mi consulta de Barcelona te ayudo a entender tus patrones
                relacionales y a construir vínculos más sanos y satisfactorios.
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
                alt="Aitana Barreda, psicóloga especializada en relaciones de pareja en Barcelona"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Situaciones */}
      <section className="py-20 lg:py-28 bg-rosa-light/15">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.12] mb-10 text-center">
              ¿Te identificas con alguna de estas situaciones?
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Sientes que siempre acabas en el mismo tipo de relación',
              'Os cuesta comunicaros sin acabar discutiendo',
              'Hay conflictos que se repiten una y otra vez',
              'Sientes celos o inseguridad en tu relación',
              'Te cuesta estar solo/a o tienes miedo al abandono',
              'Sientes que das más de lo que recibes',
              'Has perdido la conexión emocional o física con tu pareja',
              'No sabes si seguir o terminar la relación',
            ].map((situacion, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 p-5 bg-fondo rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-verde mt-2 shrink-0" />
                  <p className="font-body text-texto/75 text-[15px] leading-relaxed">
                    {situacion}
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
              Cómo trabajo las relaciones
            </h2>
            <div className="space-y-6 font-body text-texto/65 text-base leading-[1.85]">
              <p>
                Muchos de nuestros patrones en las relaciones vienen de nuestra
                historia: cómo aprendimos a vincularnos en nuestra familia, qué
                modelos de relación vimos, qué heridas traemos. Entender esto es
                el primer paso para poder elegir de forma diferente.
              </p>
              <p>
                En la terapia de pareja, trabajo con un enfoque sistémico: miro la
                relación como un sistema donde ambos influyen. No busco culpables,
                sino entender la dinámica y encontrar formas más sanas de relacionarse.
              </p>
              <p>
                Si vienes solo/a, trabajamos tus patrones de apego, tus necesidades,
                tus límites y la forma en que eliges y te relacionas con tus parejas.
                El objetivo es que puedas construir relaciones que te nutran en
                lugar de desgastarte.
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
              Las relaciones se pueden trabajar
            </h2>
            <p className="font-body text-fondo/70 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Si sientes que tus relaciones te generan más sufrimiento que
              bienestar, podemos trabajar para cambiarlo.
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
