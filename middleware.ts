import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const APEX_HOST = 'aitanabarredapsicologia.com'
const CANONICAL_HOST = `www.${APEX_HOST}`

export function middleware(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host')
  const hostHeader = request.headers.get('host')
  const requestHost = (forwardedHost ?? hostHeader ?? request.nextUrl.hostname).split(':')[0]
  const requestProto = request.headers.get('x-forwarded-proto') ?? request.nextUrl.protocol.replace(':', '')

  const needsHostRedirect = requestHost === APEX_HOST
  const needsProtocolRedirect = requestProto !== 'https'

  if (!needsHostRedirect && !needsProtocolRedirect) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.protocol = 'https'
  if (needsHostRedirect) {
    url.hostname = CANONICAL_HOST
  }

  return NextResponse.redirect(url, 308)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
