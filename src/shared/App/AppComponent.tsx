import React, { useEffect } from 'react'
import { UserContextProvider } from '../context/userContext.tsx'
import { Layout } from '../Layout/Layout.tsx'
import { Header } from '../Header/Header.tsx'
import { Content } from '../Content/Content.tsx'
import { CardsList } from '../CardsList/CardsList.tsx'
import { useToken } from '../hooks/useToken.ts'
import { useDispatch } from 'react-redux'
import { loadToken } from '../../store/slices/tokenSlice.ts'
import { AppRouter } from '../router/AppRouter.tsx'

const AppComponent = () => {
  useToken()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadToken()) //получил токен из localStorage и сохранил его в Redux
  }, [dispatch])

  return (
    <>
      <UserContextProvider>
        <Layout>
          <Header />
          <Content>
            <AppRouter />
          </Content>
        </Layout>
      </UserContextProvider>
    </>
  )
}

export default AppComponent
