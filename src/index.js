import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

ReactDOM.render(
<Provider store={store}>
  {router}
</Provider>,document.getElementById('root'));
