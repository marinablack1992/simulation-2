import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from "./components/header/Header"

import router from "./router.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Header /> */}
        {router}
      </div>
    );
  }
}

export default App;
