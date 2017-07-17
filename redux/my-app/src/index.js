// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';

const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

//******************  Actions ****************

//action fabrique
function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text
    }
}

//action fabrique
function completeTodo(index) {
    return {
        type : 'COMPLETE_TODO',
        index
    }
}

function setVisibilityFilter(filter) {
  return { 
      type: 'SET_VISIBILITY_FILTER',
      filter }
}

// ***********************

// My state
const mystate = {
    visibilityFilter : 'SHOW_ALL',
    todoes : [
        {
            text : 'smile',
            completed : true
        },
        {
            text : 'rest',
            completed : false
        }
    ]

}

//  *************** Reducers ******************

// main
// function reducer (state, action) {
//     //No need for this with reducer composition
//     // const initialState = {
//     //     visibilityFilter: VisibilityFilters.SHOW_ALL,
//     //     todos: []
//     // }
//     // if (typeof state === 'undefined'){
//     //     return initialState;
//     // }

//     switch (action.type){
//         case 'SET_VISIBILITY_FILTER' :
//             // return Object.assign( {}, state, {
//             //     visibilityFilter : action.filter
//             // })
//             return Object.assign ({}, state, {
//                 visibilityFilter : setVisibilityFilterReducer(state.visibilityFilter, action)
//             })
//         // Call reducer responsible for todoes array (only one slice of state)
//         //Reducer composition!
//         case 'ADD_TODO' :
//         case 'COMPLETE_TODO' :
//             return Object.assign( {}, state, {
//                 todoes : todoReducer(state.todoes,action)
//             })
//         default : 
//             return state;
//     }
            
// }

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

function reducer( state = {}, action) {
    return {
        VisibilityFilters : setVisibilityFilterReducer(state.visibilityFilter, action),
        todoes : todoReducer(state.todoes, action)
    }
}

let store = createStore(reducer);

store.dispatch(addTodo("smile"));

