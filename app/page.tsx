import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/Hero'
import ProblemasGrid from '@/components/ProblemasGrid'
import BeneficiosList from '@/components/BeneficiosList'
import ScrollReveal from '@/components/ScrollReveal'

function Presentacion() {
  return (
    <section className="py-20 lg:py-32 bg-fondo overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-[45%_1fr] gap-10 lg:gap-20 items-start">
          {/* Image — offset with colored block behind */}
          <ScrollReveal className="relative">
            <div className="absolute top-6 -left-4 lg:-left-8 w-[85%] h-[90%] bg-verde-light/25" />
            <div className="relative">
              <Image
                src="/images/retrato-profesional-2.jpeg"
                alt="Aitana Barreda sonriendo en la consulta"
                width={540}
                height={810}
                className="w-full h-auto object-cover relative z-10"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={150} className="lg:pt-12">
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-texto/40 mb-6">
              Sobre mí
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[2.8rem] text-texto font-light leading-[1.15] mb-8">
              Hola, soy Aitana
            </h2>
            <div className="space-y-5 font-body text-texto/65 text-base leading-[1.75]">
              <p>
                Soy psicóloga general sanitaria. Te acompaño en un proceso
                terapéutico basado en el respeto, la escucha y el rigor
                profesional.
              </p>
              <p>
                Mi enfoque integra diferentes corrientes para adaptarme a lo que
                necesitas en cada momento. Creo que cada persona tiene su propio
                ritmo y que la terapia debe ser un espacio seguro donde puedas
                ser tú.
              </p>
            </div>
            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 mt-8 font-body text-[13px] font-medium text-texto border-b border-texto/30 pb-1 hover:border-texto transition-colors duration-300"
            >
              Mi historia completa
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function TextureDivider() {
  return (
    <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
      <Image
        src="/images/cojin-terracota.jpeg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-fondo/10" />
    </div>
  )
}

function CtaFinal() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-[1fr_45%] min-h-[70vh]">
        {/* Left — Text */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:pl-16 xl:pl-24 2xl:pl-32 py-20 lg:py-24 bg-texto">
          <ScrollReveal>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-fondo/40 mb-8">
              Primer paso
            </p>
            <blockquote className="font-heading text-3xl sm:text-4xl lg:text-5xl text-fondo font-light leading-[1.12] max-w-lg">
              Dar el primer paso
              <br />
              es un acto de
              <br />
              <span className="italic text-rosa-light">valentía</span>
            </blockquote>
            <p className="font-body text-fondo/50 text-base mt-8 mb-10 max-w-sm leading-relaxed">
              Estoy aquí para acompañarte. Escríbeme y encontramos juntas el
              mejor momento.
            </p>
            <Link
              href="/servicios#contacto"
              className="inline-flex items-center gap-2 bg-fondo text-texto font-body text-[13px] font-medium tracking-wide px-7 py-3.5 hover:bg-rosa-light transition-colors duration-300"
            >
              Pide tu cita
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>

        {/* Right — B/W portrait */}
        <div className="relative h-[60vh] lg:h-auto">
          <Image
            src="/images/perfil-bn.jpeg"
            alt="Aitana Barreda, perfil en blanco y negro"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Presentacion />
      <ProblemasGrid />
      <TextureDivider />
      <BeneficiosList />
      <CtaFinal />
    </>
  )
}
