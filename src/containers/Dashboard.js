import React, { Component } from 'react';
import { checkToken } from '../actions/user';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    // decode token and then check if token is still valid and unexpired
    // if token is valid and unexpired, continue loading page
    // if token is invalid, redirect to login page
    checkToken();
  }

  logState = () => console.log('current state', this.state);

  render() {
    return (
      <div className="dashboard">
        Dashboard
      </div>
    );
  }
}
