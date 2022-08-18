import React, { useEffect } from "react";
import logo from "../../assets/images/xeniaLogoLight.png";
import Cube from "../../components/cube";
import "./home2.css";

const Home2 = () => {
  return (
    <div className="home2">
      <div className="wrapper flex flex-col">
        <div className="left">
          <img src={logo} alt="logo" />
          <p className="text-white">Where passion meets perfection</p>
        </div>
        <div className="right">
          <div className="cube-wrapper">
            <Cube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
