import { combineReducers } from 'redux';
import { ActionType, getType } from 'typesafe-actions';

import { Todo, TodosFilter } from './models';
import * as todos from './actions';

export type TodosAction = ActionType<typeof todos>;

export type TodosState = Readonly<{
  todos: Todo[];
  todosFilter: TodosFilter;
}>;
const INITIAL_STATE = [
  {
    id: 'completed',
    title: 'completed',
    completed: true,
  },
  {
    id: 'not-completed',
    title: 'not completed',
    completed: false,
  },
];

export default combineReducers<TodosState, TodosAction>({
  todos: (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case getType(todos.add):
        return [...state, action.payload];

      case getType(todos.toggle):
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, completed: !item.completed }
            : item
        );

      default:
        return state;
    }
  },
  todosFilter: (state = TodosFilter.All, action) => {
    switch (action.type) {
      case getType(todos.changeFilter):
        return action.payload;

      default:
        return state;
    }
  },
});
