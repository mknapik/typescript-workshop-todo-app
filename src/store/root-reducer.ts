import {combineReducers} from 'redux'
import { routerReducer, RouterState } from 'react-router-redux';
import {StateType} from 'typesafe-actions'

import { todosReducer, TodosState } from '../features/todos';

const rootReducer = combineReducers<{
  router: RouterState,
  todos: TodosState
}>({
  router: routerReducer,
  todos: todosReducer
})

export type RootState = StateType<typeof rootReducer>

export default rootReducer
