import React, { useEffect, useState } from 'react'
import styles from './searchblock.scss'
import { UserBlock } from '../UserBox/UserBlock.tsx'
import axios from 'axios'

interface ISearchBlockProps {
  token: string | null
}

interface IUserData {
  name?: string
  iconImg?: string
}

export function SearchBlock({ token }: ISearchBlockProps) {
  const [data, setData] = useState<IUserData>({})
  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/api/v1/me', {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((res) => {
        const userData = res.data
        setData({ name: userData.name, iconImg: userData.icon_img })
      })
      .catch(console.log)
  }, [])

  return (
    <div className={styles.searchBlock}>
      <UserBlock />
    </div>
  )
}
