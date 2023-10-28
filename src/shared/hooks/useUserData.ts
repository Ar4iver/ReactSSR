import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

interface IUserData {
  name?: string
  iconImg?: string
}

export const useUserData = () => {
  const [data, setData] = useState<IUserData>({})
  const token = useSelector<RootState>((state) => state.token.token)

  useEffect(() => {
    if (token && token !== 'undefined') {
      axios
        .get('https://oauth.reddit.com/api/v1/me?raw_json=1', {
          headers: { Authorization: `bearer ${token}` },
        })
        .then((res) => {
          const userData = res.data
          setData({ name: userData.name, iconImg: userData.icon_img })
        })
        .catch()
    }
  }, [token])

  return [data]
}
