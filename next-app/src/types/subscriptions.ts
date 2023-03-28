export interface Channel {
  description: string
  feedUrl: string
  id: number
  title: string
  url: string
  imageUrl: string
  isSubscribed: boolean
}

export interface PrivateChannel extends Channel {
  isViewed: boolean
  isLiked: boolean
}

export interface Channels {
  channels: Channel[]
  totalCount: number
}

export const isChannel = (obj: any): obj is Channel => {
  return obj.feedUrl
}
