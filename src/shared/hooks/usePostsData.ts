import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { tokenContext } from '../context/tokenContext.ts'
import { IPost } from '../../types/types.ts'

export const usePostsData = () => {
  const [data, setData] = useState<IPost[]>([])
  const token = useContext(tokenContext)

  useEffect(() => {
    if (token && token !== 'undefined') {
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
    }
  }, [token])
  console.log(data)

  return [data]
}
