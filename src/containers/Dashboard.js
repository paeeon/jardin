import React, { Component } from 'react';
import firebase from 'firebase';

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard">
        Dashboard
        {/* { this.state.user !== null ?
          <div className="user-email">{this.state.user.email}</div> :
          null } */}
      </div>
    )
  }
}
