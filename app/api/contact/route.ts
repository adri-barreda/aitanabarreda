import { NextResponse } from 'next/server'

// Configuración de Resend (gratis hasta 3,000 emails/mes)
// 1. Crea cuenta en https://resend.com
// 2. Obtén tu API key en https://resend.com/api-keys
// 3. Añade RESEND_API_KEY a tus variables de entorno en Vercel

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono, mensaje } = body

    // Validación básica
    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Verificar que tenemos la API key de Resend
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error('RESEND_API_KEY no configurada')
      // En desarrollo, simulamos el envío exitoso
      if (process.env.NODE_ENV === 'development') {
        console.log('📧 Email simulado (dev mode):', { nombre, email, telefono, mensaje })
        return NextResponse.json({ success: true, dev: true })
      }
      return NextResponse.json(
        { error: 'Servicio de email no configurado' },
        { status: 500 }
      )
    }

    // Enviar email con Resend
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Aitana Barreda <contacto@aitanabarredapsicologia.com>',
        to: ['aitanapacientes@gmail.com'],
        subject: `Nueva consulta de ${nombre}`,
        html: `
          <h2>Nueva consulta desde la web</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono || 'No proporcionado'}</p>
          <hr />
          <p><strong>Mensaje:</strong></p>
          <p>${mensaje.replace(/\n/g, '<br />')}</p>
          <hr />
          <p style="color: #888; font-size: 12px;">
            Enviado desde aitanabarredapsicologia.com
          </p>
        `,
        reply_to: email,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Error de Resend:', errorData)
      return NextResponse.json(
        { error: 'Error al enviar el email' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error en API de contacto:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
