// import { atom, useRecoilState, useResetRecoilState } from 'recoil'
import type { UserProfile } from 'services/auth'

// type Profile = {
//   name: string
//   profileImageUrl: string
//   email: string
// }

// const profile = atom<Profile>({
//   key: 'profile',
//   default: {
//     name: '',
//     profileImageUrl: '',
//     email: '',
//   },
//   effects: [
//     ({ onSet }) => {
//       onSet((newProfile) => {
//         console.debug('profile: ', newProfile)
//       })
//     },
//   ],
// })

// export const useUserProfile = () => {
//   return useRecoilState(profile)
// }

// export const useResetUserProfile = () => {
//   return useResetRecoilState(profile)
// }

export const isUserProfileExist = (userProfile: UserProfile) => {
  return Object.values(userProfile).some(([v]) => !!v)
}

// export default profile
