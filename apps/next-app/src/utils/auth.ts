import type { NextRequest } from 'next/server'
import Cookies from 'js-cookie'

import { AccessToken, RefreshToken } from 'constants/auth'
import api from 'services/api'
import { setAuthorizationHeader } from 'features/auth/token'

export const isLoginValidServerSide = (request: NextRequest) => {
  const accessToken = request.cookies.get(AccessToken)
  const refreshToken = request.cookies.get(RefreshToken)

  // Check if the access token is valid
  if (accessToken) {
    // TODO: Check if the access token is still valid
    return true
  }

  // Check if the refresh token is valid
  if (refreshToken) {
    // TODO: Use the refresh token to get a new access token
    return true
  }

  // If neither token is valid, the login is not valid
  return false
}

export const destroyTokensClientSide = () => {
  Cookies.remove(RefreshToken)
  Cookies.remove(AccessToken)

  setAuthorizationHeader(api, '')
  // TODO: Invalidate the tokens on the server
}
