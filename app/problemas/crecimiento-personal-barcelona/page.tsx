import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Psicóloga Crecimiento Personal Barcelona | Gràcia',
  description:
    'Psicóloga especializada en crecimiento personal en Barcelona. Autoconocimiento, desarrollo personal y acompañamiento en momentos de cambio. Consulta en Gràcia.',
  keywords: [
    'psicóloga crecimiento personal barcelona',
    'desarrollo personal barcelona',
    'autoconocimiento psicóloga',
    'terapia crecimiento personal gràcia',
    'coaching psicológico barcelona',
  ],
  alternates: {
    canonical: 'https://aitanabarredapsicologia.com/problemas/crecimiento-personal-barcelona',
  },
  openGraph: {
    title: 'Psicóloga Crecimiento Personal Barcelona | Aitana Barreda',
    description: 'Acompañamiento en procesos de crecimiento y desarrollo personal.',
    images: [{ url: '/images/og.png', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: '¿Puedo ir al psicólogo aunque no tenga un problema grave?',
    answer:
      'Por supuesto. No hace falta estar mal para ir a terapia. Muchas personas vienen porque quieren conocerse mejor, trabajar aspectos de sí mismas que les limitan, o simplemente tener un espacio de reflexión y crecimiento.',
  },
  {
    question: '¿Qué diferencia hay entre coaching y terapia?',
    answer:
      'El coaching se enfoca en objetivos concretos y el futuro. La terapia va más allá: explora tu historia, tus patrones emocionales y las raíces de lo que te limita. En mi consulta trabajo desde la psicología, lo que permite un abordaje más profundo y duradero.',
  },
  {
    question: '¿Cómo sé si necesito terapia o solo estoy en un momento de cambio?',
    answer:
      'Los momentos de cambio son precisamente buenos momentos para hacer terapia. Tener acompañamiento profesional cuando estás en una encrucijada puede ayudarte a tomar decisiones más alineadas contigo y a transitar el cambio de forma más consciente.',
  },
]

export default function CrecimientoPersonalBarcelonaPage() {
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
                <span className="italic">Crecimiento personal</span> y autoconocimiento
              </h1>
              <div className="w-16 h-px bg-verde mb-8" />
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-6">
                A veces no hace falta tener un problema concreto para buscar ayuda.
                Puede que simplemente sientas que hay algo que te frena, que no estás
                viviendo la vida que quieres, o que quieres conocerte mejor.
              </p>
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-8">
                En mi consulta de Barcelona te acompaño en procesos de autoconocimiento
                y crecimiento: descubrir quién eres, qué quieres y cómo llegar allí.
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
                alt="Aitana Barreda, psicóloga especializada en crecimiento personal en Barcelona"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Motivaciones */}
      <section className="py-20 lg:py-28 bg-rosa-light/15">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.12] mb-10 text-center">
              ¿Por qué venir a terapia de crecimiento personal?
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Quieres conocerte mejor y entender por qué haces lo que haces',
              'Sientes que hay patrones que se repiten en tu vida',
              'Estás en un momento de cambio o encrucijada vital',
              'Quieres trabajar aspectos de ti que te limitan',
              'Buscas más claridad sobre qué quieres en la vida',
              'Quieres mejorar tu relación contigo mismo/a',
              'Sientes que no estás viviendo alineado/a con tus valores',
              'Simplemente quieres un espacio de reflexión y crecimiento',
            ].map((motivo, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 p-5 bg-fondo rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-verde mt-2 shrink-0" />
                  <p className="font-body text-texto/75 text-[15px] leading-relaxed">
                    {motivo}
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
              Un espacio para ti
            </h2>
            <div className="space-y-6 font-body text-texto/65 text-base leading-[1.85]">
              <p>
                El trabajo de crecimiento personal en terapia va más allá de
                &quot;mejorar&quot; o &quot;ser más productivo&quot;. Se trata de conocerte en
                profundidad: tus necesidades, tus miedos, tus deseos, tu forma de
                relacionarte con el mundo.
              </p>
              <p>
                A veces descubrimos que lo que creíamos que queríamos no era realmente
                nuestro, sino expectativas de otros. Otras veces encontramos recursos
                que no sabíamos que teníamos. El proceso es único para cada persona.
              </p>
              <p>
                Mi rol es acompañarte con curiosidad y sin juicio, hacerte las preguntas
                que quizás no te has hecho, y ofrecerte una mirada externa que te
                ayude a ver lo que desde dentro cuesta ver.
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
              Invierte en ti
            </h2>
            <p className="font-body text-fondo/70 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Si sientes que es momento de dedicarte tiempo y atención,
              estaré encantada de acompañarte en el proceso.
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
