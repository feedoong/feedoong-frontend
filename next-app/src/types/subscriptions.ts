export interface Subscription {
  description: string
  feedUrl: string
  id: number
  title: string
  url: string
}

export interface Subscriptions {
  channels: Subscription[]
  totalCount: number
}
