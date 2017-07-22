import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import HeaderContainer from './HeaderContainer';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import LogOut from './LogOut';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderContainer/>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/logout' component={LogOut}/>
            <Route path='/dashboard' component={Dashboard}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
