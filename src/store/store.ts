import {createStore, applyMiddleware, compose} from 'redux'
import {createEpicMiddleware} from 'redux-observable'

import rootReducer, {RootState} from './root-reducer'
import {RootAction} from './root-action'

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

function configureStore(initialState?: {}) {
  // configure middlewares
  const epicMiddleware = createEpicMiddleware<
    RootAction,
    RootAction,
    RootState
  >()
  const middlewares = [epicMiddleware]
  // compose enhancers
  const enhancer = composeEnhancers(applyMiddleware(...middlewares))
  // create store
  return createStore(rootReducer, initialState!, enhancer)
}

// pass an optional param to rehydrate state on app start
const store = configureStore()

// export store singleton instance
export default store
