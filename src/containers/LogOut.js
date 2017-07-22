import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { logoutUserThunk } from '../actions/user';
import { connect } from 'react-redux';

class LogOut extends Component {
  componentWillMount() {
    if (this.props.user.isAuthenticated) {
      this.props.logoutUser(this.props.user)
      .then(() => {
        console.log(`User was logged out.`);
        this.props.history.push('/');
      })
    } else {
      console.log(`No one was logged in, so we couldn't log them out!`);
      this.props.history.push('/');
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

LogOut = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LogOut));

export default LogOut;
