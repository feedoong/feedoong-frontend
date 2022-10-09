import api from 'services/api'

export interface SignUpResponse {
  accessToken: string
  name: string
  profileImageUrl: string
}

export const submitAccessToken = (token: string) => {
  return api.post<null, SignUpResponse>(`/auth/login/google`, null, {
    params: { accessToken: token },
  })
}
