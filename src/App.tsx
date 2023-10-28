import React from 'react'
import './global.scss'
import { Provider } from 'react-redux'
import store from './store/store.ts'
import AppComponent from './shared/App/AppComponent.tsx'

const App = () => {
  return (
    <Provider store={store}>
      <AppComponent />
    </Provider>
  )
}

export default App
