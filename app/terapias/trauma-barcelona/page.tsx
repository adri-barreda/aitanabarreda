import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Psicóloga Trauma Barcelona | Terapia EMDR en Gràcia',
  description:
    'Psicóloga especializada en trauma en Barcelona. Terapia EMDR para estrés postraumático, experiencias difíciles y heridas emocionales. Consulta en Gràcia.',
  keywords: [
    'psicóloga trauma barcelona',
    'terapia EMDR barcelona',
    'estrés postraumático barcelona',
    'psicólogo trauma gràcia',
    'trauma emocional barcelona',
  ],
  alternates: {
    canonical: 'https://aitanabarredapsicologia.com/terapias/trauma-barcelona',
  },
  openGraph: {
    title: 'Psicóloga Trauma Barcelona | EMDR | Aitana Barreda',
    description: 'Tratamiento especializado de trauma con EMDR en Barcelona.',
    images: [{ url: '/images/og.png', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: '¿Qué es el EMDR y cómo funciona?',
    answer:
      'EMDR (Eye Movement Desensitization and Reprocessing) es una terapia que ayuda a procesar recuerdos traumáticos. Mediante estimulación bilateral, el cerebro puede integrar experiencias que quedaron "atascadas", reduciendo su carga emocional.',
  },
  {
    question: '¿Qué tipo de traumas puedes tratar?',
    answer:
      'Trabajo con diferentes tipos de trauma: accidentes, pérdidas, experiencias de la infancia, relaciones dañinas, situaciones de abuso o negligencia, y también el llamado "trauma complejo" que se acumula con el tiempo.',
  },
  {
    question: '¿Es doloroso revivir el trauma en terapia?',
    answer:
      'La terapia de trauma se hace de forma gradual y segura. No te pido que revivas el trauma de forma intensa. Trabajamos a tu ritmo, con técnicas de estabilización, y siempre priorizando tu bienestar emocional.',
  },
]

export default function TraumaBarcelonaPage() {
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
                <span className="italic">trauma</span> en Barcelona
              </h1>
              <div className="w-16 h-px bg-verde mb-8" />
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-6">
                El trauma deja huellas en el cuerpo y la mente. Puede manifestarse como
                flashbacks, pesadillas, hipervigilancia, dificultad para confiar o una
                sensación constante de amenaza. No tienes que seguir cargando con ese peso.
              </p>
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-8">
                En mi consulta de Gràcia utilizo EMDR y otras técnicas especializadas
                para ayudarte a procesar lo que viviste y recuperar la sensación de
                seguridad.
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
                alt="Aitana Barreda, psicóloga especializada en trauma en Barcelona"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Señales */}
      <section className="py-20 lg:py-28 bg-rosa-light/15">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.12] mb-10 text-center">
              Señales de que podrías estar viviendo con trauma
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Recuerdos intrusivos o flashbacks de lo que pasó',
              'Pesadillas recurrentes relacionadas con la experiencia',
              'Evitas lugares, personas o situaciones que te lo recuerdan',
              'Te sientes en alerta constante o hipervigilante',
              'Dificultad para confiar en los demás',
              'Sensación de desconexión de ti mismo/a o de la realidad',
              'Reacciones emocionales intensas ante estímulos pequeños',
              'Culpa o vergüenza relacionada con lo que viviste',
            ].map((señal, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <div className="flex items-start gap-4 p-5 bg-fondo rounded-sm">
                  <span className="w-2 h-2 rounded-full bg-verde mt-2 shrink-0" />
                  <p className="font-body text-texto/75 text-[15px] leading-relaxed">
                    {señal}
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
              Terapia EMDR y trabajo con trauma
            </h2>
            <div className="space-y-6 font-body text-texto/65 text-base leading-[1.85]">
              <p>
                Estoy formada en EMDR (Nivel I y II), una de las terapias con más
                evidencia científica para el tratamiento del trauma. Pero la técnica
                es solo una parte: lo más importante es crear un espacio seguro donde
                puedas sentirte acompañado/a.
              </p>
              <p>
                El trabajo con trauma requiere ir a tu ritmo. Primero nos aseguramos de
                que tienes recursos de estabilización, herramientas para regular tu
                sistema nervioso, antes de abordar los recuerdos difíciles. No hay prisa.
              </p>
              <p>
                Mi enfoque es integrativo: combino EMDR con técnicas de regulación
                emocional, mindfulness y trabajo corporal cuando es necesario. El
                objetivo es que puedas integrar lo que viviste sin que siga
                controlando tu presente.
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
              No tienes que cargar con esto solo/a
            </h2>
            <p className="font-body text-fondo/70 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              El trauma se puede trabajar. Si estás listo/a para dar el paso,
              estoy aquí para acompañarte.
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
