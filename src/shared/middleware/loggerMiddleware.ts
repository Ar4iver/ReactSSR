import { Middleware } from 'redux'
import store from '../../store/store'

export const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('dispatching', action.payload)
  next(action)
}
