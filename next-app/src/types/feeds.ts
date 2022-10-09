export interface Feed {
  items: Item[]
  totalCount: 0
}

export interface Item {
  description: string
  guid: string
  isLiked: boolean
  itemId: number
  link: string
  publishedAt: string // 2022-10-09T18:11:18.497Z
  title: string
}

export interface PreviewResponse {
  description: string
  imageUrl: string
  feedUrl: string
  title: string
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
