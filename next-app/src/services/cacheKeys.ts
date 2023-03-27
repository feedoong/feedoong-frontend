export const CACHE_KEYS = {
  channels: ['channels'],
  feeds: ['feeds'],
  likedItems: ['likedItems'],
  likeItem: (id: number) => [...CACHE_KEYS.likedItems, id],
  subscriptions: ['feeds', 'subscriptions'],
  subscription: (id: number) => [...CACHE_KEYS.subscriptions, id],
  preview: (url?: string) => ['channels', 'preview', url],
  signup: ['signup'],
  me: ['me'],
  viewItem: (id: number) => ['viewItem', id],
  recommended: (slug: string[] = []) => ['feeds', 'recommended', ...slug],
  user: (username: string) => ['user', username],
}
