import React, { useEffect, useRef } from 'react'
import styles from './styles/post.scss'
import ReactDOM from 'react-dom'
import { ISinglePost } from '../../types/types'
import { CommentForm } from '../CommentForm/CommentForm.tsx'
import { CommentList } from '../CommentList/CommentList.tsx'

export const Post = ({ onClose, username }: ISinglePost) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose?.()
      }
    }

    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  const node = document.querySelector('#modal_root')
  if (!node) return null

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>Заголовок поста</h2>
      <div className={styles.content}>
        <p>Контент</p>
        <p>Контент</p>
        <p>Контент</p>
      </div>
      <CommentForm username={username} />
      <CommentList />
    </div>,
    node
  )
}
