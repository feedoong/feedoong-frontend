import { atom } from 'recoil'

type Profile = {
  name: string
  profileImageUrl: string
  email: string
}

const profile = atom<Profile>({
  key: 'profile',
  default: {
    name: '',
    profileImageUrl: '',
    email: '',
  },
  effects: [
    ({ setSelf, onSet }) => {
      onSet((newProfile) => {
        console.debug('profile: ', newProfile)
      })
    },
  ],
})

export default profile
