import ScrollReveal from './ScrollReveal'

const beneficios = [
  {
    num: '01',
    title: 'Escucha sin juicio',
    description:
      'Un espacio donde puedes expresarte libremente, sin miedo a ser evaluada o corregida.',
  },
  {
    num: '02',
    title: 'Un espacio seguro',
    description:
      'Confidencialidad, respeto y calidez como base de todo el proceso terapéutico.',
  },
  {
    num: '03',
    title: 'Herramientas prácticas',
    description:
      'Recursos que puedes aplicar en tu día a día, no solo reflexión sino también acción.',
  },
  {
    num: '04',
    title: 'Perspectiva integradora',
    description:
      'Combino diferentes enfoques terapéuticos para adaptarme a lo que necesitas.',
  },
  {
    num: '05',
    title: 'Tu ritmo',
    description:
      'Cada persona tiene su tiempo. Aquí no hay prisas ni fórmulas universales.',
  },
]

export default function BeneficiosList() {
  return (
    <section className="py-24 lg:py-36 bg-verde-light/15">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <ScrollReveal>
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-texto/40 mb-5">
            Mi enfoque
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] text-texto font-light leading-[1.1] max-w-xl">
            Lo que encontrarás en terapia conmigo
          </h2>
          <div className="w-16 h-px bg-verde mt-6 mb-16 lg:mb-20" />
        </ScrollReveal>

        {/* Horizontal list with large numbers */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {beneficios.map((item, i) => (
            <ScrollReveal key={item.num} delay={i * 100}>
              <div className="group">
                <span className="block font-heading text-[3.5rem] lg:text-[4rem] leading-none font-light text-verde/25 mb-3 transition-colors duration-500 group-hover:text-verde/50">
                  {item.num}
                </span>
                <h3 className="font-heading text-lg font-semibold text-texto leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-[13px] text-texto/55 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
