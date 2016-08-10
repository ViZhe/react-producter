
import {createStore, applyMiddleware} from 'redux'

import reducers from './reducers'


const middleware = [] // TODO: add thunk

if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger') // eslint-disable-line global-require

  middleware.push(createLogger())

  // } else {
  //     middleware.push() // TODO: push something
}


export default function configureStore(initialState) {
  const store = createStore(reducers, initialState, applyMiddleware(...middleware))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers') // eslint-disable-line global-require

      store.replaceReducer(nextReducer)
    })
  }

  return store
}
