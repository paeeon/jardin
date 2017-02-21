import React from 'react';
import './styles/index.css';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import firebase from 'firebase';

import App from './containers/App';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import Dashboard from './containers/Dashboard';

const requireAuth = (nextState, replace, callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('user is here', user);
      callback();
    } else {
      console.log('no user online');
      replace(`/signup`);
      callback();
    }
  });
};

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/dashboard/:userId" component={Dashboard} onEnter={requireAuth}/>
    </Route>
  </Router>
);

export default router;
