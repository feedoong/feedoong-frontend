import api from 'services/api'
import type { Subscriptions } from 'types/subscriptions'

export const getSubscriptions = () => {
  return api.get<null, Subscriptions>(`/subscriptions`)
}
