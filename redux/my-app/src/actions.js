export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
let nextTodoId = 0;
//******************  Actions ****************

//action fabrique
export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text,
        id : nextTodoId ++
    }
}

//action fabrique
export function completeTodo(id) {
    return {
        type : 'COMPLETE_TODO',
        id
    }
}

export function setVisibilityFilter(filter) {
  return { 
      type: 'SET_VISIBILITY_FILTER',
      filter 
    }
}