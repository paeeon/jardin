import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateGame } from '../actions/game';

class Game extends Component {
  componentWillMount() {

    console.log("componentWillMount render");
  }

  render() {
    console.log("Rendering!");
    return (
      <div className="dashboard">
        <h1>Game</h1>
        Test
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateGame: (e) => {
      console.log('updateGame firing');
      dispatch(updateGame(e.target.name, e.target.value));
    }
  };
}

Game = connect(
  null,
  mapDispatchToProps
)(Game);

export default Game;
