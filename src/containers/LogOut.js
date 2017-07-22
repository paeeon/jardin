import React, { Component } from 'react';
import { logoutUserThunk } from '../actions/user';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class LogOut extends Component {
  componentWillMount() {
    if (this.props.user.isAuthenticated) {
      this.props.logoutUser(this.props.user)
      .then(() => {
        console.log(`User was logged out.`);
        browserHistory.push('/');
      })
    } else {
      console.log(`No one was logged in, so we couldn't log them out!`);
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <div className="home"></div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUserThunk())
  }
}

LogOut = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut);

export default LogOut;
