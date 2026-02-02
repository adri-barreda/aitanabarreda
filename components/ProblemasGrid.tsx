import ScrollReveal from './ScrollReveal'

const problemas = [
  {
    num: '01',
    title: 'Ansiedad y estrés',
    description: 'Cuando la preocupación constante no te deja vivir con calma.',
  },
  {
    num: '02',
    title: 'Depresión y tristeza profunda',
    description: 'Si sientes un peso que no se va y has perdido la ilusión.',
  },
  {
    num: '03',
    title: 'Trauma y experiencias difíciles',
    description: 'Para procesar lo que ocurrió y dejar de cargar con ello.',
  },
  {
    num: '04',
    title: 'Alta sensibilidad',
    description: 'Entender tu forma de sentir como una fortaleza, no un problema.',
  },
  {
    num: '05',
    title: 'Problemas de autoestima',
    description: 'Reconectar con tu valor cuando la autocrítica se vuelve insoportable.',
  },
  {
    num: '06',
    title: 'Relaciones y vínculos',
    description: 'Comprender tus patrones relacionales y construir vínculos más sanos.',
  },
  {
    num: '07',
    title: 'Duelo y pérdidas',
    description: 'Acompañamiento en los procesos de despedida y transformación.',
  },
  {
    num: '08',
    title: 'Crecimiento personal',
    description: 'Conocerte mejor para tomar decisiones más alineadas contigo.',
  },
]

export default function ProblemasGrid() {
  return (
    <section className="py-24 lg:py-36 bg-fondo">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <ScrollReveal>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] text-texto font-light leading-[1.1] mb-6">
            Puedo acompañarte si...
          </h2>
          <div className="w-16 h-px bg-rosa mb-16 lg:mb-20" />
        </ScrollReveal>

        {/* Staggered two-column layout */}
        <div className="grid md:grid-cols-2 gap-x-16 lg:gap-x-24">
          {/* Left column — items 1,3,5,7 */}
          <div className="space-y-0">
            {problemas.filter((_, i) => i % 2 === 0).map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80}>
                <div className="group py-8 border-b border-texto/8 first:border-t first:border-texto/8">
                  <div className="flex items-baseline gap-5">
                    <span className="font-heading text-3xl lg:text-4xl text-rosa/50 font-light leading-none shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl lg:text-2xl font-medium text-texto leading-snug mb-1.5 group-hover:text-verde transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-texto/55 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Right column — items 2,4,6,8, offset down on desktop */}
          <div className="space-y-0 md:mt-16">
            {problemas.filter((_, i) => i % 2 === 1).map((item, i) => (
              <ScrollReveal key={item.num} delay={i * 80 + 120}>
                <div className="group py-8 border-b border-texto/8 first:border-t first:border-texto/8 md:first:border-t-0">
                  <div className="flex items-baseline gap-5">
                    <span className="font-heading text-3xl lg:text-4xl text-verde/40 font-light leading-none shrink-0">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl lg:text-2xl font-medium text-texto leading-snug mb-1.5 group-hover:text-verde transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-body text-sm text-texto/55 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
