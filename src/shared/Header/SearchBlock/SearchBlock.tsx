import React, { useContext } from 'react'
import styles from './searchblock.scss'
import { UserBlock } from '../UserBox/UserBlock.tsx'
import { userContext } from '../../context/userContext.tsx'

export function SearchBlock() {
  const { iconImg, name } = useContext(userContext)
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={iconImg} username={name} />
    </div>
  )
}
