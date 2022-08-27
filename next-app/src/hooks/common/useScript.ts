import { useEffect, useState } from 'react'

const useScript = (url: string) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const script = document.createElement('script')

    script.src = url
    script.async = true
    script.defer = true

    script.onload = () => {
      setLoaded(true)
    }

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url])

  return { loaded }
}

export default useScript
