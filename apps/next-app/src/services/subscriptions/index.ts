import { feedoongApi } from 'services/api'
import type { Channels } from 'types/subscriptions'

export const getChannels = (page: number) => {
  return feedoongApi<Channels>({
    url: `/subscriptions`,
    params: { page },
  })
}

export const deleteChannel = (channelId: number) => {
  return feedoongApi({
    url: `/subscriptions/${channelId}`,
    method: 'DELETE',
  })
}

export const getChannelsByUsername = (page: number, username?: string) => {
  return feedoongApi<Channels>({
    url: `/users/${username}/subscriptions`,
    params: { page },
  })
}
