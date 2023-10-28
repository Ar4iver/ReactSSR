import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setToken } from '../../store/slices/tokenSlice.ts'

export const useToken = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    if (window._token_ && window._token_ !== 'undefined') {
      localStorage.setItem('token', window._token_) //сохранил токен в локалку
      dispatch(setToken(window._token_)) //сохранил в редакс
    }
  }, [dispatch])
}
