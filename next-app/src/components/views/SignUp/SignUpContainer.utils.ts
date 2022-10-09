const { NEXT_PUBLIC_GOOGLE_CLIENT_ID } = process.env
const hostname = 'https://accounts.google.com/o/oauth2/v2/auth'

const clientId = NEXT_PUBLIC_GOOGLE_CLIENT_ID!
const redirectUri = 'http://localhost:3000/oauth'
const responseType = 'token'
const scope =
  'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile'

const query = new URLSearchParams({
  client_id: clientId,
  redirect_uri: redirectUri,
  response_type: responseType,
  scope,
})

console.log(query.toString())

export const googleAuthUrl = `${hostname}?${query.toString()}`
