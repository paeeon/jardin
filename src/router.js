import React from 'react';
import './styles/index.css';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import SignUp from './containers/SignUp';
import LogIn from './containers/LogIn';
import Dashboard from './containers/Dashboard';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={LogIn} />
      <Route path="/dashboard" component={Dashboard} />
    </Route>
  </Router>
);

export default router;
