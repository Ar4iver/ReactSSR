import { createContext } from 'react'
import { ICommentContextProps } from '../../types/types'

export const commentContext = createContext<ICommentContextProps>({
  value: '',
  onChange: () => {},
})
