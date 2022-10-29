import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.url.includes('/mypage') && !request.cookies.get('token')) {
    return NextResponse.rewrite(new URL('/', request.url))
  }
}
