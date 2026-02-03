import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Aviso Legal y Política de Privacidad',
  description:
    'Aviso legal, política de privacidad y condiciones de uso del sitio web de Aitana Barreda, Psicóloga General Sanitaria en Barcelona.',
}

export default function AvisoLegalPage() {
  return (
    <section className="py-24 lg:py-32 bg-fondo">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        <ScrollReveal>
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-texto/40 mb-5">
            Legal
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl text-texto font-light leading-[1.1] mb-6">
            Aviso Legal y Política de Privacidad
          </h1>
          <div className="w-16 h-px bg-verde mb-12" />
        </ScrollReveal>

        <div className="space-y-12 font-body text-texto/70 text-base leading-[1.85]">
          <ScrollReveal>
            <section>
              <h2 className="font-heading text-2xl text-texto font-medium mb-4">
                1. Datos identificativos
              </h2>
              <p>
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de
                Servicios de la Sociedad de la Información y Comercio Electrónico, se
                informa:
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong className="text-texto">Titular:</strong> Aitana Barreda
                </li>
                <li>
                  <strong className="text-texto">Profesión:</strong> Psicóloga General
                  Sanitaria
                </li>
                <li>
                  <strong className="text-texto">Número de colegiada:</strong> 31174
                  (Col·legi Oficial de Psicologia de Catalunya)
                </li>
                <li>
                  <strong className="text-texto">Dirección:</strong> C/ de l&apos;Escorial,
                  11, 08024 Barcelona
                </li>
                <li>
                  <strong className="text-texto">Email:</strong>{' '}
                  <a
                    href="mailto:aitanapacientes@gmail.com"
                    className="text-verde hover:underline"
                  >
                    aitanapacientes@gmail.com
                  </a>
                </li>
                <li>
                  <strong className="text-texto">Teléfono:</strong>{' '}
                  <a href="tel:+34681328552" className="text-verde hover:underline">
                    +34 681 32 85 52
                  </a>
                </li>
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section>
              <h2 className="font-heading text-2xl text-texto font-medium mb-4">
                2. Política de privacidad
              </h2>
              <p className="mb-4">
                De conformidad con el Reglamento (UE) 2016/679 del Parlamento Europeo
                y del Consejo (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos
                Personales y garantía de los derechos digitales (LOPDGDD), te informamos:
              </p>
              <h3 className="font-heading text-lg text-texto font-medium mt-6 mb-2">
                Responsable del tratamiento
              </h3>
              <p>
                Aitana Barreda es la responsable del tratamiento de los datos
                personales que nos facilites.
              </p>
              <h3 className="font-heading text-lg text-texto font-medium mt-6 mb-2">
                Finalidad del tratamiento
              </h3>
              <p>Los datos recogidos a través del formulario de contacto se utilizan para:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Responder a tu consulta o solicitud de información</li>
                <li>Gestionar la solicitud de cita previa</li>
                <li>Enviarte información relacionada con los servicios solicitados</li>
              </ul>
              <h3 className="font-heading text-lg text-texto font-medium mt-6 mb-2">
                Base legal
              </h3>
              <p>
                El tratamiento de tus datos está basado en tu consentimiento, que nos
                otorgas al enviarnos el formulario de contacto.
              </p>
              <h3 className="font-heading text-lg text-texto font-medium mt-6 mb-2">
                Conservación de datos
              </h3>
              <p>
                Los datos personales proporcionados se conservarán mientras se
                mantenga la relación profesional o durante el tiempo necesario para
                cumplir con las obligaciones legales.
              </p>
              <h3 className="font-heading text-lg text-texto font-medium mt-6 mb-2">
                Derechos
              </h3>
              <p>Puedes ejercer tus derechos de:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>Acceso a tus datos personales</li>
                <li>Rectificación de datos inexactos</li>
                <li>Supresión de tus datos</li>
                <li>Oposición al tratamiento</li>
                <li>Limitación del tratamiento</li>
                <li>Portabilidad de los datos</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, puedes contactarnos en{' '}
                <a
                  href="mailto:aitanapacientes@gmail.com"
                  className="text-verde hover:underline"
                >
                  aitanapacientes@gmail.com
                </a>
                . También tienes derecho a presentar una reclamación ante la Agencia
                Española de Protección de Datos (
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-verde hover:underline"
                >
                  www.aepd.es
                </a>
                ).
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section>
              <h2 className="font-heading text-2xl text-texto font-medium mb-4">
                3. Propiedad intelectual
              </h2>
              <p>
                Todos los contenidos de este sitio web (textos, imágenes, diseño
                gráfico, logotipos, etc.) son propiedad de Aitana Barreda o de
                terceros que han autorizado su uso, y están protegidos por las leyes
                de propiedad intelectual. Queda prohibida su reproducción,
                distribución o modificación sin autorización expresa.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section>
              <h2 className="font-heading text-2xl text-texto font-medium mb-4">
                4. Secreto profesional
              </h2>
              <p>
                Como psicóloga colegiada, estoy sujeta al secreto profesional
                establecido en el Código Deontológico del Psicólogo. Toda la
                información compartida en las sesiones de terapia es estrictamente
                confidencial, salvo en los supuestos legalmente establecidos.
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section>
              <h2 className="font-heading text-2xl text-texto font-medium mb-4">
                5. Modificaciones
              </h2>
              <p>
                Nos reservamos el derecho de modificar esta política en cualquier
                momento. Las modificaciones entrarán en vigor desde su publicación en
                este sitio web.
              </p>
              <p className="mt-4 text-texto/50 text-sm">
                Última actualización: Febrero 2025
              </p>
            </section>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
