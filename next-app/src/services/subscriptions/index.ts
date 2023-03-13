import api from 'services/api'
import type { Subscriptions } from 'types/subscriptions'

export const getSubscriptions = (page: number) => {
  return api.get<null, Subscriptions>(`/subscriptions`, {
    params: { page },
  })
}

export const deleteSubscription = (channelId: number) => {
  return api.delete(`/subscriptions/${channelId}`)
}

export const getSubscriptionsByUsername = (page: number, username?: string) => {
  return api.get<null, Subscriptions>(`/users/${username}/subscriptions`, {
    params: { page },
  })
}
