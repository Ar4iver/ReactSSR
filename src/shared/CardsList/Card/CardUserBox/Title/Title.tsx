import React from 'react'
import styles from './styles/title.scss'
import { ICardUserBoxTitle } from '../../../../../types/types'
import { Link } from 'react-router-dom'

const Title = ({ title, postId }: ICardUserBoxTitle) => {
  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${postId}`} className={styles.postLink}>
        {title}
      </Link>
    </h2>
  )
}

export default Title
