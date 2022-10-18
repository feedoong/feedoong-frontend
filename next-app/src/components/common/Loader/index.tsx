import Cookies from 'js-cookie'
import { useEffect } from 'react'

const TokenLoader = () => {
  useEffect(() => {
    const token = Cookies.get('token') as string

    /**
     * some profile fetch logic
     */

    console.log(token)
  }, [])

  return null
}

export default TokenLoader
