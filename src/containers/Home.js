import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { checkTokenWithDispatch } from '../actions/user';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h3>Choose your own adventure.</h3>
        <p>
          Jardin is a place to play interactive stories via our app, or text
          message. Or, write your own stories for others to play.
        </p>
        <p className="text-center">
          <Link to="/signup">
            <button className="btn btn-primary">Sign up now!</button>
          </Link>
        </p>
        <h3>Featured Stories</h3>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    checkToken: checkTokenWithDispatch(dispatch)
  };
}

Home = connect(
  null,
  mapDispatchToProps
)(Home);

export default Home;
