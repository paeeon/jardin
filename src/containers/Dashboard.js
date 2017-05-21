import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkTokenWithDispatch } from '../actions/user';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkToken: checkTokenWithDispatch(dispatch)
  };
}

Dashboard = connect(
  null,
  mapDispatchToProps
)(Dashboard);

export default Dashboard;
