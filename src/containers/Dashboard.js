import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <Link to="/game/">
          <button className="btn">Create a New Game</button>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
