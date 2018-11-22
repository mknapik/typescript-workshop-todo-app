import * as React from 'react';
import { Todo, TodoId } from '../models';
import * as todosActions from '../actions';
import { RootState } from '../../../store';
import { connect } from 'react-redux';
import TodoElement from './todo-element';

namespace TodoElementContainer {
  export interface OwnProps {
    id: TodoId
  }

  export interface StateProps {
    todo: Todo
  }

  export interface DispatchProps {
    toggleTodo: (id: string) => any
  }

  export type Props = OwnProps & StateProps & DispatchProps
}

const TodoElementContainer: React.FunctionComponent<TodoElementContainer.Props> = ({id, todo, toggleTodo}) => (
  <TodoElement todo={todo} toggleTodo={() => toggleTodo(todo.id)} />
)

const mapStateToProps = (state: RootState, {id}: TodoElementContainer.OwnProps) => ({
  todo: state.todos.todos[id]
})

export default connect<TodoElementContainer.StateProps, TodoElementContainer.DispatchProps, TodoElementContainer.OwnProps>(
  mapStateToProps,
  {
    toggleTodo: (id: string) => todosActions.toggle({id})
  }
)(TodoElementContainer)
