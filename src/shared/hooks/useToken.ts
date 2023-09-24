import { useEffect, useState } from 'react'

export const useToken = () => {
  const [token, setToken] = useState('')

  useEffect(() => {
    if (window._token_) {
      setToken(window._token_)
    }
  }, [])

  return [token]
}
