import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      nombre,
      email,
      telefono,
      edad,
      motivo,
      rgpd,
      consentimientoComunicacion,
      consentimientoOnline,
      consentimientoComercial,
    } = body

    if (!nombre || !email || !telefono || !edad || !motivo || !rgpd) {
      return NextResponse.json(
        { error: 'Todos los campos obligatorios deben estar completos' },
        { status: 400 }
      )
    }

    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      if (process.env.NODE_ENV === 'development') {
        console.log('📧 Email simulado (dev mode):', body)
        return NextResponse.json({ success: true, dev: true })
      }
      return NextResponse.json(
        { error: 'Servicio de email no configurado' },
        { status: 500 }
      )
    }

    const si = '✅ Sí'
    const no = '❌ No'

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Aitana Barreda <contacto@aitanabarredapsicologia.com>',
        to: ['aitanapacientes@gmail.com'],
        subject: `Nueva consulta de ${nombre}`,
        html: `
          <h2 style="font-family: Georgia, serif; font-weight: 300; color: #2D2D2D;">Nueva solicitud de consulta</h2>
          
          <table style="border-collapse: collapse; width: 100%; max-width: 500px; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 16px 8px 0; color: #888; font-size: 13px; vertical-align: top;">Nombre</td>
              <td style="padding: 8px 0; font-size: 15px; color: #2D2D2D;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 8px 16px 8px 0; color: #888; font-size: 13px; vertical-align: top;">Email</td>
              <td style="padding: 8px 0; font-size: 15px;"><a href="mailto:${email}" style="color: #2D2D2D;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 16px 8px 0; color: #888; font-size: 13px; vertical-align: top;">Teléfono</td>
              <td style="padding: 8px 0; font-size: 15px;"><a href="tel:${telefono}" style="color: #2D2D2D;">${telefono}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 16px 8px 0; color: #888; font-size: 13px; vertical-align: top;">Edad</td>
              <td style="padding: 8px 0; font-size: 15px; color: #2D2D2D;">${edad} años</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p style="color: #888; font-size: 13px; margin-bottom: 8px;">Motivo de consulta:</p>
          <p style="font-size: 15px; line-height: 1.6; color: #2D2D2D;">${motivo.replace(/\n/g, '<br />')}</p>

          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />

          <p style="color: #888; font-size: 13px; margin-bottom: 12px;">Consentimientos:</p>
          <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
            <tr>
              <td style="padding: 4px 0; font-size: 13px; color: #2D2D2D;">Protección de datos (RGPD)</td>
              <td style="padding: 4px 0; font-size: 13px; width: 60px;">${si}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-size: 13px; color: #2D2D2D;">Comunicación vía SMS/Email/WhatsApp</td>
              <td style="padding: 4px 0; font-size: 13px;">${consentimientoComunicacion ? si : no}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-size: 13px; color: #2D2D2D;">Sesiones no presenciales</td>
              <td style="padding: 4px 0; font-size: 13px;">${consentimientoOnline ? si : no}</td>
            </tr>
            <tr>
              <td style="padding: 4px 0; font-size: 13px; color: #2D2D2D;">Comunicaciones comerciales</td>
              <td style="padding: 4px 0; font-size: 13px;">${consentimientoComercial ? si : no}</td>
            </tr>
          </table>

          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="color: #aaa; font-size: 11px;">
            Enviado desde aitanabarredapsicologia.com/contacto · ${new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
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
