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
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

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

      {/* RGPD */}
      <label className="flex items-start gap-3 cursor-pointer pt-2">
        <input
          type="checkbox"
          required
          checked={form.rgpd}
          onChange={(e) => setForm({ ...form, rgpd: e.target.checked })}
          className="mt-1 accent-texto"
        />
        <span className="font-body text-[13px] text-texto/45 leading-[1.6]">
          Acepto que mis datos sean tratados para gestionar mi consulta.
          No se compartirán con terceros.
        </span>
      </label>

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
