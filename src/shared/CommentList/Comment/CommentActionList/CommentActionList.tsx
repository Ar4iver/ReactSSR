import React, { useState } from 'react'
import styles from './styles/commentActionList.scss'
import { Button } from '../../../ui/Button/Button.tsx'
import {
  CommentIcon,
  ReportIcon,
  ShareIconMenu,
} from '../../../icons/icons.tsx'
import { CommentForm } from '../../../CommentForm/CommentForm.tsx'

export interface ICommentActionListProps {
  username: string
}

export const CommentActionsList = ({ username }: ICommentActionListProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <>
      <ul className={styles.commentsList}>
        <li className={styles.commentsItem}>
          <Button onClick={handleClick}>
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
      {isOpen && <CommentForm username={username} />}
    </>
  )
}
