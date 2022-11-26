import type { NextRequest } from 'next/server'
import Cookies from 'js-cookie'

import { AccessToken, RefreshToken } from 'constants/auth'
import api from 'services/api'

export const isLoginValidServerSide = (request: NextRequest) => {
  return request.cookies.get(AccessToken) || request.cookies.get(RefreshToken)
}

export const destroyTokensClientSide = () => {
  Cookies.remove(RefreshToken)
  Cookies.remove(AccessToken)
  api.defaults.headers.common['Authorization'] = ''
}
