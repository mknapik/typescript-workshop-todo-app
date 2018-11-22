export type TodoId = string

export type Todo = {
  id: TodoId
  title: string
  completed: boolean
}

export enum TodosFilter {
  All = 'all',
  Completed = 'completed',
  Active = 'active'
}

export type Saving = {
  saving?: boolean
}