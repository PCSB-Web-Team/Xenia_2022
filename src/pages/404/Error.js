import React from "react";
import bitcoin from "../../assets/images/bitcoin.png";
import "./Error.css";

const Error = () => {
  return (
    <div className="error-page">
      <h1>OOPS!</h1>
      <h5>Something went wrong :(</h5>
      <p>Seems like you are lost in Web 3.0</p>
      <div>
        <span>4</span>
        <img src={bitcoin} alt="404" />
        <span>4</span>
      </div>
    </div>
  )
}

export default Error;