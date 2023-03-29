import type { Channel } from './subscriptions'

export interface Feed {
  items: Post[]
  channel: Channel
  next: number | null
  prev: number | null
  totalCount: 0
}

export interface Post {
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

export interface PrivatePost extends Post {
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

export interface LikePostResponse {
  isLiked: boolean
  itemId: number
}

export interface SubmitViewedPost {
  id: number
  isViewed: boolean
}
