import * as React from 'react'
import {connect} from 'react-redux'

import {RootState} from '../../../store'
import {todosModels, todosSelectors} from '../'
import TodoElement from './todo-element-container';

namespace TodoList {
  export interface Props {
    todoIds: todosModels.TodoId[]
  }
}

function TodoList({todoIds = []}: TodoList.Props) {
  return (
    <ul style={getStyle()}>
      {todoIds.map(id => (
        <TodoElement id={id} />
      ))}
    </ul>
  )
}

const getStyle = (): React.CSSProperties => ({
  textAlign: 'left',
  margin: 'auto',
  width: 200
})

const mapStateToProps = (state: RootState) => ({
  todoIds: todosSelectors.getFilteredTodoIds(state.todos)
})

export default connect(
  mapStateToProps
)(TodoList)
