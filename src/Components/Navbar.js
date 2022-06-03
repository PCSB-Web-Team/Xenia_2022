import React, { Component } from 'react'
import "../Components/Navbar.css";

export class Navbar extends Component {
  render() {
    return (

      <div className="hamburger-menu   ">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span />
        </label>
        
        <ol className="odd px-96 place-items-center pt-52">
          <li className="hex">
            <div className="hex-content text-center">Home</div>
          </li>
          <li className="hex ">
            <div className="hex-content text-center">Schedule</div>
          </li>
          <li className="hex">
            <div className="hex-content text-center">Events</div>
          </li>
          <li className="hex">
            <div className="hex-content text-center">Build-Up Events</div>
          </li>
        </ol>  
        
        <ol className="even px-96">
          <li className="hex pb-24">
            <div className="hex-content text-center">Industry Talks</div>
          </li>
          <li className="hex">
            <div className="hex-content text-center">Sponsers</div>
          </li>
          <li className="hex">
            <div className="hex-content text-center">Profile</div>
          </li>
        </ol>
        
      </div>
    );
  }
}

export default Navbar
