import { NextResponse, type NextRequest } from 'next/server'

import { isLoginValidServerSide } from 'utils/auth'

export function middleware(request: NextRequest) {
  if (!isLoginValidServerSide(request)) {
    return NextResponse.redirect(new URL('/introduce', request.url), {
      status: 302,
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/mypage/:path*'],
}
