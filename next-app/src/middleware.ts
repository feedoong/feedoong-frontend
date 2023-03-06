import { NextResponse, type NextRequest } from 'next/server'

import { ROUTE } from 'constants/route'
import { isLoginValidServerSide } from 'utils/auth'

export function middleware(request: NextRequest, response: NextResponse) {
  if (!isLoginValidServerSide(request)) {
    return NextResponse.redirect(
      new URL(ROUTE.RECOMMENDED_CHANNELS, request.url),
      302
    )
  }

  return NextResponse.next()
}

export const config = {
  // NOTE: 'features/auth/requiredAuthMatcher' 경로의 값을 사용할 경우 too_many_redirects 에러가 발생함
  matcher: ['/', '/mypage/:path*'],
}
