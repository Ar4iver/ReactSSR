import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../../store/slices/tokenSlice.ts'

export const useToken = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (window._token_) {
      dispatch(setToken(window._token_))
    }
  }, [dispatch])
}
