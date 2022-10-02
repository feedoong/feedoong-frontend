import qs from 'query-string'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { ApiResponseData } from 'types/common'
import { useSetRecoilState } from 'recoil'
import profile from 'store/atoms/profile'

interface SignUpResponse {
  accessToken: string
  name: string
  profileImageUrl: string
}

const Oauth = () => {
  const router = useRouter()
  const { fragmentIdentifier } = qs.parseUrl(router.asPath, {
    parseFragmentIdentifier: true,
  })
  const token = fragmentIdentifier?.split('&')[0].split('=')[1]
  const setProfile = useSetRecoilState(profile)

  const { data } = useQuery(
    ['/signup'],
    () =>
      axios.post(
        `https://api.feedoong.io/v1/auth/login/google?accessToken=${token}`
      ),
    {
      onSuccess: ({ data: response }: ApiResponseData<SignUpResponse>) => {
        Cookies.set('token', response.accessToken, {
          expires: 7,
          secure: true,
          sameSite: 'lax',
        })
        setProfile({
          name: response.name,
          profileImageUrl: response.profileImageUrl,
        })
        router.replace('/')
      },
    }
  )

  return null
}

export default Oauth
