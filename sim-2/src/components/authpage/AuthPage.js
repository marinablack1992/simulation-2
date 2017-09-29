import React, { Component } from 'react';
import auth_logo from './auth_logo.png';
import './AuthPage.css';

import {Link} from "react-router-dom"

class AuthPage extends Component {
  constructor(){
    super();
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(prop,val){
    this.setState({[prop]: val})
  }

  

  render() {
    return (
      <div className="Auth">
        <div className="midC">

          <img src={auth_logo} alt="houser logo" className="auth_logo" />

          <div className="tai">
            <span className="t">Username</span>
            <input className="inB" onChange={e => this.handleChange('username', e.target.value)}></input>

            <span className="t" onChange={e => this.handleChange('password', e.target.value)}>Password</span>
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
