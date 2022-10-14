import api from 'services/api'
import type { Subscriptions } from 'types/subscriptions'

export const getSubscriptions = (page: number) => {
  return api.get<null, Subscriptions>(`/subscriptions`, {
    params: { page }
  })
}
