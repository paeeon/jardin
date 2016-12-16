import React, { Component } from 'react';
import '../styles/SignUp.css'
import classNames from 'classnames';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pass: '',
      confirmPass: '',
      passwordTooShort: false,
      passwordsMatch: true
    };
  }

  setStateDone = () => {
    console.log('current state', this.state);
  }

  checkPasswordLength = () => {
    if (this.state.pass.length < 8) {
      this.setState({
        ...this.state,
        passwordTooShort: true
      });
    } else {
      this.setState({
        ...this.state,
        passwordTooShort: false
      });
    }
  }

  passwordMatchCheck = () => {
    if (this.state.pass !== this.state.confirmPass) {
      this.setState({
        ...this.state,
        passwordsMatch: false
      });
    } else {
      this.setState({
        ...this.state,
        passwordsMatch: true
      });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const passwordClass = classNames({
      'form-control': true,
      'red-border': this.state.passwordTooShort
    });
    const passwordConfirmClass = classNames({
      'form-control': true,
      'red-border': this.state.passwordsDontMatch
    });
    const submitClass = classNames({
      'btn': true,
      'btn-default': true,
    });
    return (
      <div className="sign-up">
        <form name="sign-up-form">

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email"
                   className="form-control"
                   id="email"
                   placeholder="janedoe@gmail.com" />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password"
                   id="password"
                   placeholder="8 character minimum"
                   className={passwordClass}
                   onChange={(e) => {
                     this.setState(
                       {...this.state, pass: e.target.value},
                       this.setStateDone
                     )}
                   }
                   onBlur={this.checkPasswordLength} />
            { this.state.passwordTooShort ? <span>Password needs to be at least 8 characters long.</span> : null }
          </div>

          <div className="form-group">
            <label htmlFor="password-confirm">Confirm Password</label>
            <input type="password"
                   className={passwordConfirmClass}
                   id="password-confirm"
                   placeholder="Type it in again"
                   onChange={(e) => {
                     this.setState(
                       {...this.state, confirmPass: e.target.value},
                       this.setStateDone
                     )}
                   }
                   />
                 { this.state.passwordsMatch ? null : <span>Your passwords dont match.. Try again?</span> }
          </div>

          <button type="submit" className={submitClass} onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
