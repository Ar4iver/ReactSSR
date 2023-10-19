import React from 'react'
import styles from './carduserbox.scss'
import { ICardUserProps } from '../../../../types/types'

export function CardUserBox({ avatar, username, title }: ICardUserProps) {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src={avatar} alt="avatar" />
          <a className={styles.username} href="#user-url">
            {username}
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>опубликовано </span>4 часа
          назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          {title}
        </a>
      </h2>
    </div>
  )
}
