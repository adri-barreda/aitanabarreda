import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import PatientForm from './PatientForm'

export const metadata: Metadata = {
  title: 'Solicita tu consulta',
  description:
    'Rellena el formulario para solicitar tu primera consulta con Aitana Barreda, psicóloga en Barcelona.',
  alternates: {
    canonical: 'https://www.aitanabarredapsicologia.com/contacto',
  },
}

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-texto text-fondo">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 lg:py-32">
          <ScrollReveal>
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-fondo/40 mb-6">
              Primer paso
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-light leading-[1.1] max-w-lg">
              Solicita tu consulta
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Form section */}
      <section className="py-20 lg:py-28 bg-fondo">
        <div className="max-w-6xl mx-auto px-6 sm:px-10">
          <div className="grid lg:grid-cols-[1fr_45%] gap-16 lg:gap-24">
            {/* Left — Context */}
            <ScrollReveal>
              <div className="lg:sticky lg:top-24">
                <p className="font-body text-texto/60 text-base leading-[1.75] mb-8">
                  Si estás dando este paso, es porque algo dentro de ti ya sabe
                  que necesita ser escuchado.
                </p>
                <p className="font-body text-texto/60 text-base leading-[1.75] mb-8">
                  Rellena este formulario con tus datos y cuéntame brevemente
                  qué te trae aquí. Me pondré en contacto contigo para que
                  podamos hablar con calma.
                </p>
                <div className="border-t border-texto/10 pt-8 mt-12">
                  <p className="font-body text-[11px] tracking-[0.2em] uppercase text-texto/35 mb-4">
                    También puedes escribirme
                  </p>
                  <a
                    href="https://wa.me/34681328552"
                    className="inline-flex items-center gap-2 font-body text-[13px] font-medium text-texto border-b border-texto/30 pb-1 hover:border-texto transition-colors duration-300"
                  >
                    WhatsApp
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Right — Form */}
            <ScrollReveal delay={100}>
              <PatientForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
