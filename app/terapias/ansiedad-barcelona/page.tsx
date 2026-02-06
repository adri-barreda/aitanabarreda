import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Psicóloga Ansiedad Barcelona | Terapia en Gràcia',
  description:
    'Psicóloga especializada en ansiedad en Barcelona. Tratamiento de ataques de pánico, ansiedad generalizada y estrés. Consulta en Gràcia. Primera sesión informativa.',
  keywords: [
    'psicóloga ansiedad barcelona',
    'terapia ansiedad barcelona',
    'tratamiento ansiedad gràcia',
    'psicólogo ataques de pánico barcelona',
    'ansiedad generalizada barcelona',
  ],
  alternates: {
    canonical: 'https://aitanabarredapsicologia.com/terapias/ansiedad-barcelona',
  },
  openGraph: {
    title: 'Psicóloga Ansiedad Barcelona | Aitana Barreda',
    description: 'Tratamiento especializado de ansiedad en Barcelona. Terapia presencial en Gràcia y online.',
    images: [{ url: '/images/og.png', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: '¿Cuántas sesiones necesito para tratar la ansiedad?',
    answer:
      'Depende de cada caso y de la intensidad de los síntomas. Generalmente, los primeros cambios se notan entre 4-8 sesiones. Trabajamos juntos para establecer objetivos realistas desde el inicio.',
  },
  {
    question: '¿Qué técnicas utilizas para tratar la ansiedad?',
    answer:
      'Combino diferentes enfoques según tus necesidades: técnicas de regulación emocional, mindfulness, terapias de tercera generación y, cuando es necesario, EMDR para trabajar experiencias que alimentan la ansiedad.',
  },
  {
    question: '¿Puedo hacer terapia para la ansiedad online?',
    answer:
      'Sí, ofrezco terapia online con la misma efectividad que las sesiones presenciales. Muchas personas encuentran más cómodo trabajar su ansiedad desde la seguridad de su casa.',
  },
]

export default function AnsiedadBarcelonaPage() {
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
                <span className="italic">ansiedad</span> en Barcelona
              </h1>
              <div className="w-16 h-px bg-verde mb-8" />
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-6">
                La ansiedad puede manifestarse de muchas formas: preocupación constante,
                tensión física, dificultad para dormir, ataques de pánico... Sé lo
                agotador que puede ser sentir que tu mente no para nunca.
              </p>
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-8">
                En mi consulta de Gràcia (Barcelona) te ayudo a entender qué hay detrás
                de tu ansiedad y a desarrollar herramientas para recuperar la calma y
                el control sobre tu vida.
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
                alt="Aitana Barreda, psicóloga especializada en ansiedad en Barcelona"
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
              ¿Reconoces alguno de estos síntomas?
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Preocupación excesiva y difícil de controlar',
              'Tensión muscular y dificultad para relajarte',
              'Problemas para dormir o descansar bien',
              'Sensación de agobio o de que todo es demasiado',
              'Ataques de pánico o miedo intenso',
              'Evitas situaciones por miedo a sentir ansiedad',
              'Pensamientos acelerados que no paran',
              'Irritabilidad o cambios de humor',
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
              Mi enfoque para tratar la ansiedad
            </h2>
            <div className="space-y-6 font-body text-texto/65 text-base leading-[1.85]">
              <p>
                La ansiedad no es tu enemigo: es una señal de que algo necesita atención.
                En terapia, trabajamos para entender qué hay detrás de tu ansiedad: qué
                la activa, qué la mantiene. Y desarrollar estrategias que funcionen para ti.
              </p>
              <p>
                Utilizo un enfoque integrador que combina diferentes técnicas según lo
                que necesites: regulación emocional, técnicas de relajación, mindfulness,
                trabajo con creencias limitantes y, cuando es útil, EMDR para procesar
                experiencias pasadas que pueden estar alimentando tu ansiedad.
              </p>
              <p>
                Mi objetivo no es que dejes de sentir ansiedad por completo (es una
                emoción normal y útil), sino que aprendas a relacionarte con ella de
                una forma más sana y que deje de controlar tu vida.
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
              Da el primer paso
            </h2>
            <p className="font-body text-fondo/70 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Si la ansiedad está afectando tu día a día, no tienes que seguir
              solo/a. Escríbeme y hablamos.
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
