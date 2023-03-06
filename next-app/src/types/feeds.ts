export interface Feed {
  items: Item[]
  next: number | null
  prev: number | null
  totalCount: 0
}

export interface Item {
  imageUrl: string
  description: string
  guid: string
  id: number
  link: string
  publishedAt: string // 2022-10-09T18:11:18.497Z
  title: string
  channelImageUrl: string
  channelTitle: string
  channelId: string
}

export interface PrivateItem extends Item {
  isLiked: boolean
  isViewed: boolean
}

export interface PreviewResponse {
  description: string
  imageUrl: string
  feedUrl: string
  title: string
  url: string
}

export interface SubmitRssUrlParams {
  feedUrl: string
  url: string
}

export interface SubmitRssUrlResponse {
  channelId: 0
  createdAt: string // 2022-10-09T18:11:18.492Z
  link: string
}

export interface LikeItemResponse {
  isLiked: boolean
  itemId: number
}

export interface SubmitViewedItem {
  id: number
  isViewed: boolean
}
