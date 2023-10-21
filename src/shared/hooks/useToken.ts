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

// export const useToken = () => {
//   const [token, setToken] = useState(() => {
//     if (typeof window !== 'undefined') {
//       return localStorage.getItem('access_token') || ''
//     }
//     return ''
//   })

//   useEffect(() => {
//     if (typeof window !== 'undefined' && window._token_) {
//       setToken(window._token_)
//       localStorage.setItem('access_token', window._token_)
//     }
//   }, [])

//   return [token]
// }
