import type { NextRequest } from 'next/server'

export const isLoginValidServerSide = (request: NextRequest) => {
  return request.cookies.get('token')
}
