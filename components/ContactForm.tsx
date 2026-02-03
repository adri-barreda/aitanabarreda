'use client'

import { useState, FormEvent } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el mensaje')
      }

      setSubmitted(true)
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch {
      setError('Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo o contacta por WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  const inputClasses =
    'w-full bg-transparent border-b border-fondo/20 text-fondo font-body text-[15px] py-3 placeholder:text-fondo/30 focus:border-fondo/60 focus:outline-none transition-colors duration-300'

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label
          htmlFor="nombre"
          className="block font-body text-[11px] tracking-[0.2em] uppercase text-fondo/50 mb-3"
        >
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          required
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          className={inputClasses}
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-body text-[11px] tracking-[0.2em] uppercase text-fondo/50 mb-3"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={inputClasses}
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="telefono"
          className="block font-body text-[11px] tracking-[0.2em] uppercase text-fondo/50 mb-3"
        >
          Teléfono{' '}
          <span className="normal-case tracking-normal text-fondo/30">
            (opcional)
          </span>
        </label>
        <input
          id="telefono"
          type="tel"
          value={formData.telefono}
          onChange={(e) =>
            setFormData({ ...formData, telefono: e.target.value })
          }
          className={inputClasses}
          placeholder="681 328 552"
        />
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="block font-body text-[11px] tracking-[0.2em] uppercase text-fondo/50 mb-3"
        >
          Mensaje
        </label>
        <textarea
          id="mensaje"
          required
          rows={4}
          value={formData.mensaje}
          onChange={(e) =>
            setFormData({ ...formData, mensaje: e.target.value })
          }
          className={`${inputClasses} resize-none border rounded-none border-l-0 border-r-0 border-t-0`}
          placeholder="Cuéntame en qué puedo ayudarte..."
        />
      </div>

      <div className="pt-2">
        {error && (
          <p className="font-body text-red-400 text-sm mb-4">{error}</p>
        )}
        {submitted ? (
          <p className="font-body text-verde-light text-sm">
            Gracias por tu mensaje. Me pondré en contacto contigo pronto.
          </p>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 bg-fondo text-texto font-body text-[13px] font-medium tracking-wide px-7 py-3.5 hover:bg-rosa-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Enviando...' : 'Enviar mensaje'}
            {!loading && (
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="ml-1"
              >
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
        )}
      </div>
    </form>
  )
}
