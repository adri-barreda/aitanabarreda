import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Servicios de terapia psicológica presencial en Barcelona y online. Descubre las modalidades de acompañamiento terapéutico y reserva tu primera sesión.',
  openGraph: {
    images: [{ url: '/images/og.png', width: 1200, height: 630, alt: 'Aitana Barreda - Psicóloga en Barcelona' }],
  },
}

export default function ServiciosPage() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-36 lg:pt-44 pb-16 lg:pb-20 bg-fondo">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-texto/40 mb-6">
            Servicios
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-texto font-light leading-[1.05] tracking-[-0.01em] max-w-2xl">
            Cómo puedo ayudarte
          </h1>
          <div className="w-16 h-px bg-verde mt-8 mb-8" />
          <p className="font-body text-texto/60 text-base leading-[1.8] max-w-lg">
            Ofrezco diferentes modalidades de acompañamiento terapéutico para
            que puedas elegir la que mejor se adapte a ti y a tu momento vital.
          </p>
        </div>
      </section>

      {/* ── Modalidades ── */}
      <section className="pb-24 lg:pb-36 bg-fondo">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Presencial — horizontal photo */}
            <ScrollReveal>
              <div className="group">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/escribiendo-espaldas.jpeg"
                    alt="Aitana escribiendo en clipboard durante sesión presencial"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="pt-7">
                  <h2 className="font-heading text-2xl lg:text-3xl font-medium text-texto mb-4">
                    Terapia presencial
                  </h2>
                  <p className="font-body text-texto/60 text-[15px] leading-[1.75] mb-5">
                    Las sesiones presenciales tienen lugar en mi consulta de
                    Barcelona, un espacio cálido y acogedor pensado para que te
                    sientas segura y acompañada desde el primer momento.
                  </p>
                  <ul className="space-y-2.5 font-body text-texto/50 text-[13px]">
                    <li className="flex items-baseline gap-3">
                      <span className="text-rosa shrink-0">—</span>
                      Conexión directa y presencia plena
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="text-rosa shrink-0">—</span>
                      Un espacio seguro fuera de tu día a día
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="text-rosa shrink-0">—</span>
                      Sesiones de 50 minutos
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            {/* Online — portrait photo, offset down for asymmetry */}
            <ScrollReveal delay={150} className="md:mt-16">
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/sobre-mi-historia.jpeg"
                    alt="Aitana en una sesión de terapia online con tablet"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="pt-7">
                  <h2 className="font-heading text-2xl lg:text-3xl font-medium text-texto mb-4">
                    Terapia online
                  </h2>
                  <p className="font-body text-texto/60 text-[15px] leading-[1.75] mb-5">
                    La terapia online te permite acceder al acompañamiento
                    terapéutico desde cualquier lugar, con la misma calidez y
                    profesionalidad que en consulta.
                  </p>
                  <ul className="space-y-2.5 font-body text-texto/50 text-[13px]">
                    <li className="flex items-baseline gap-3">
                      <span className="text-verde shrink-0">—</span>
                      Flexibilidad horaria y geográfica
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="text-verde shrink-0">—</span>
                      Desde la comodidad de tu espacio
                    </li>
                    <li className="flex items-baseline gap-3">
                      <span className="text-verde shrink-0">—</span>
                      Videollamada segura y confidencial
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Espacio ── */}
      <section className="py-24 lg:py-36 bg-verde-light/10 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-[1fr_40%] gap-10 lg:gap-16 items-start">
            {/* Left — text + dominant landscape image */}
            <div>
              <ScrollReveal>
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-texto/40 mb-5">
                  La consulta
                </p>
                <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] text-texto font-light leading-[1.1] mb-6">
                  Un espacio pensado para ti
                </h2>
                <p className="font-body text-texto/55 text-base leading-[1.75] max-w-xl mb-12">
                  Mi consulta es un lugar cálido, luminoso y seguro donde cada
                  detalle está pensado para que puedas sentirte cómoda y libre.
                </p>
              </ScrollReveal>

              {/* Hero image — wide landscape */}
              <ScrollReveal>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/espacio-cojines.jpeg"
                    alt="Cojines de colores en el suelo, espacio acogedor"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>

              {/* Small accent below — butaca */}
              <ScrollReveal delay={150}>
                <div className="relative aspect-[16/9] overflow-hidden mt-4 lg:mt-5 lg:w-[65%]">
                  <Image
                    src="/images/consulta-butaca.jpeg"
                    alt="Butaca con cojín y monstera en la consulta"
                    fill
                    sizes="(max-width: 1024px) 100vw, 35vw"
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right — portrait image with color block offset */}
            <ScrollReveal delay={200} className="lg:mt-32">
              <div className="relative">
                <div className="absolute -top-5 -right-5 lg:-top-7 lg:-right-7 w-[60%] h-[40%] bg-rosa-light/35" />
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/cojines-detalle.jpeg"
                    alt="Detalle de cojines teal y terracota"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Contacto (dark section) ── */}
      <section id="contacto" className="bg-texto py-24 lg:py-36">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <ScrollReveal>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-fondo/35 mb-5">
              Escríbeme
            </p>
            <h2 className="font-heading text-4xl sm:text-5xl text-fondo font-light leading-[1.1] mb-6">
              Contacto
            </h2>
            <div className="w-16 h-px bg-rosa mb-14 lg:mb-18" />
          </ScrollReveal>

          <div className="grid lg:grid-cols-[1fr_35%] gap-16 lg:gap-24">
            {/* Left — Form */}
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>

            {/* Right — Info */}
            <ScrollReveal delay={150}>
              <div className="space-y-10 lg:pt-2">
                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-verde-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  <div>
                    <p className="font-body text-[11px] tracking-[0.2em] uppercase text-fondo/40 mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/34681328552"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fondo/80 font-body text-[15px] hover:text-fondo transition-colors duration-200"
                    >
                      +34 681 32 85 52
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-verde-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <p className="font-body text-[11px] tracking-[0.2em] uppercase text-fondo/40 mb-1">Email</p>
                    <a
                      href="mailto:aitanapacientes@gmail.com"
                      className="text-fondo/80 font-body text-[15px] hover:text-fondo transition-colors duration-200"
                    >
                      aitanapacientes@gmail.com
                    </a>
                  </div>
                </div>

                {/* Dirección */}
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-verde-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  <div>
                    <p className="font-body text-[11px] tracking-[0.2em] uppercase text-fondo/40 mb-1">Dirección</p>
                    <a
                      href="https://www.google.com/maps/place/Carrer+de+l'Escorial,+11,+Gr%C3%A0cia,+08024+Barcelona"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fondo/80 font-body text-[15px] hover:text-fondo transition-colors duration-200 block"
                    >
                      C/ de l&apos;Escorial, 11
                      <br />
                      <span className="text-fondo/50">08024 Barcelona, Gràcia</span>
                    </a>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start gap-4">
                  <svg className="w-5 h-5 text-verde-light mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <div>
                    <p className="font-body text-[11px] tracking-[0.2em] uppercase text-fondo/40 mb-1">Horario</p>
                    <p className="text-fondo/80 font-body text-[15px]">Lunes a Viernes, 9:00 – 20:00</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Mapa ── */}
      <section className="bg-fondo">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 lg:py-20">
          <ScrollReveal>
            <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
              <div>
                <p className="font-body text-[11px] tracking-[0.3em] uppercase text-texto/40 mb-5">
                  Cómo llegar
                </p>
                <h3 className="font-heading text-3xl sm:text-4xl text-texto font-light leading-[1.15] mb-4">
                  La consulta
                </h3>
                <div className="w-12 h-px bg-verde mb-6" />
                <p className="font-body text-texto/60 text-[15px] leading-[1.75] mb-2">
                  C/ de l&apos;Escorial, 11
                </p>
                <p className="font-body text-texto/45 text-[14px] mb-6">
                  08024 Barcelona, Gràcia
                </p>
                <a
                  href="https://www.google.com/maps/place/Carrer+de+l'Escorial,+11,+Gr%C3%A0cia,+08024+Barcelona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-[13px] font-medium text-texto border-b border-texto/30 pb-1 hover:border-texto transition-colors duration-300"
                >
                  Abrir en Google Maps
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
              <div className="relative aspect-[4/3] lg:aspect-[16/11] overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.7!2d2.1620431!3d41.4061683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2bed265137d%3A0xe3bc85500bff023b!2sCarrer%20de%20l&#39;Escorial%2C%2011%2C%20Gr%C3%A0cia%2C%2008024%20Barcelona!5e0!3m2!1ses!2ses!4v1706000000000"
                  className="absolute inset-0 w-full h-full border-0 grayscale-[30%] contrast-[1.05]"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la consulta de Aitana Barreda en Gràcia, Barcelona"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-20 lg:py-28 bg-rosa-light/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-texto font-light leading-[1.12]">
              Pedir ayuda también es
              <br className="hidden sm:block" />
              <span className="italic"> cuidarte</span>
            </h2>
            <p className="font-body text-texto/55 text-base mt-5 mb-10 max-w-lg mx-auto leading-relaxed">
              No necesitas tenerlo todo claro para dar el primer paso.
              Escríbeme y buscamos juntas el mejor momento para empezar.
            </p>
            <a
              href="https://wa.me/34681328552"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-texto text-fondo font-body text-[13px] font-medium tracking-wide px-7 py-3.5 hover:bg-texto/85 transition-colors duration-300"
            >
              Escríbeme por WhatsApp
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
