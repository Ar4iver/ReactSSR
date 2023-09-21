import React from 'react'
import styles from './header.scss'
import { SearchBlock } from './SearchBlock/SearchBlock.tsx'
import { ThreadTitle } from './ThreadTitle/ThreadTitle.tsx'
import { SortBlock } from './SortBlock/SortBlock.tsx'
import { UserBlock } from './UserBox/UserBlock.tsx'

export function Header() {
  return (
    <header className={styles.header}>
      {/* <SearchBlock /> */}
      <ThreadTitle />
      <SortBlock />
      <UserBlock />
    </header>
  )
}
