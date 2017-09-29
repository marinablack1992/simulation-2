import React, { Component } from 'react';
import header_logo from './header_logo.png';
import './Header.css';

import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="background">
        <img src={header_logo} alt="header logo" className="headerLogo"/>
        <span className="houser">Houser</span><span className="dashboard">Dashboard</span>

        <Link to="/" className="link">
        <span className="logout">Logout</span>
        </Link>


        </div>
      </div>
    );
  }
}

export default Header;
