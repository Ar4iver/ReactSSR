import React from 'react'
import styles from './styles/commentActionList.scss'
import { Button } from '../../../ui/Button/Button.tsx'
import {
  CommentIcon,
  ReportIcon,
  ShareIconMenu,
} from '../../../icons/icons.tsx'

export interface ICommentActionListProps {
  username: string
}

export const CommentActionsList = ({ username }: ICommentActionListProps) => {
  return (
    <ul className={styles.commentsList}>
      <li className={styles.commentsItem}>
        <Button>
          <CommentIcon />
          <span>Ответить</span>
        </Button>
      </li>
      <li className={styles.commentsItem}>
        <Button>
          <ShareIconMenu />
          <span>Поделиться</span>
        </Button>
      </li>
      <li className={styles.commentsItem}>
        <Button>
          <ReportIcon />
          <span>Пожаловаться</span>
        </Button>
      </li>
    </ul>
  )
}
