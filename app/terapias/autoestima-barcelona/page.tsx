import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Psicóloga Autoestima Barcelona | Terapia en Gràcia',
  description:
    'Psicóloga especializada en autoestima en Barcelona. Trabajo con inseguridad, autocrítica y problemas de autoimagen. Consulta en Gràcia y terapia online.',
  keywords: [
    'psicóloga autoestima barcelona',
    'terapia autoestima barcelona',
    'inseguridad psicólogo barcelona',
    'autoestima baja terapia',
    'autocrítica psicóloga gràcia',
  ],
  alternates: {
    canonical: 'https://www.aitanabarredapsicologia.com/terapias/autoestima-barcelona',
  },
  openGraph: {
    title: 'Psicóloga Autoestima Barcelona | Aitana Barreda',
    description: 'Trabajo especializado en autoestima e inseguridad en Barcelona.',
    images: [{ url: '/images/og.png', width: 1200, height: 630 }],
  },
}

const faqs = [
  {
    question: '¿Se puede mejorar la autoestima en terapia?',
    answer:
      'Absolutamente. La autoestima no es algo fijo con lo que nacemos; se construye a lo largo de nuestra vida. En terapia trabajamos para identificar de dónde vienen tus creencias negativas sobre ti y construir una relación más amable contigo mismo/a.',
  },
  {
    question: '¿Cuánto tiempo lleva trabajar la autoestima?',
    answer:
      'Depende de cada persona. Los patrones de autocrítica suelen estar muy arraigados, así que el trabajo es gradual. Pero desde las primeras sesiones empezarás a notar cambios en cómo te hablas y te tratas.',
  },
  {
    question: '¿La baja autoestima está relacionada con mi infancia?',
    answer:
      'Muchas veces sí. Cómo nos trataron de pequeños y los mensajes que recibimos influyen en cómo nos vemos. Pero también las experiencias adultas pueden afectarla. En terapia exploramos estas raíces para poder transformarlas.',
  },
]

export default function AutoestimaBarcelonaPage() {
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
                <span className="italic">autoestima</span>
              </h1>
              <div className="w-16 h-px bg-verde mb-8" />
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-6">
                &quot;No soy suficiente&quot;, &quot;no valgo&quot;, &quot;los demás lo hacen mejor&quot;...
                Si te suena esa voz crítica interna que te machaca constantemente,
                sabes lo agotador que es vivir así.
              </p>
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-8">
                En mi consulta de Barcelona trabajamos para entender de dónde viene
                esa voz y construir una relación más compasiva y justa contigo.
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
                alt="Aitana Barreda, psicóloga especializada en autoestima en Barcelona"
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
              ¿Te reconoces en alguna de estas situaciones?
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              'Te comparas constantemente con los demás (y siempre sales perdiendo)',
              'Tienes una voz interior muy crítica que te juzga todo el tiempo',
              'Te cuesta aceptar cumplidos o reconocer tus logros',
              'Sientes que no mereces cosas buenas o el amor de otros',
              'Evitas situaciones por miedo a no estar a la altura',
              'Necesitas la aprobación de los demás para sentirte bien',
              'Te cuesta poner límites o decir que no',
              'Sientes que eres un fraude y que algún día te descubrirán',
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
              Trabajar la autoestima desde la raíz
            </h2>
            <div className="space-y-6 font-body text-texto/65 text-base leading-[1.85]">
              <p>
                La baja autoestima no se arregla con frases motivacionales frente
                al espejo. Es un trabajo más profundo que implica entender de dónde
                vienen esas creencias sobre ti, cuestionarlas y construir otras
                nuevas más realistas y compasivas.
              </p>
              <p>
                En terapia exploramos tu historia: cómo te trataron, qué mensajes
                recibiste, qué experiencias marcaron tu forma de verte. Desde ahí,
                trabajamos para que puedas mirarte con otros ojos.
              </p>
              <p>
                No se trata de &quot;quererte mucho&quot; ni de creerte mejor que nadie.
                Se trata de tratarte con la misma amabilidad con la que tratarías
                a alguien a quien quieres, y de reconocer tu valor incluso con
                tus imperfecciones.
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
              Mereces tratarte mejor
            </h2>
            <p className="font-body text-fondo/70 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Si estás cansado/a de esa voz crítica que no te deja en paz,
              podemos trabajar juntas para silenciarla.
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
