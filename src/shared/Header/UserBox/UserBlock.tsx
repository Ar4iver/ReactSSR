import React from 'react'
import styles from './userblock.scss'
import { IconAnon } from '../../icons/icons.tsx'

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  const CLIENT_ID = process.env.CLIENT_ID
  const REDIRECT_URI = process.env.REDIRECT_URI

  return (
    <a
      href={`https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=code&state=random_string&redirect_uri=${REDIRECT_URI}&duration=permanent&scope=read submit identity`}
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="user avatar"
            className={styles.avatarImage}
          />
        ) : (
          <IconAnon />
        )}
      </div>

      <div className={styles.username}>
        <span>{username || 'Аноним'}</span>
      </div>
    </a>
  )
}
