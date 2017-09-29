import React, { Component } from 'react';
// import auth_logo from './auth_logo.png';
import './App.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="outer">
        <div className="tempHeader"><span>Houser Dashboard</span></div>

        <div className="Dash">
          <div className="middleContent">
            <div>
              <button className="addNew">Add new property</button>

              <br />

              <span className="text">List properties with "desired rent" greater than: $</span>
              <input className="inputBox" placeholder=" 0"></input>
              <button className="filter">Filter</button>
              <button className="reset">Reset</button>

              <hr />
              <div className="homeListingContainer">
                <span className="homeListings">Home Listings</span>
              </div>
            {/************ map over contents of users properties ************/}

              <div className="propPlaceholder">placeholder</div>
              <div className="propPlaceholder">placeholder</div>
              <div className="propPlaceholder">placeholder</div>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
