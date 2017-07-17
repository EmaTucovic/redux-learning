import {combineReducers} from 'redux';
import {
  addTodo, completeTodo, setVisibilityFilter,
  VisibilityFilters
} from './actions';

// Note that a reducer is a pure function. It only computes the next state.
// It should be completely predictable: calling it with the same inputs many times should produce the same outputs.
// It shouldn't perform any side effects like API calls or router transitions. These should happen before an action is dispatched.


function setVisibilityFilterReducer( state = VisibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter; 
        default:
            return state;
    }
}

function todoReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO' :
            return [
                ...state,
                {
                    text : action.text,
                    completed : false
                }
                ];
        case 'COMPLETE_TODO' : 
            return state.map( (todo, index) => {
                        if(action.index === index){
                        //change that one todo from todeos array, create new
                            return Object.assign({}, todo, {
                                completed : !todo.completed
                            })
                        }    
                        return todo;    
                    });
        default : 
            return state;
    }
}

const todoApp = combineReducers({
    visibilityFilter : setVisibilityFilterReducer,
    todoes : todoReducer
});

export default todoApp;