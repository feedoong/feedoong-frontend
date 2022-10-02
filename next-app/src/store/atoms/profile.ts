import { atom } from 'recoil'

type Profile = {
  name: string
  profileImageUrl: string
}

const profile = atom<Profile>({
  key: 'profile',
  default: {
    name: '',
    profileImageUrl: '',
  },
})

export default profile
