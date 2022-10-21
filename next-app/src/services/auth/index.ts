import api from 'services/api'

export interface UserProfile {
  email: string
  name: string
  profileImageUrl: string
}

export interface SignUpResponse extends UserProfile {
  accessToken: string
}

export const submitAccessToken = (token: string) => {
  return api.post<null, SignUpResponse>(`/users/login/google`, null, {
    params: { accessToken: token },
  })
}

export const getUserInfo = () => {
  return api.get<null, UserProfile>(`/users/me`)
}
