import type { UserProfile } from 'services/auth'

export const getFeedoongUrl = (userProfile?: UserProfile) => {
  const [emailId] = userProfile?.email.split('@') ?? ''
  return `feedoong.io/${emailId}`
}
