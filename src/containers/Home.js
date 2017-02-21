import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3>What is Jardin?</h3>
        <p>This new tree is now the next state of your app! Every listener
        registered with store.subscribe(listener) will now be invoked;
        listeners may call store.getState() to get the current state.
        Now, the UI can be updated to reflect the new state. If you use
        bindings like React Redux, this is the point at which
        component.setState(newState) is called.</p>
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
