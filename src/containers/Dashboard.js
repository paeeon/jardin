import React, { Component } from 'react';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    // TO DO: perform an auth check??
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
