import type { UserProfile } from 'services/auth'

export const getFeedoongUrl = (userProfile?: UserProfile) => {
  return `https://feedoong.io/${userProfile?.username}`
}
