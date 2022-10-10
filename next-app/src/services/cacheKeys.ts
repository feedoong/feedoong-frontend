export const cacheKeys = {
  feeds: ['feeds'],
  likedItems: ['likedItems'],
  subscriptions: ['subscriptions'],
  preview: (url?: string) => ['channels', 'preview', url],
  signup: ['signup'],
}
