import React, { useState } from 'react'
import styles from './styles/title.scss'
import { ICardUserBoxTitle } from '../../../../../types/types'
import { Post } from '../../../../Post/Post.tsx'

const Title = ({ title, username }: ICardUserBoxTitle) => {
  const [isModelOpened, setIsModelOpened] = useState(false)
  return (
    <h2 className={styles.title}>
      <a
        href="#post-url"
        className={styles.postLink}
        onClick={(event) => {
          event.preventDefault()
          setTimeout(() => {
            setIsModelOpened(true)
          }, 0)
        }}
      >
        {title}
      </a>
      {isModelOpened && (
        <Post
          username={username}
          onClose={() => {
            setIsModelOpened(false)
          }}
        />
      )}
    </h2>
  )
}

export default Title
