import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { isLoginValidServerSide } from 'utils/auth'

export function middleware(request: NextRequest) {
  if (request.url.includes('/mypage')) {
    if (!isLoginValidServerSide(request)) {
      return NextResponse.rewrite(new URL('/', request.url))
    }
  }
  return NextResponse.next()
}
