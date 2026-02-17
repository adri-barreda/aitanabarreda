'use client'

import { useState, FormEvent } from 'react'

export default function PatientForm() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    edad: '',
    motivo: '',
    rgpd: false,
    consentimientoComunicacion: false,
    consentimientoOnline: false,
    consentimientoComercial: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [showLegal, setShowLegal] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Error al enviar')
      }

      setStatus('success')
    } catch (err: unknown) {
      setStatus('error')
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Ha ocurrido un error. Inténtalo de nuevo o contacta por WhatsApp.'
      )
    }
  }

  if (status === 'success') {
    return (
      <div className="py-12 text-center lg:text-left">
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-verde-light mb-6">
          Mensaje enviado
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl font-light text-texto leading-[1.15] mb-6">
          Gracias, {form.nombre.split(' ')[0]}
        </h2>
        <p className="font-body text-texto/60 text-base leading-[1.75]">
          He recibido tu mensaje. Me pondré en contacto contigo lo antes posible
          para que podamos hablar con calma.
        </p>
      </div>
    )
  }

  const inputClasses =
    'w-full bg-transparent border-b border-texto/15 text-texto font-body text-[15px] py-3 placeholder:text-texto/25 focus:border-texto/40 focus:outline-none transition-colors duration-300'

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <label
          htmlFor="nombre"
          className="block font-body text-[11px] tracking-[0.2em] uppercase text-texto/50 mb-3"
        >
          Nombre completo
        </label>
        <input
          id="nombre"
          type="text"
          required
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
          className={inputClasses}
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-body text-[11px] tracking-[0.2em] uppercase text-texto/50 mb-3"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClasses}
          placeholder="tu@email.com"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="telefono"
            className="block font-body text-[11px] tracking-[0.2em] uppercase text-texto/50 mb-3"
          >
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            required
            value={form.telefono}
            onChange={(e) => setForm({ ...form, telefono: e.target.value })}
            className={inputClasses}
            placeholder="600 000 000"
          />
        </div>
        <div>
          <label
            htmlFor="edad"
            className="block font-body text-[11px] tracking-[0.2em] uppercase text-texto/50 mb-3"
          >
            Edad
          </label>
          <input
            id="edad"
            type="number"
            required
            min={1}
            max={120}
            value={form.edad}
            onChange={(e) => setForm({ ...form, edad: e.target.value })}
            className={inputClasses}
            placeholder="30"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="motivo"
          className="block font-body text-[11px] tracking-[0.2em] uppercase text-texto/50 mb-3"
        >
          Motivo de consulta
        </label>
        <textarea
          id="motivo"
          required
          rows={4}
          value={form.motivo}
          onChange={(e) => setForm({ ...form, motivo: e.target.value })}
          className={`${inputClasses} resize-none border rounded-none border-l-0 border-r-0 border-t-0`}
          placeholder="Cuéntame brevemente qué te trae aquí..."
        />
      </div>

      {/* Consentimiento informado */}
      <div className="border-t border-texto/10 pt-6 space-y-5">
        <p className="font-body text-[11px] tracking-[0.2em] uppercase text-texto/50">
          Consentimiento informado
        </p>

        {/* Cláusula RGPD desplegable */}
        <div>
          <button
            type="button"
            onClick={() => setShowLegal(!showLegal)}
            className="flex items-center gap-2 font-body text-[13px] text-texto/50 hover:text-texto/70 transition-colors"
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className={`transition-transform duration-200 ${showLegal ? 'rotate-90' : ''}`}
            >
              <path d="M3 1l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Leer cláusula de protección de datos
          </button>

          {showLegal && (
            <div className="mt-4 p-5 bg-texto/[0.02] border border-texto/10 rounded-sm max-h-64 overflow-y-auto">
              <div className="font-body text-[12px] text-texto/50 leading-[1.8] space-y-3">
                <p>
                  De conformidad con los artículos 13 y 14 del REGLAMENTO (UE) 2016/679
                  General de Protección de Datos (RGPD), y del artículo 11 de la Ley Orgánica
                  3/2018 de protección de Datos Personales y garantía de los derechos digitales
                  (LOPDGDD) en relación con el tratamiento de sus datos personales y a la libre
                  circulación de estos datos:
                </p>
                <p>
                  <strong className="text-texto/65">Responsable:</strong> AITANA BARREDA TENA,
                  dirección: Calle Travessera de Gracia 449, 2-3, 08025, Barcelona,
                  correo electrónico: aitanapsileopsicologia@gmail.com
                </p>
                <p>
                  <strong className="text-texto/65">Finalidades:</strong> Gestionar los servicios
                  sanitarios y/o asistenciales solicitados o contratados por el/la paciente,
                  gestiones administrativas (facturación, contabilidad, etc.) y, en su caso,
                  gestión de las promociones comerciales y/o comunicaciones relativas a los
                  servicios y/o productos contratados o solicitados.
                </p>
                <p>
                  <strong className="text-texto/65">Legitimación:</strong> La base jurídica se basa
                  en la prestación de asistencia o tratamiento de tipo sanitario o social, en la
                  ejecución del contrato suscrito entre el interesado y el responsable del
                  tratamiento, el consentimiento expreso del interesado, y el cumplimiento de
                  obligaciones legales aplicables (Ley 14/1986, General de Sanidad; Ley 41/2002,
                  reguladora de la autonomía del paciente).
                </p>
                <p>
                  <strong className="text-texto/65">Conservación:</strong> Durante la vigencia del
                  acuerdo asistencial y según las exigencias de la Ley reguladora de la autonomía
                  del paciente. Datos comerciales: cuando el usuario solicite su baja.
                </p>
                <p>
                  <strong className="text-texto/65">Cesiones:</strong> Se cederán datos a terceros
                  para el cumplimiento de las obligaciones legales aplicables (autoridades públicas)
                  y/o contractuales (colaboradores con contratos de encargado de tratamiento).
                </p>
                <p>
                  <strong className="text-texto/65">Derechos:</strong> Puede ejercer los derechos
                  de acceso, rectificación, supresión, oposición, limitación y portabilidad
                  respecto de sus datos personales por escrito dirigido al responsable del
                  tratamiento. En caso de disconformidad, tiene derecho a presentar una
                  reclamación ante la AEPD.
                </p>
                <p>
                  <strong className="text-texto/65">Categoría de datos:</strong> Datos
                  identificativos, económicos y de salud. Puede retirar el consentimiento
                  en cualquier momento.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Checkbox obligatorio */}
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={form.rgpd}
            onChange={(e) => setForm({ ...form, rgpd: e.target.checked })}
            className="mt-1 accent-texto"
          />
          <span className="font-body text-[13px] text-texto/55 leading-[1.6]">
            He leído y acepto la cláusula de protección de datos. <span className="text-texto/35">*Obligatorio</span>
          </span>
        </label>

        {/* Consentimientos opcionales */}
        <div className="space-y-3 pl-0.5">
          <p className="font-body text-[11px] tracking-[0.15em] uppercase text-texto/35 mt-4 mb-2">
            Consentimientos adicionales (opcionales)
          </p>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consentimientoComunicacion}
              onChange={(e) => setForm({ ...form, consentimientoComunicacion: e.target.checked })}
              className="mt-1 accent-texto"
            />
            <span className="font-body text-[13px] text-texto/45 leading-[1.6]">
              Doy mi consentimiento para la comunicación vía SMS, correo electrónico
              o WhatsApp para la planificación y gestión de las visitas.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consentimientoOnline}
              onChange={(e) => setForm({ ...form, consentimientoOnline: e.target.checked })}
              className="mt-1 accent-texto"
            />
            <span className="font-body text-[13px] text-texto/45 leading-[1.6]">
              Doy mi consentimiento para la realización de sesiones no presenciales,
              mediante conexión remota o telemática.
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={form.consentimientoComercial}
              onChange={(e) => setForm({ ...form, consentimientoComercial: e.target.checked })}
              className="mt-1 accent-texto"
            />
            <span className="font-body text-[13px] text-texto/45 leading-[1.6]">
              Doy mi consentimiento para recibir informaciones comerciales de Aitana Barreda Psicología.
            </span>
          </label>
        </div>
      </div>

      {status === 'error' && (
        <p className="font-body text-red-500/80 text-sm">{errorMsg}</p>
      )}

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-2 bg-texto text-fondo font-body text-[13px] font-medium tracking-wide px-7 py-3.5 hover:bg-texto/85 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Enviando...' : 'Enviar solicitud'}
          {status !== 'loading' && (
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="ml-1">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>
    </form>
  )
}
