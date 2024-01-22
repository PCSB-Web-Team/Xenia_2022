import "./background.css";
import React from "react";
import Earth from "../assets/images/background/earth.png";
import Pattern from "../assets/images/background/bg1.png";

export default function Background() {
  return (
    <div className=" h-screen w-full top-0 left-0 fixed -z-10">
      <div className="main-bg h-screen top-0 left-0 w-full overflow-hidden relative">
        <div className=" absolute bottom-0 left-0 w-full h-screen">
          <img
            className=" min-h-screen min-w-full rotate-180 opacity-20"
            src={Pattern}
          ></img>
        </div>
        <div className="fixed top-0 left-0 -z-10 bg-gradient-to-r from-black via-gray-900 to-black">
          <div className="bg"></div>
          <div className="bg bg2"></div>
          <div className="bg bg3"></div>
        </div>
        <div className="bounce-1 opacity-80">
          {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/800px-Ethereum-icon-purple.svg.png"></img> */}
        </div>
        <div className=" absolute -bottom-[100px] right-0 w-[800px] mx-auto opacity-40">
          <img src={Earth}></img>
        </div>
        {/* <div className="">
        <img src={BitcoinBlue}></img>
      </div> */}
        {/* <div className="">
          <img src={Abstract}></img>
        </div> */}
      </div>
    </div>
  );
}
