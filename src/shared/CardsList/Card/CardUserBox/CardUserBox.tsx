import React from 'react'
import styles from './carduserbox.scss'
import Title from './Title/Title.tsx'
import { ICardUserBoxProps } from '../../../../types/types.ts'

export function CardUserBox({
  avatar,
  username,
  title,
  postId,
}: ICardUserBoxProps) {
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
      <Title postId={postId} title={title} />
    </div>
  )
}
