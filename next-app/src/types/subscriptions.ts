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
