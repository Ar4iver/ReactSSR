import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { saveToken, setToken } from '../../store/slices/tokenSlice.ts'

export const useToken = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (window._token_ && window._token_ !== 'undefined') {
      dispatch<any>(saveToken())
    }
  }, [dispatch])
}
