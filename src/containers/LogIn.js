import React, { Component } from 'react';
// import firebase from 'firebase';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pass: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    
  }

  onChangeHandler = (e) => {
    this.setState(
      {...this.state, [e.target.name]: e.target.value }
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
                   name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password"
                   className="form-control"
                   name="pass"
                   id="password"/>
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
