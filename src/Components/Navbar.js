import React, { Component } from 'react'
import "../Components/Navbar.css";

export class Navbar extends Component {
  render() {
    return (

      <div className="hamburger-menu ">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span />
        </label>
        <ol className="odd">
          <li className="hex">
            <div className="hex-content">Home</div>
          </li>
          <li className="hex">
            <div className="hex-content">Schedule</div>
          </li>
          <li className="hex">
            <div className="hex-content">Events</div>
          </li>
          <li className="hex">
            <div className="hex-content">Build-Up Events</div>
          </li>
        </ol>  
        <ol className="even">
          <li className="hex">
            <div className="hex-content">Industry Talks</div>
          </li>
          <li className="hex">
            <div className="hex-content">Sponsers</div>
          </li>
          <li className="hex">
            <div className="hex-content">Profile</div>
          </li>
        </ol>
      </div>
    );
  }
}

export default Navbar
