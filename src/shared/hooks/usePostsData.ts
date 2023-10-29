import { useEffect, useState } from 'react'
import axios from 'axios'
import { IPost } from '../../types/types.ts'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../store/slices/tokenSlice.ts'
import { RootState } from '../../types/types.ts'

export const usePostsData = () => {
  const dispatch = useDispatch()
  const token = useSelector<RootState>((state) => state.token.token)
  const [data, setData] = useState<IPost[]>([])

  useEffect(() => {
    if (token && token !== 'undefined') {
      dispatch(setLoading(true))
      axios
        .get('https://oauth.reddit.com/best.json?sr_detail=true', {
          headers: { Authorization: `bearer ${token}` },
          params: {
            limit: 25,
          },
        })
        .then((res) => {
          const postsData = res.data.data.children
          console.log(postsData)
          setData(postsData)
        })
        .catch()
      dispatch(setLoading(false))
    }
  }, [token, dispatch])

  return [data]
}
