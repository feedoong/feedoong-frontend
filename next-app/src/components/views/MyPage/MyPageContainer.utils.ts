import type { UserProfile } from 'services/auth'
import { MyPageListType, MY_PAGE_TABS } from './MyPageContainer'

export const getFeedoongUrl = (userProfile?: UserProfile) => {
  const [emailId] = userProfile?.email.split('@') ?? ''
  return `feedoong.io/${emailId}`
}

export const getSelectedTab = (currentTab?: MyPageListType) => {
  return MY_PAGE_TABS.find((tab) => tab.value === currentTab) || MY_PAGE_TABS[0]
}
