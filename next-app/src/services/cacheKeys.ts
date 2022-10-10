export const cacheKeys = {
  feeds: ['feeds'],
  likedItems: ['likedItems'],
  likeItem: (id: number) => [...cacheKeys.likedItems, id],
  subscriptions: ['subscriptions'],
  preview: (url?: string) => ['channels', 'preview', url],
  signup: ['signup'],
  viewItem: (id: number) => ['viewItem', id],
}
