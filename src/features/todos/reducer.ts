import { ActionType, getType } from 'typesafe-actions';

import { Todo, TodoId, TodosFilter } from './models';
import * as todos from './actions';

export type TodosAction = ActionType<typeof todos>

export type TodosState = Readonly<{
  todos: { [key: string]: Todo }
  todoIds: TodoId[]
  todosFilter: TodosFilter
}>

const INITIAL_STATE: TodosState = {
  todos: {
    'completed': {
      id: 'completed',
      title: 'completed',
      completed: true,
    },
    'not-completed': {
      id: 'not-completed',
      title: 'not completed',
      completed: false,
    },
  },
  todoIds: [
    'completed',
    'not-completed',
  ],
  todosFilter: TodosFilter.All,
};

export default (state: TodosState = INITIAL_STATE, action: TodosAction): TodosState => {
  switch (action.type) {
    case getType(todos.addRequest):
      return {
        ...state,
        todos: {
          ...(state.todos),
          [action.payload.id]: action.payload,
        },
        todoIds: [
          ...(state.todoIds),
          action.payload.id
        ],
      };

    case getType(todos.toggle):
      const prev = state.todos[action.payload.id];

      return {
        ...state,
        todos: {
          ...(state.todos),
          [action.payload.id]: {
            ...prev,
            completed: !prev.completed,
          },
        },
      };

    case getType(todos.changeFilter):
      return {
        ...state,
        todosFilter: action.payload,
      };

    default:
      return state;
  }
}
