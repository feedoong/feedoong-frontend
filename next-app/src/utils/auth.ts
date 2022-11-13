import type { NextRequest } from 'next/server'

import { AccessToken } from 'constants/auth'

export const isLoginValidServerSide = (request: NextRequest) => {
  return request.cookies.get(AccessToken)
}
