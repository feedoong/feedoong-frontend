import api from 'services/api'
import type { Channels } from 'types/subscriptions'

export const getChannels = (page: number) => {
  return api.get<null, Channels>(`/subscriptions`, {
    params: { page },
  })
}

export const deleteChannel = (channelId: number) => {
  return api.delete(`/subscriptions/${channelId}`)
}

export const getChannelsByUsername = (page: number, username?: string) => {
  return api.get<null, Channels>(`/users/${username}/subscriptions`, {
    params: { page },
  })
}
