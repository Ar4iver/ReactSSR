import React from 'react'
import './global.scss'
import { useToken } from './hooks/useToken.ts'
import { Layout } from './shared/Layout/Layout.tsx'
import { Header } from './shared/Header/Header.tsx'
import { Content } from './shared/Content/Content.tsx'
import { CardsList } from './shared/CardsList/CardsList.tsx'

const App = () => {
  const [token] = useToken()

  return (
    <Layout>
      <Header token={token} />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  )
}

export default App
