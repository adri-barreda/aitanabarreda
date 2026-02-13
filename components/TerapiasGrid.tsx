import Link from 'next/link'
import ScrollReveal from './ScrollReveal'

const terapias = [
  {
    num: '01',
    title: 'Ansiedad y estrés',
    description: 'Cuando la preocupación constante no te deja vivir con calma.',
    link: '/terapias/ansiedad-barcelona',
  },
  {
    num: '02',
    title: 'Depresión y tristeza profunda',
    description: 'Si sientes un peso que no se va y has perdido la ilusión.',
    link: '/terapias/depresion-barcelona',
  },
  {
    num: '03',
    title: 'Trauma y experiencias difíciles',
    description: 'Para procesar lo que ocurrió y dejar de cargar con ello.',
    link: '/terapias/trauma-barcelona',
  },
  {
    num: '04',
    title: 'Alta sensibilidad',
    description: 'Entender tu forma de sentir como una fortaleza, no un problema.',
    link: '/terapias/alta-sensibilidad-barcelona',
  },
  {
    num: '05',
    title: 'Problemas de autoestima',
    description: 'Reconectar con tu valor cuando la autocrítica se vuelve insoportable.',
    link: '/terapias/autoestima-barcelona',
  },
  {
    num: '06',
    title: 'Relaciones y vínculos',
    description: 'Comprender tus patrones relacionales y construir vínculos más sanos.',
    link: '/terapias/relaciones-pareja-barcelona',
  },
  {
    num: '07',
    title: 'Duelo y pérdidas',
    description: 'Acompañamiento en los procesos de despedida y transformación.',
    link: '/terapias/duelo-barcelona',
  },
  {
    num: '08',
    title: 'Crecimiento personal',
    description: 'Conocerte mejor para tomar decisiones más alineadas contigo.',
    link: '/terapias/crecimiento-personal-barcelona',
  },
]

function TerapiaItem({ item, isRight, delay }: { item: typeof terapias[number]; isRight: boolean; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <Link
        href={item.link}
        aria-label={`Ver página sobre ${item.title}`}
        className="group block py-8 border-b border-texto/8"
      >
        <div className="flex items-baseline gap-5">
          <span className={`font-heading text-3xl lg:text-4xl font-light leading-none shrink-0 ${isRight ? 'text-verde/40' : 'text-rosa/50'}`}>
            {item.num}
          </span>
          <div>
            <h3 className="font-heading text-xl lg:text-2xl font-medium text-texto leading-snug mb-1.5 group-hover:text-verde transition-colors duration-300">
              {item.title}
            </h3>
            <p className="font-body text-sm text-texto/55 leading-relaxed">
              {item.description}
            </p>
            <p className="font-body text-[12px] uppercase tracking-[0.18em] text-texto/45 mt-4 group-hover:text-verde transition-colors duration-300">
              Ver terapia
            </p>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  )
}

export default function TerapiasGrid() {
  const left = terapias.filter((_, i) => i % 2 === 0)
  const right = terapias.filter((_, i) => i % 2 === 1)

  return (
    <section className="py-24 lg:py-36 bg-fondo">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <ScrollReveal>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] text-texto font-light leading-[1.1] mb-6">
            Puedo acompañarte si...
          </h2>
          <div className="w-16 h-px bg-rosa mb-16 lg:mb-20" />
        </ScrollReveal>

        {/* Mobile: sequential order 1-8 */}
        <div className="md:hidden space-y-0">
          {terapias.map((item, i) => (
            <TerapiaItem key={item.num} item={item} isRight={i % 2 === 1} delay={i * 60} />
          ))}
        </div>

        {/* Desktop: staggered two columns (odd left, even right offset) */}
        <div className="hidden md:grid md:grid-cols-2 gap-x-16 lg:gap-x-24">
          <div className="space-y-0">
            {left.map((item, i) => (
              <TerapiaItem key={item.num} item={item} isRight={false} delay={i * 80} />
            ))}
          </div>
          <div className="space-y-0 mt-16">
            {right.map((item, i) => (
              <TerapiaItem key={item.num} item={item} isRight={true} delay={i * 80 + 120} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
