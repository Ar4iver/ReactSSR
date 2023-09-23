import React from 'react'
import styles from './header.scss'
import { SearchBlock } from './SearchBlock/SearchBlock.tsx'
import { ThreadTitle } from './ThreadTitle/ThreadTitle.tsx'
import { SortBlock } from './SortBlock/SortBlock.tsx'

interface IHeaderProps {
  token: string
}

export function Header({ token }: IHeaderProps) {
  return (
    <header className={styles.header}>
      <SearchBlock token={token} />
      <ThreadTitle />
      <SortBlock />
    </header>
  )
}
