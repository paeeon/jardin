import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Route, Router, IndexRoute, browserHistory} from 'react-router';

import App from './containers/App';
import Home from './containers/Home';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
);
