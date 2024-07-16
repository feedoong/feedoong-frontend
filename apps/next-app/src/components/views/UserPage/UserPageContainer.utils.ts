import { getDomainName } from 'envs'
import type { PublicUserInfoResponse } from 'services/types/_generated/apiDocumentation.schemas'

export const getFeedoongUrl = (userProfile?: PublicUserInfoResponse) => {
  return `${getDomainName()}/${userProfile?.username}`
}
