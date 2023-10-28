import React, { useEffect } from 'react'
import { PostsContextProvider } from '../context/PostsContext.tsx'
import { UserContextProvider } from '../context/userContext.tsx'
import { Layout } from '../Layout/Layout.tsx'
import { Header } from '../Header/Header.tsx'
import { Content } from '../Content/Content.tsx'
import { CardsList } from '../CardsList/CardsList.tsx'
import { useToken } from '../hooks/useToken.ts'
import { useDispatch } from 'react-redux'
import { loadToken } from '../../store/slices/tokenSlice.ts'

const AppComponent = () => {
  useToken()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadToken()) //получил токен из редакса
  }, [dispatch])

  return (
    <>
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
    </>
  )
}

export default AppComponent
