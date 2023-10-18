import React from 'react'
import './global.scss'
import { Layout } from './shared/Layout/Layout.tsx'
import { Header } from './shared/Header/Header.tsx'
import { Content } from './shared/Content/Content.tsx'
import { CardsList } from './shared/CardsList/CardsList.tsx'
import { useToken } from './shared/hooks/useToken.ts'
import { tokenContext } from './shared/context/tokenContext.ts'
import { UserContextProvider } from './shared/context/userContext.tsx'
import { PostsContextProvider } from './shared/context/PostsContext.tsx'

const App = () => {
  const [token] = useToken()
  return (
    <tokenContext.Provider value={token}>
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
    </tokenContext.Provider>
  )
}

export default App
