import React, { Component } from 'react';
import auth_logo from './auth_logo.png';
import './AuthPage.css';

import {Link} from "react-router-dom"

class AuthPage extends Component {
  render() {
    return (
      <div className="Auth">
        <div className="midC">

          <img src={auth_logo} alt="houser logo" className="auth_logo" />

          <div className="tai">
            <span className="t">Username</span>
            <input className="inB"></input>

            <span className="t">Password</span>
            <input className="inB"></input>
          </div>

          <div className="buttons">

            <Link to="/dashboard">
            <button className="login">Login</button>
            </Link>

            <Link to="/dashboard">
            <button className="register">Register</button>
            </Link>


          </div>


        </div>

      </div>
    );
  }
}

export default AuthPage;
