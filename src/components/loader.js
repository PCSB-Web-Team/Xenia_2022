import React, { Component } from "react";
import "./loader.css";

export class Loader extends Component {
  render() {
    return (
      <>
        <div id="cube">
          <div id="front"></div>
          <div id="back"></div>
          <div id="bottom"></div>
          <div id="top"></div>
          <div id="left"></div>
          <div id="right"></div>
        </div>
        <p>
          XENIA'22<span id="d1">.</span>
          <span id="d2">.</span>
          <span id="d3">.</span>
        </p>
      </>
    );
  }
}

export default Loader;
