import { Item } from './feeds'

export type Recommendations = {
  channels: [
    {
      description: string
      feedUrl: string
      id: number
      imageUrl: string
      title: string
      url: string
    }
  ]
  items: [
    {
      channelId: string
      channelImageUrl: string
      channelTitle: string
      description: string
      guid: string
      id: number
      imageUrl: string
      link: string
      publishedAt: string
      title: string
    }
  ]
}

export type RecommendationItem = Exclude<Item, 'isViewed' | 'isLiked'>
