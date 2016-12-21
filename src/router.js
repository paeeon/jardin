import React from 'react';
import './styles/index.css';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import Dashboard from './containers/Dashboard';

const requireAuth = () => {
  console.log('requireAuth ran!');
};

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/dashboard" component={Dashboard} onEnter={requireAuth}/>
    </Route>
  </Router>
);

export default router;
