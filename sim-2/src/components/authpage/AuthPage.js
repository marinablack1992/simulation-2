import React, { Component } from 'react';
import auth_logo from './auth_logo.png';
import './AuthPage.css';

class AuthPage extends Component {
  render() {
    return (
      <div className="Auth">
        <div className="middleContent">

          <img src={auth_logo} alt="houser logo" className="auth_logo" />

          <div className="textAndInput">
            <span className="text">Username</span>
            <input className="inputBox"></input>

            <span className="text">Password</span>
            <input className="inputBox"></input>
          </div>

          <div className="buttons">

            <button className="login">Login</button>
            <button className="register">Register</button>

          </div>


        </div>

      </div>
    );
  }
}

export default AuthPage;
