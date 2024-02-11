import { getDomainName } from 'envs'
import type { UserProfile } from 'services/auth'

export const getFeedoongUrl = (userProfile?: UserProfile) => {
  return `${getDomainName()}/${userProfile?.username}`
}
