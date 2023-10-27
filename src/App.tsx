import React, { useState } from 'react'
import './global.scss'
import { Layout } from './shared/Layout/Layout.tsx'
import { Header } from './shared/Header/Header.tsx'
import { Content } from './shared/Content/Content.tsx'
import { CardsList } from './shared/CardsList/CardsList.tsx'
import { UserContextProvider } from './shared/context/userContext.tsx'
import { PostsContextProvider } from './shared/context/PostsContext.tsx'
import { commentContext } from './shared/context/commentContext.ts'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { useToken } from './shared/hooks/useToken.ts'

const App = () => {
  const token = useToken()
  const [commentValue, setCommentValue] = useState('')

  const CommentProvider = commentContext.Provider

  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
