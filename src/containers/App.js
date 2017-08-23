import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import HeaderContainer from './HeaderContainer';
import 'normalize.css/normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { checkTokenValidityThunk } from '../actions/user';
import Home from './Home';
import SignUp from './SignUp';
import LogIn from './LogIn';
import LogOut from './LogOut';
import Dashboard from './Dashboard';
import GameList from './GameList';
import Game from './Game';

class App extends Component {
  componentWillMount() {
    this.props.checkAuth();
  }

  render() {
    return (
      <Router>
        <div className="app">
          <HeaderContainer/>
          <div className="container">
            <Route exact path='/' component={Home}/>
            <Route path='/signup' component={SignUp}/>
            <Route path='/login' component={LogIn}/>
            <Route path='/logout' component={LogOut}/>
            <AuthenticatedRoute path='/dashboard' component={Dashboard} isAuthenticated={this.props.isAuthenticated}/>
            <AuthenticatedRoute path='/game-list' component={GameList} isAuthenticated={this.props.isAuthenticated}/>
            <Route path='/game' component={Game}/>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.user.isAuthenticated
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => dispatch(checkTokenValidityThunk())
  }
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
