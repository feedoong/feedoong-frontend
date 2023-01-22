export interface Subscription {
  description: string
  feedUrl: string
  id: number
  title: string
  url: string
  imageUrl: string
}

export interface Subscriptions {
  channels: Subscription[]
  totalCount: number
}

export const isSubscription = (obj: any): obj is Subscription => {
  return (
    obj &&
    obj.description &&
    obj.feedUrl &&
    obj.id &&
    obj.title &&
    obj.url &&
    obj.imageUrl
  )
}
