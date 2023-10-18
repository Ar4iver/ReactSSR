import React, { createContext } from 'react'
import { usePostsData } from '../hooks/usePostsData.ts'
import { IPost } from '../../types/types.ts'

export const postsContext = createContext<IPost[]>([])

export function PostsContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [postsData] = usePostsData()
  return (
    <postsContext.Provider value={postsData}>{children}</postsContext.Provider>
  )
}
