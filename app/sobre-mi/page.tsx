import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Sobre mí',
  description:
    'Conoce a Aitana Barreda, psicóloga General Sanitaria en Barcelona especializada en trauma, regulación emocional y crecimiento personal. Terapia integradora en un espacio seguro y libre de juicios.',
  openGraph: {
    images: [{ url: '/images/og.png', width: 1200, height: 630, alt: 'Aitana Barreda - Psicóloga en Barcelona' }],
  },
}

const timelineItems = [
  {
    year: '2016–2020',
    title: 'Grado en Psicología',
    description: 'Universitat de Barcelona',
  },
  {
    year: '2020–2022',
    title: 'Máster en Psicología General Sanitaria',
    description: 'Habilitación para el ejercicio profesional sanitario',
  },
  {
    year: '2022',
    title: 'Formación en EMDR',
    description: 'Especialización en el tratamiento del trauma y experiencias adversas',
  },
  {
    year: '2023',
    title: 'Formación en Terapia Breve Estratégica',
    description: 'Intervenciones focalizadas y orientadas a soluciones',
  },
  {
    year: '2023',
    title: 'Formación en Regulación Emocional',
    description: 'Herramientas para la gestión y comprensión del mundo emocional',
  },
  {
    year: '2020–Presente',
    title: 'Experiencia clínica',
    description:
      'Centros de salud mental públicos, asociaciones y consulta privada en Barcelona y online',
  },
]

export default function SobreMiPage() {
  return (
    <>
      {/* ── Hero + Historia ── */}
      <section className="relative bg-fondo overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_50%]">
          {/* Left — Text */}
          <div className="flex flex-col justify-center px-6 sm:px-10 lg:pl-16 xl:pl-24 2xl:pl-32 py-32 lg:py-20">
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-texto/40 mb-8">
              Sobre mí
            </p>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-texto font-light leading-[1.05] tracking-[-0.01em]">
              Hola, soy
              <br />
              Aitana
            </h1>
            <div className="w-16 h-px bg-verde mt-8 mb-8" />
            <div className="space-y-6 font-body text-texto/65 text-base leading-[1.85] max-w-md">
              <p>
                Soy psicóloga y una persona empática, amable y cercana. Me
                gusta crear espacios en los que las personas se sientan
                cómodas, escuchadas y seguras desde el primer momento, porque
                sé lo vulnerable que se siente una al otro lado.
              </p>
              <p>
                Soy de Castellón, aunque hace años me mudé a Barcelona para
                estudiar aquello que realmente me gustaba. La vida hizo que me
                quedara aquí y, con el tiempo, este lugar también se convirtió
                en mi hogar.
              </p>
              <p>
                Vengo de una familia de psicólogos y, desde pequeña, la
                psicología ha formado parte de mi vida. Recuerdo quedarme en
                la sala de espera de la consulta de mi madre mientras ella
                trabajaba; ahí nació mi curiosidad por entender a las personas
                y su mundo emocional.
              </p>
              <p>
                Hoy acompaño procesos terapéuticos desde una mirada sensible y
                respetuosa, ayudando a comprender el malestar y a tratarse con
                más amabilidad.
              </p>
            </div>
          </div>

          {/* Right — Photo bleeding off edge, taller */}
          <div className="relative h-[75vh] lg:h-auto lg:min-h-[110vh]">
            <Image
              src="/images/sobre-mi-hero.jpeg"
              alt="Aitana Barreda, psicóloga, sentada con clipboard y sonrisa natural"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
            />
            <div className="hidden lg:block absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-fondo to-transparent" />
          </div>
        </div>
      </section>

      {/* ── Formación ── */}
      <section className="py-24 lg:py-36 bg-fondo">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-texto/40 mb-5">
              Formación
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] text-texto font-light leading-[1.1] mb-6">
              Formación y experiencia
            </h2>
            <p className="font-body text-texto/55 text-base leading-[1.75] max-w-2xl mb-16 lg:mb-20">
              Cuando terminé la carrera, como les ocurre a muchas personas en
              esta profesión, sentía que necesitaba más herramientas para poder
              acompañar de verdad. A eso se suma que soy una persona curiosa y
              con muchas ganas de aprender, así que la formación continua se
              convirtió en una parte esencial de mi manera de trabajar.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-[1fr_38%] gap-12 lg:gap-20">
            {/* Left — Timeline */}
            <div>
              <div className="relative ml-3 border-l border-verde/30 pl-10">
                {timelineItems.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 80}>
                    <div className="group relative pb-12 last:pb-0">
                      {/* Dot */}
                      <span className="absolute -left-[calc(2.5rem+3px)] top-1 h-[7px] w-[7px] rounded-full border border-verde bg-fondo transition-colors duration-300 group-hover:bg-verde" />

                      <span className="font-body text-[12px] font-medium tracking-wide text-verde/80">
                        {item.year}
                      </span>
                      <h3 className="mt-1 font-heading text-xl font-medium text-texto leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 font-body text-[13px] leading-relaxed text-texto/55">
                        {item.description}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right — Accent image */}
            <ScrollReveal delay={200} className="hidden lg:block">
              <div className="sticky top-32">
                <Image
                  src="/images/manos-escribiendo.jpeg"
                  alt="Detalle de manos escribiendo en clipboard"
                  width={460}
                  height={620}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 lg:py-28 bg-rosa-light/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-texto font-light leading-[1.12]">
              ¿Quieres saber cómo trabajo?
            </h2>
            <p className="font-body text-texto/55 text-base mt-5 mb-10 max-w-lg mx-auto leading-relaxed">
              Descubre los servicios que ofrezco y encuentra el acompañamiento
              que mejor se adapte a ti.
            </p>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 bg-texto text-fondo font-body text-[13px] font-medium tracking-wide px-7 py-3.5 hover:bg-texto/85 transition-colors duration-300"
            >
              Ver servicios
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
