// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';

import todoApp from './reducers';
import {
  addTodo, completeTodo, setVisibilityFilter,
  VisibilityFilters
} from './actions';

// Create store
let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// Dispatch actions
console.log(store.getState());

// Register listeners
// Listen to the state change!!
let unsubscribeFunc = store.subscribe( () => 
    console.log(store.getState()));


// the Redux store saves the complete state tree returned by the root reducer.
// This new tree is now the next state of your app!
// Every listener registered with store.subscribe(listener) will now be invoked; listeners may call store.getState() to get the current state.

store.dispatch( addTodo ('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(completeTodo(0))
store.dispatch(completeTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
unsubscribeFunc();

//now even thougth store dispatch an action the store doesnt listen for state scange
//so console.log will not happend but the state will be chab=nged
store.dispatch(addTodo('Learn about reducers'));

console.info("The state is changed anyway",store.getState());


