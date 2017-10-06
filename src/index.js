// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


/************************ For render to do list, render App component in the root *********************/
import React from 'react';
import { render } from 'react-dom'
import {Provider} from 'react-redux'
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import todoApp from './reducers';


// Create store
let store = createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
