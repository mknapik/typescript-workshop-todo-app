import * as React from 'react';
import { Todo } from '../models';
import TodoItem from './todo-item';

interface Props {
  todo: Todo
  toggleTodo: (id: string) => any
}

const TodoElement: React.FunctionComponent<Props> = ({todo, toggleTodo}) => (
  <li key={todo.id}>
    <TodoItem item={todo} toggleItem={() => toggleTodo(todo.id)} />
  </li>
)

export default TodoElement
