import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { loginUserThunk } from '../actions/user';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state)
      .then(() => { browserHistory.push('/dashboard'); });
  }

  setStateDone = () => {
    console.log('current state', this.state);
  }

  onChangeHandler = (e) => {
    this.setState(
      {...this.state, [e.target.name]: e.target.value },
      this.setStateDone
    );
  }

  render() {
    return (
      <div className="log-in">
        <form name="log-in-form">
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email"
                   className="form-control"
                   id="email"
                   name="email"
                   onChange={this.onChangeHandler} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password"
                   className="form-control"
                   name="pass"
                   id="password"
                   onChange={this.onChangeHandler} />
          </div>

          <button type="submit"
                  onClick={this.handleSubmit}
                  className="btn btn-primary btn-block">
            Submit
          </button>

        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (state) => dispatch(loginUserThunk(state))
  }
}

LogIn = connect(
  null,
  mapDispatchToProps
)(LogIn);

export default LogIn;
