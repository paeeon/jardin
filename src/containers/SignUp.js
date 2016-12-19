import React, { Component } from 'react';
import '../styles/SignUp.css'
import classNames from 'classnames';
import firebase from 'firebase';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
      const timer = setTimeout(checkPasswords, 1000);
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
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass)
      .then((user) => {
        this.context.router.push('/dashboard/' + user.uid);
      })
      .catch((err) => console.log(err.code, err.message));
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

SignUp.contextTypes = {
  router: React.PropTypes.object
};
