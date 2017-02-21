import React, { Component } from 'react';
import '../styles/SignUp.css'
import classNames from 'classnames';
import { connect } from 'react-redux';
import { createNewUser } from '../actions/user';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      pass: '',
      confirmPass: '',
      passwordTooShort: false,
      passwordsMatch: true,
      error: ''
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

  timedPassParityCheck = () => {
    if (this.state.confirmPass) {
      let timer;
      const checkPasswords = () => {
        if (timer) clearTimeout(timer);
        if (this.state.confirmPass !== this.state.pass) {
          this.setState({
            ...this.state,
            passwordsMatch: false
          })
        } else {
          this.setState({
            ...this.state,
            passwordsMatch: true
          })
        }
      }
      timer = setTimeout(checkPasswords, 1000);
    }
  }

  onChangeHandler = (e) => {
    this.setState(
      {...this.state, [e.target.name]: e.target.value},
      this.setStateDone
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      pass: this.state.pass,
      firstName: this.state.firstName,
      lastName: this.state.lastName
    };
    createNewUser(userData).then((results) => {
      console.log("user created", results)
    })
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
      'btn-primary': true,
      'btn-block': true,
      'disabled': !this.state.email || this.state.passwordTooShort || !this.state.passwordsMatch
    });
    return (
      <div className="sign-up">
        <form name="sign-up-form">

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email"
                   className="form-control"
                   id="email"
                   name="email"
                   placeholder="janedoe@gmail.com"
                   onChange={this.onChangeHandler} />
          </div>

          <div className="form-group">
            <label htmlFor="email">First Name</label>
            <input type="first-name"
                   className="form-control"
                   id="first-name"
                   name="firstName"
                   placeholder="Jane"
                   onChange={this.onChangeHandler} />
          </div>

          <div className="form-group">
            <label htmlFor="email">Last Name</label>
            <input type="last-name"
                   className="form-control"
                   id="last-name"
                   name="lastName"
                   placeholder="Doe"
                   onChange={this.onChangeHandler} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password"
                   id="password"
                   placeholder="8 character minimum"
                   className={passwordClass}
                   name="pass"
                   onChange={this.onChangeHandler}
                   onBlur={this.checkPasswordLength}
                   onKeyUp={this.timedPassParityCheck}/>
            { this.state.passwordTooShort ? <span>Password needs to be at least 8 characters long.</span> : null }
          </div>

          <div className="form-group">
            <label htmlFor="password-confirm">Confirm Password</label>
            <input type="password"
                   className={passwordConfirmClass}
                   id="password-confirm"
                   name="confirmPass"
                   placeholder="Type it in again"
                   onChange={this.onChangeHandler}
                   onKeyUp={this.timedPassParityCheck}
                   />
                 { this.state.passwordsMatch ? null : <span>Your passwords dont match.. Try again?</span> }
          </div>

          <button type="submit" className={submitClass} onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createNewUser
};

SignUp = connect(
  null,
  mapDispatchToProps
)(SignUp);

export default SignUp;
