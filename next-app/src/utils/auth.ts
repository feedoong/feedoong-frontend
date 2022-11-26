import type { NextRequest } from 'next/server'

import { AccessToken, RefreshToken } from 'constants/auth'

export const isLoginValidServerSide = (request: NextRequest) => {
  return request.cookies.get(AccessToken) || request.cookies.get(RefreshToken)
}
