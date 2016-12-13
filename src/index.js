import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Route, Router, IndexRoute, browserHistory} from 'react-router';
import * as firebase from 'firebase';

import App from './containers/App';
import Home from './containers/Home';
import SignUp from './containers/SignUp';

const config = {
  apiKey: "AIzaSyB7Rlj9IdHF3zBi-NSJlCYWX0GecMMWlXA",
  authDomain: "jardin-822e1.firebaseapp.com",
  databaseURL: "https://jardin-822e1.firebaseio.com",
  storageBucket: "jardin-822e1.appspot.com",
  messagingSenderId: "17435950385"
};
firebase.initializeApp(config);

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/signup" component={SignUp} />
    </Route>
  </Router>,
  document.getElementById('root')
);
