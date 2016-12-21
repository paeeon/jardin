import React, { Component } from 'react';
import firebase from 'firebase';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  logState = () => console.log('current state', this.state);

  render() {
    return (
      <div className="dashboard">
        Dashboard
        { this.state.user ?
          <div className="user-email">{this.state.user.email}</div> : null }
      </div>
    )
  }
}
