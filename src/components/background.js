import React from "react";
import "./background.css";
import Earth from "../assets/images/background/earth.png";
import Architecture from "../assets/images/background/bitcoinarch.png";
import BitcoinBlue from "../assets/images/background/bitcoinblue.png";
import Abstract from "../assets/images/background/abstract.png";

export default function Background() {
  return (
    <div className=" h-screen w-full top-0 left-0 fixed -z-10">
      <div className="main-bg h-screen top-0 left-0 w-full overflow-hidden relative">
        <div className="fixed top-0 left-0 -z-10 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          <div class="bg"></div>
          <div class="bg bg2"></div>
          <div class="bg bg3"></div>
        </div>
        <div className="bounce-1 opacity-10">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/800px-Ethereum-icon-purple.svg.png"></img>
        </div>
        {/* <div className="">
          <img src={Architecture}></img>
        </div> */}
        <div className=" absolute -bottom-[100px] right-0 w-[800px] mx-auto opacity-20">
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
