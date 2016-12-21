import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import router from './router';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';

const config = {
  apiKey: "AIzaSyB7Rlj9IdHF3zBi-NSJlCYWX0GecMMWlXA",
  authDomain: "jardin-822e1.firebaseapp.com",
  databaseURL: "https://jardin-822e1.firebaseio.com",
  storageBucket: "jardin-822e1.appspot.com",
  messagingSenderId: "17435950385"
};
firebase.initializeApp(config);

let store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}>
  {router}
</Provider>,document.getElementById('root'));
