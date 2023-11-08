import React, { useEffect, useState } from 'react'
import './global.scss'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import AppComponent from './shared/App/AppComponent.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './shared/router/AppRouter.tsx'

const App = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  })
  return (
    <Provider store={store}>
      {mounted && (
        <BrowserRouter>
          <AppComponent />
        </BrowserRouter>
      )}
    </Provider>
  )
}

export default App
