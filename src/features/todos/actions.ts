import cuid from 'cuid'
import {createStandardAction} from 'typesafe-actions'

import { TodosFilter, Todo, TodoId } from './models';

const TOGGLE = 'todos/TOGGLE'
const CHANGE_FILTER = 'todos/CHANGE_FILTER'

export const addRequest = createStandardAction('todos/add/request').map(
  (payload: { title: string }) => ({
    payload: {
      title: payload.title || 'New Todo',
      id: cuid(),
      completed: false
    } as Todo
  })
)

export const addSuccess = createStandardAction('todos/add/success').map(
  (payload: {id: TodoId}) => ({id: payload.id})
)

export const toggle = createStandardAction(TOGGLE)<{ id: TodoId }>();

export const changeFilter = createStandardAction(CHANGE_FILTER)<TodosFilter>()
