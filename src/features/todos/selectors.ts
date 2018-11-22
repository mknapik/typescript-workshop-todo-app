import {createSelector} from 'reselect'

import {TodosState} from './reducer'
import { Todo, TodoId } from './models';

export const getTodoIds = (state: TodosState) => state.todoIds

export const getTodos = (state: TodosState) => state.todos

export const getTodosFilter = (state: TodosState) => state.todosFilter

export const getFilteredTodoIds = createSelector(
  getTodoIds,
  getTodos,
  getTodosFilter,
  (todoIds: TodoId[], todos: {[key: string]: Todo}, todosFilter): TodoId[] => {
    switch (todosFilter) {
      case 'completed':
        return todoIds.filter(id => todos[id].completed)
      case 'active':
        return todoIds.filter(id => !todos[id].completed)
      default:
        return todoIds
    }
  }
)
