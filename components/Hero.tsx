import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-fondo overflow-hidden">
      {/* Layout: text left, photo right bleeding off edge */}
      <div className="grid lg:grid-cols-[1fr_55%] min-h-[100svh]">
        {/* Left — Copy */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:pl-16 xl:pl-24 2xl:pl-32 py-32 lg:py-20 z-10 relative">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-texto/50 mb-8">
            Psicóloga General Sanitaria · Barcelona
          </p>

          <h1 className="font-heading text-[2.5rem] sm:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] leading-[1.08] text-texto font-light tracking-[-0.01em]">
            Entender lo que
            <br className="hidden sm:block" />
            {' '}te ocurre es el
            <br className="hidden sm:block" />
            {' '}primer paso para
            <br />
            <span className="italic font-normal text-verde">respetarte</span>
          </h1>

          <div className="mt-10 flex items-center gap-6">
            <Link
              href="/servicios#contacto"
              className="inline-flex items-center gap-2 bg-texto text-fondo font-body text-[13px] font-medium tracking-wide px-7 py-3.5 hover:bg-texto/85 transition-colors duration-300"
            >
              Reserva tu sesión
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-1">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/sobre-mi"
              className="font-body text-[13px] text-texto/60 hover:text-texto transition-colors duration-300 border-b border-texto/20 hover:border-texto/50 pb-0.5"
            >
              Conóceme
            </Link>
          </div>

          {/* Subtle detail line */}
          <div className="hidden lg:block absolute bottom-16 left-16 xl:left-24 2xl:left-32">
            <div className="flex items-center gap-3 text-texto/30">
              <div className="w-8 h-px bg-texto/20" />
              <span className="font-body text-[10px] tracking-[0.2em] uppercase">Scroll</span>
            </div>
          </div>
        </div>

        {/* Right — Photo, bleeds off right edge */}
        <div className="relative h-[70vh] lg:h-auto">
          <Image
            src="/images/retrato-profesional.jpeg"
            alt="Aitana Barreda, psicóloga en Barcelona"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-top"
          />
          {/* Soft gradient fade on left edge for text legibility */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-fondo to-transparent" />
        </div>
      </div>
    </section>
  )
}
