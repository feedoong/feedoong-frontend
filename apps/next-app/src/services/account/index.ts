import { feedoongApi } from 'services/api'

export const deleteAccount = () => {
  return feedoongApi<null>({
    method: 'DELETE',
    url: '/users',
  })
}
