import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-texto">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto] gap-12 md:gap-16 lg:gap-24">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block">
              <h3 className="font-heading text-2xl text-fondo font-light">
                Aitana Barreda
              </h3>
            </Link>
            <p className="font-body text-fondo/50 text-[13px] mt-2">
              Psicóloga General Sanitaria
            </p>
            <p className="font-body text-fondo/35 text-[12px] mt-1">
              Nº Colegiada: 31174
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-fondo/30 mb-5">
              Navegación
            </p>
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="font-body text-[13px] text-fondo/60 hover:text-fondo transition-colors duration-200">
                Inicio
              </Link>
              <Link href="/sobre-mi" className="font-body text-[13px] text-fondo/60 hover:text-fondo transition-colors duration-200">
                Sobre mí
              </Link>
              <Link href="/servicios" className="font-body text-[13px] text-fondo/60 hover:text-fondo transition-colors duration-200">
                Servicios
              </Link>
              <Link href="/servicios#contacto" className="font-body text-[13px] text-fondo/60 hover:text-fondo transition-colors duration-200">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-[10px] tracking-[0.25em] uppercase text-fondo/30 mb-5">
              Contacto
            </p>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:aitanapacientes@gmail.com"
                className="font-body text-[13px] text-fondo/60 hover:text-fondo transition-colors duration-200"
              >
                aitanapacientes@gmail.com
              </a>
              <a
                href="https://wa.me/34681328552"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[13px] text-fondo/60 hover:text-fondo transition-colors duration-200"
              >
                +34 681 32 85 52
              </a>
              <a
                href="https://www.instagram.com/ansioliti_ka/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[13px] text-fondo/60 hover:text-fondo transition-colors duration-200"
              >
                @ansioliti_ka
              </a>
              <p className="font-body text-[13px] text-fondo/40">
                Barcelona
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-fondo/8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-body text-[11px] text-fondo/30">
            &copy; {new Date().getFullYear()} Aitana Barreda
          </p>
          <Link
            href="/aviso-legal"
            className="font-body text-[11px] text-fondo/30 hover:text-fondo/60 transition-colors duration-200"
          >
            Aviso legal
          </Link>
        </div>
      </div>
    </footer>
  )
}
