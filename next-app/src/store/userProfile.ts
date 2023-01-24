import { atom } from 'recoil'

import { UserProfile } from 'services/auth'

export const UserProfileAtom = atom<UserProfile>({
  key: 'UserProfile',
  default: {
    email: '',
    name: '',
    profileImageUrl: '',
  },
})
