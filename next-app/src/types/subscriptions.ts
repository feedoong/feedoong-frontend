export interface Subscription {
  description: string
  feedUrl: string
  id: number
  title: string
  url: string
  imageUrl: string
}

export interface PrivateSubscription extends Subscription {
  isViewed: boolean
  isLiked: boolean
}

export interface Subscriptions {
  channels: Subscription[]
  totalCount: number
}

export const isSubscription = (obj: any): obj is Subscription => {
  return obj.feedUrl
}
