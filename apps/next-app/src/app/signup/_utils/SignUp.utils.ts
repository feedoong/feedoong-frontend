import { getDomainName } from 'envs'

const hostname = 'https://accounts.google.com/o/oauth2/v2/auth'

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!
const redirectUri = `${getDomainName()}/oauth`
const responseType = 'token'
const scope =
  'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'

const query = new URLSearchParams({
  client_id: clientId,
  redirect_uri: redirectUri,
  response_type: responseType,
  scope,
})

export const googleAuthUrl = `${hostname}?${query.toString()}`
