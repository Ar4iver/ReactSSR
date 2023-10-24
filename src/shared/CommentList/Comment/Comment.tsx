import React from 'react'
import styles from './styles/comment.scss'
import { KarmaCounter } from '../../KarmaCounter/KarmaCounter.tsx'
import { CommentActionsList } from './CommentActionList/CommentActionList.tsx'

export interface ICommentItemProps {
  avatarImg: string
  username: string
  body: string
  createdAt: string
  group: string
}

export const CommentItem = ({
  avatarImg,
  username,
  body,
  createdAt,
  group,
}: ICommentItemProps) => {
  return (
    <li className={styles.item}>
      <div className={styles.karmaCounterContainer}>
        <div>
          <KarmaCounter />
          <div className={styles.leftBorder}></div>
        </div>
      </div>
      <div className={styles.userData}>
        <div>
          <img
            width={20}
            height={20}
            src={avatarImg}
            alt="avatar"
            className={styles.avatar}
          />
        </div>
        <div>
          <a className={styles.username}>{username}</a>
        </div>
        <div className={styles.createdAt}>
          <span className={styles.publishedLabel}>{createdAt}</span>
        </div>
        <div className={styles.group}>
          <span>{group}</span>
        </div>
      </div>
      <div>
        <p className={styles.CommentText}>{body}</p>
      </div>
      <CommentActionsList username={username} />
    </li>
  )
}
