import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, /* preloadedState, */ bindMiddleware([sagaMiddleware]))

sagaMiddleware.run(rootSaga)

export default store
