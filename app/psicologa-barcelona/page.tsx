import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Psicóloga Barcelona | Aitana Barreda - Terapia Presencial y Online',
  description:
    'Psicóloga General Sanitaria en Barcelona. Terapia para ansiedad, trauma, depresión y crecimiento personal. Consulta en Gràcia. Primera sesión informativa gratuita.',
  keywords: [
    'psicóloga barcelona',
    'psicologa barcelona',
    'psicólogo barcelona',
    'terapia barcelona',
    'psicóloga gràcia',
    'terapia presencial barcelona',
    'psicóloga online barcelona',
  ],
  alternates: {
    canonical: 'https://aitanabarredapsicologia.com/psicologa-barcelona',
  },
  openGraph: {
    title: 'Psicóloga Barcelona | Aitana Barreda',
    description: 'Psicóloga General Sanitaria en Barcelona. Terapia presencial en Gràcia y online.',
    images: [{ url: '/images/og.png', width: 1200, height: 630 }],
  },
}

const servicios = [
  {
    titulo: 'Ansiedad y estrés',
    descripcion: 'Ataques de pánico, ansiedad generalizada, preocupación excesiva',
    link: '/terapias/ansiedad-barcelona',
  },
  {
    titulo: 'Trauma',
    descripcion: 'Experiencias difíciles, TEPT, trauma complejo, EMDR',
    link: '/terapias/trauma-barcelona',
  },
  {
    titulo: 'Depresión',
    descripcion: 'Tristeza persistente, falta de motivación, vacío emocional',
    link: '/terapias/depresion-barcelona',
  },
  {
    titulo: 'Alta sensibilidad',
    descripcion: 'Personas PAS, sobreestimulación, gestión emocional',
    link: '/terapias/alta-sensibilidad-barcelona',
  },
  {
    titulo: 'Autoestima',
    descripcion: 'Inseguridades, autocrítica, construcción de confianza',
    link: '/terapias/autoestima-barcelona',
  },
  {
    titulo: 'Relaciones de pareja',
    descripcion: 'Comunicación, conflictos, dependencia emocional',
    link: '/terapias/relaciones-pareja-barcelona',
  },
]

const faqs = [
  {
    question: '¿Dónde está tu consulta en Barcelona?',
    answer:
      "Mi consulta está en el barrio de Gràcia, en C/ de l'Escorial, 11. Es una zona céntrica, bien comunicada en metro (Joanic, Fontana) y autobús. El espacio está pensado para que te sientas cómoda/o desde el primer momento.",
  },
  {
    question: '¿Cuánto cuesta una sesión de terapia?',
    answer:
      'El precio de la sesión individual es de 60€ (50 minutos). Las sesiones de pareja o familia tienen un precio diferente. La primera sesión informativa es gratuita y sirve para conocernos y resolver tus dudas.',
  },
  {
    question: '¿También haces terapia online?',
    answer:
      'Sí, ofrezco terapia online por videollamada con la misma calidad y compromiso que las sesiones presenciales. Es una opción flexible si no puedes desplazarte o prefieres la comodidad de tu casa.',
  },
  {
    question: '¿Qué tipo de terapia haces?',
    answer:
      'Trabajo desde un enfoque integrador, combinando diferentes corrientes según lo que necesites: terapias de tercera generación, EMDR, técnicas de regulación emocional, mindfulness. Me adapto a ti, no al revés.',
  },
]

export default function PsicologaBarcelonaPage() {
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
                Psicóloga en Barcelona
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-texto font-light leading-[1.08] mb-6">
                Psicóloga en <span className="italic">Barcelona</span>
              </h1>
              <div className="w-16 h-px bg-verde mb-8" />
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-6">
                Soy Aitana Barreda, psicóloga general sanitaria con consulta en el
                barrio de Gràcia. Te acompaño en un proceso terapéutico basado en
                el respeto, la escucha activa y el rigor profesional.
              </p>
              <p className="font-body text-texto/65 text-base leading-[1.85] mb-8">
                Trabajo con personas que atraviesan momentos difíciles: ansiedad,
                trauma, depresión, problemas de autoestima o simplemente la sensación
                de estar atascado/a. Mi objetivo es ayudarte a entenderte mejor y
                a construir el cambio que necesitas.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/servicios#contacto"
                  className="inline-flex items-center gap-2 bg-texto text-fondo font-body text-[13px] font-medium tracking-wide px-7 py-3.5 hover:bg-texto/85 transition-colors duration-300"
                >
                  Pedir cita gratuita
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                <Link
                  href="/sobre-mi"
                  className="inline-flex items-center gap-2 border border-texto/20 text-texto font-body text-[13px] font-medium tracking-wide px-7 py-3.5 hover:border-texto/40 transition-colors duration-300"
                >
                  Sobre mí
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="relative">
                <div className="absolute top-6 -right-4 lg:-right-8 w-[85%] h-[90%] bg-verde-light/25" />
                <Image
                  src="/images/retrato-profesional-2.jpeg"
                  alt="Aitana Barreda, psicóloga en Barcelona"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover relative z-10"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Credenciales */}
      <section className="py-16 bg-verde-light/15">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <ScrollReveal>
              <p className="font-heading text-4xl text-texto font-light mb-2">Nº 31174</p>
              <p className="font-body text-texto/50 text-sm">Col·legi Oficial de Psicologia de Catalunya</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="font-heading text-4xl text-texto font-light mb-2">Gràcia</p>
              <p className="font-body text-texto/50 text-sm">Consulta en el corazón de Barcelona</p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-heading text-4xl text-texto font-light mb-2">Online</p>
              <p className="font-body text-texto/50 text-sm">Sesiones por videollamada</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 lg:py-28 bg-fondo">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-texto/40 mb-5">
              Especialidades
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.12] mb-12">
              ¿En qué puedo ayudarte?
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicios.map((servicio, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <Link
                  href={servicio.link}
                  className="block p-6 bg-rosa-light/10 hover:bg-rosa-light/20 transition-colors duration-300 group"
                >
                  <h3 className="font-heading text-xl text-texto font-medium mb-2 group-hover:text-verde transition-colors">
                    {servicio.titulo}
                  </h3>
                  <p className="font-body text-texto/60 text-sm leading-relaxed">
                    {servicio.descripcion}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirme */}
      <section className="py-20 lg:py-28 bg-texto text-fondo">
        <div className="max-w-4xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl font-light leading-[1.12] mb-12 text-center">
              Por qué elegirme como tu psicóloga
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                titulo: 'Enfoque personalizado',
                texto: 'No creo en las recetas únicas. Cada persona es diferente y la terapia debe adaptarse a ti, no al revés.',
              },
              {
                titulo: 'Espacio seguro',
                texto: 'Mi consulta es un lugar donde puedes ser tú, sin juicios. Todo lo que compartas se queda aquí.',
              },
              {
                titulo: 'Formación continua',
                texto: 'Me actualizo constantemente para ofrecerte las técnicas más efectivas basadas en evidencia científica.',
              },
              {
                titulo: 'Flexibilidad',
                texto: 'Sesiones presenciales en Gràcia u online. Horarios de mañana y tarde. Me adapto a tu vida.',
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="border-l-2 border-rosa/50 pl-6">
                  <h3 className="font-heading text-lg font-medium mb-2">{item.titulo}</h3>
                  <p className="font-body text-fondo/70 text-sm leading-relaxed">{item.texto}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-fondo">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.12] mb-10 text-center">
              Preguntas frecuentes
            </h2>
          </ScrollReveal>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="bg-verde-light/10 p-6 rounded-sm">
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
      <section className="py-20 lg:py-28 bg-rosa-light/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-texto font-light leading-[1.12] mb-6">
              ¿Empezamos?
            </h2>
            <p className="font-body text-texto/70 text-base mb-10 max-w-lg mx-auto leading-relaxed">
              La primera sesión es gratuita e informativa. Hablamos de lo que te trae,
              resolvemos dudas y vemos si conectamos. Sin compromiso.
            </p>
            <Link
              href="/servicios#contacto"
              className="inline-flex items-center gap-2 bg-texto text-fondo font-body text-[13px] font-medium tracking-wide px-7 py-3.5 hover:bg-texto/85 transition-colors duration-300"
            >
              Reservar primera cita gratuita
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
