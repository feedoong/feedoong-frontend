import api from 'services/api'

interface Feed {
  items: Item[]
  totalCount: 0
}

interface Item {
  description: string
  guid: string
  isLiked: boolean
  itemId: number
  link: string
  publishedAt: string // 2022-10-09T18:11:18.497Z
  title: string
}

export const getFeeds = () => {
  return api.get<Feed[]>(`/items`)
}
