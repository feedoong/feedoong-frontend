// TODO: 키값 정리 필요
export const CACHE_KEYS = {
  feeds: ['feeds'],
  likedPosts: ['likedPosts'],
  likePost: (id: number) => [...CACHE_KEYS.likedPosts, id],
  channels: ['feeds', 'channels'],
  channel: (id: number) => [...CACHE_KEYS.channels, id],
  preview: (url?: string) => ['channels', 'preview', url],
  signup: ['signup'],
  me: ['me'],
  viewItem: (id: number) => ['viewItem', id],
  recommended: (slug: string[] = []) => ['feeds', 'recommended', ...slug],
  user: (username: string) => ['user', username],
}
