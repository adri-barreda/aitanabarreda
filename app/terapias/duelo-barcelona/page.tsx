import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Psicóloga Duelo Barcelona | Acompañamiento en Pérdidas',
  description:
    'Psicóloga especializada en duelo en Barcelona. Acompañamiento en pérdidas de seres queridos, rupturas, pérdidas laborales y otros duelos vitales. Consulta en Gràcia.',
  keywords: [
    'psicóloga duelo barcelona',
    'terapia duelo barcelona',
    'acompañamiento pérdida barcelona',
    'psicólogo muerte familiar gràcia',
    'duelo complicado terapia',
  ],
  alternates: {
    canonical: 'https://www.aitanabarredapsicologia.com/terapias/duelo-barcelona',
  },
  openGraph: {
    title: 'Psicóloga Duelo Barcelona | Aitana Barreda',
    description: 'Acompañamiento especializado en procesos de duelo en Barcelona.',
    images: [{ url: '/images/og.png', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: '¿Cuándo debería buscar ayuda profesional para mi duelo?',
    answer:
      'Si sientes que el dolor no disminuye con el tiempo, te cuesta funcionar en tu día a día, tienes pensamientos de hacerte daño, o sientes que estás "atascado/a" en el proceso, puede ser buen momento para buscar ayuda. Pero no tienes que esperar a estar muy mal; también puedes venir simplemente porque necesitas un espacio para procesar.',
  },
  {
    question: '¿Qué tipos de duelo trabajas?',
    answer:
      'Acompaño todo tipo de pérdidas: muerte de seres queridos, rupturas de pareja, pérdidas de empleo, cambios vitales importantes, pérdidas de salud o capacidades, incluso duelos "invisibles" como la pérdida de un proyecto de vida o una ilusión.',
  },
  {
    question: '¿Hay una forma "correcta" de hacer el duelo?',
    answer:
      'No. Cada persona vive el duelo de forma diferente. No hay etapas fijas que debas cumplir ni un tiempo determinado para "superarlo". En terapia respetamos tu proceso único y te acompañamos donde estés.',
  },
]

export default function DueloBarcelonaPage() {
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
                Acompañamiento en{' '}
                <span className="italic">duelo y pérdidas</span>
              </h1>
              <div className="w-16 h-px bg-verde mb-8" />
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-6">
                Perder a alguien o algo importante duele. Y a menudo el mundo sigue
                girando como si nada hubiera pasado, mientras tú sientes que se te
                ha roto algo por dentro. Necesitas un espacio donde ese dolor tenga
                cabida.
              </p>
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-8">
                En mi consulta de Barcelona te acompaño a transitar el duelo a tu
                ritmo, sin prisas ni juicios, respetando tu forma única de procesar
                la pérdida.
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
                alt="Aitana Barreda, psicóloga especializada en duelo en Barcelona"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Tipos de pérdida */}
      <section className="py-20 lg:py-28 bg-rosa-light/15">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.12] mb-10 text-center">
              Tipos de pérdida que acompaño
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Muerte de familiares, amigos o personas significativas',
              'Rupturas de pareja y separaciones',
              'Pérdida de empleo o de un proyecto profesional',
              'Cambios vitales importantes (mudanzas, jubilación...)',
              'Pérdida de salud o de capacidades',
              'Abortos o pérdidas perinatales',
              'Pérdida de un proyecto de vida o de una ilusión',
              'Duelos complicados o no resueltos del pasado',
            ].map((tipo, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 p-5 bg-fondo rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-verde mt-2 shrink-0" />
                  <p className="font-body text-texto/75 text-[15px] leading-relaxed">
                    {tipo}
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
              Cómo acompaño el duelo
            </h2>
            <div className="space-y-6 font-body text-texto/65 text-base leading-[1.85]">
              <p>
                El duelo no es algo que &quot;superar&quot; o &quot;pasar página&quot;. Es un proceso
                de adaptación a una nueva realidad donde alguien o algo importante
                ya no está. Y lleva tiempo.
              </p>
              <p>
                En terapia te ofrezco un espacio seguro donde puedas expresar todo
                lo que sientes: tristeza, rabia, culpa, alivio, confusión... todas
                las emociones son válidas. No voy a decirte cómo deberías sentirte
                ni cuánto debería durar tu dolor.
              </p>
              <p>
                Trabajamos para que puedas integrar la pérdida en tu vida, honrar
                lo que perdiste, y poco a poco encontrar formas de seguir adelante
                llevando contigo lo que esa persona o esa etapa significó para ti.
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
              No tienes que pasar por esto solo/a
            </h2>
            <p className="font-body text-fondo/70 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Si estás atravesando una pérdida y necesitas un espacio donde
              poder expresar tu dolor, estoy aquí.
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
