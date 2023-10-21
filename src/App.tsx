import React, { useState } from 'react'
import './global.scss'
import { Layout } from './shared/Layout/Layout.tsx'
import { Header } from './shared/Header/Header.tsx'
import { Content } from './shared/Content/Content.tsx'
import { CardsList } from './shared/CardsList/CardsList.tsx'
import { useToken } from './shared/hooks/useToken.ts'
import { tokenContext } from './shared/context/tokenContext.ts'
import { UserContextProvider } from './shared/context/userContext.tsx'
import { PostsContextProvider } from './shared/context/PostsContext.tsx'
import { commentContext } from './shared/context/commentContext.ts'

const App = () => {
  const [token] = useToken()
  const [commentValue, setCommentValue] = useState('')

  const CommentProvider = commentContext.Provider

  return (
    <tokenContext.Provider value={token}>
      <CommentProvider
        value={{
          value: commentValue,
          onChange: setCommentValue,
        }}
      >
        <PostsContextProvider>
          <UserContextProvider>
            <Layout>
              <Header />
              <Content>
                <CardsList />
              </Content>
            </Layout>
          </UserContextProvider>
        </PostsContextProvider>
      </CommentProvider>
    </tokenContext.Provider>
  )
}

export default App
