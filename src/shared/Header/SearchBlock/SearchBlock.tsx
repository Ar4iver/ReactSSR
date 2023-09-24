import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './searchblock.scss'
import { UserBlock } from '../UserBox/UserBlock.tsx'

interface ISearchBlockProps {
  token: string
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
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        console.log(resp)
      })
      .catch(console.log)
  }, [])
  return (
    <div className={styles.searchBlock}>
      <UserBlock />
    </div>
  )
}
