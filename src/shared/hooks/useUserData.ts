import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../types/types.ts'
import { setUser, setUserError } from '../../store/slices/userSlice.ts'

interface IUserData {
  name?: string
  iconImg?: string
}

export const useUserData = () => {
  const data = useSelector<RootState, IUserData>((state) => state.user)
  const token = useSelector<RootState>((state) => state.token.token)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!token) return

    dispatch({ type: 'ME_REQUEST' })
    if (token && token !== 'undefined') {
      axios
        .get('https://oauth.reddit.com/api/v1/me?raw_json=1', {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((res) => {
          const userData = res.data
          dispatch(setUser({ name: userData.name, iconImg: userData.icon_img }))
        })
        .catch((error) => {
          console.log('ошибка')
          dispatch(setUserError(error))
        })
    }
  }, [token])

  return [data]
}
