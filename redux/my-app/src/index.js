// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import './index.css';
import App from './HOC/App';
//import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import todoApp from './reducers';


// Create store
let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// ReactDOM.render(<Provider store = {store}>
//         <App />
//         </Provider>, document.getElementById('root'));
// registerServiceWorker();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
