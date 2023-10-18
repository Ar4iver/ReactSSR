import React, { createContext } from 'react'
import { useUserData } from '../hooks/useUserData.ts'
import { IUserContextData } from '../../types/types.ts'

export const userContext = createContext<IUserContextData>({})

export function UserContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [data] = useUserData()
  return <userContext.Provider value={data}>{children}</userContext.Provider>
}
