export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//******************  Actions ****************

//action fabrique
export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

//action fabrique
export function completeTodo(index) {
    return {
        type : 'COMPLETE_TODO',
        index
    }
}

export function setVisibilityFilter(filter) {
  return { 
      type: 'SET_VISIBILITY_FILTER',
      filter }
}
