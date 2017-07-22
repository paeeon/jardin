import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkTokenWithDispatch } from '../actions/user';

class NewGame extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>NewGame</h1>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkToken: checkTokenWithDispatch(dispatch)
  };
}

NewGame = connect(
  null,
  mapDispatchToProps
)(NewGame);

export default NewGame;
