import { NextResponse, type NextRequest } from 'next/server'
import httpStatus from 'http-status-codes'

import { ROUTE } from 'constants/route'
import { isLoginValidServerSide } from 'utils/auth'

// 정적인 경로에 대해서만 처리가 가능해서 정말 필요한 기능인지 고민해볼 것
export const config = {
  matcher: ['/feed/me', '/mypage/:path*'],
}

export function middleware(request: NextRequest) {
  if (!isLoginValidServerSide(request)) {
    return NextResponse.redirect(
      new URL(ROUTE.INTRODUCE, request.url),
      httpStatus.MOVED_TEMPORARILY
    )
  }

  return NextResponse.next()
}
