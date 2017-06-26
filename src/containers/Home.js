import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { checkTokenWithDispatch } from '../actions/user';

class Home extends Component {
  render() {
    return (
      <div className="home">
<<<<<<< HEAD
        <h3>Choose your own adventure.</h3>
        <p>
          Jardin is a place to play interactive stories via our app, or text
          message. Or, write your own stories for others to play.
        </p>
=======
        <h3>What is Jardin?</h3>
        // <p>This new tree is now the next state of your app! Every listener
        registered with store.subscribe(listener) will now be invoked;
        listeners may call store.getState() to get the current state.
        Now, the UI can be updated to reflect the new state. If you use
        bindings like React Redux, this is the point at which
        component.setState(newState) is called.</p>
>>>>>>> c801019de66aa075e3e4e16cbae65eccaef897cd
        <p className="text-center">
          <Link to="/signup">
            <button className="btn btn-primary">Sign up now!</button>
          </Link>
        </p>
        <h3>Featured Stories</h3>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkToken: checkTokenWithDispatch(dispatch)
  };
}

Home = connect(
  null,
  mapDispatchToProps
)(Home);

export default Home;
