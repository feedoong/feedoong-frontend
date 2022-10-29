import api from 'services/api'

export const deleteAccount = () => {
  return api.delete<null, null>('/users')
}
