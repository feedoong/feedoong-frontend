import { NextResponse, type NextRequest } from 'next/server'

import { isLoginValidServerSide } from 'utils/auth'

export function middleware(request: NextRequest) {
  const isStatic = request.nextUrl.pathname.includes('/_next')
  const isLoginProcess = request.nextUrl.pathname.includes('/oauth')

  const ignore = isStatic || isLoginProcess

  if (!ignore && !isLoginValidServerSide(request)) {
    return NextResponse.rewrite(new URL('/signup', request.url))
  }

  return NextResponse.next()
}
