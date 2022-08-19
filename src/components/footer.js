import React, { useEffect, useState } from "react";
import xenialogo from "../assets/images/CSI_Logo_blue.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(true);
  const [loc, setLoc] = useState(window.location.href.split("/"));

  useEffect(() => {
    if (loc.length === 4 && loc[3] === "") setShowFooter(false);
  },[loc]);
  return showFooter ? (
    <div className="w-full p-4 py-8 md:p-16 bg-gradient-to-br from-pink-600/20 via-purple-600/20 to-black backdrop-blur-lg">
      <div className="grid md:grid-cols-3">
        <div className="w-full">
          <img className="mx-auto" src={xenialogo}></img>
        </div>
        <div className=" col-span-2 p-4 md:p-16 bg-black/20 text-white">
          <div className=" grid md:grid-cols-4 gap-8">
            <div className="w-full space-y-4">
              <div className="font-bold pb-2 border-b border-gray-400 text-purple-400">
                PCSB Xenia
              </div>
              <div className=" font-thin">Where passion meets perfection.</div>
            </div>
            <div className="w-full space-y-4">
              <div className="font-bold pb-2 border-b border-gray-400 text-purple-400">
                Events
              </div>
              <div className="space-y-2">
                <div className=" font-thin">
                  <Link to="/events">All Events</Link>
                </div>
                <div className=" font-thin">
                  <Link to="/profile">Registered Events</Link>
                </div>
              </div>
            </div>
            <div className="w-full space-y-4">
              <div className="font-bold pb-2 border-b border-gray-400 text-purple-400">
                Useful Links
              </div>
              <div className="space-y-2">
                <div className=" font-thin">
                  <Link to="/auth">Login</Link>
                </div>
                <div className=" font-thin">
                  <Link to="/contact-us">Help</Link>
                </div>
              </div>
            </div>
            <div className="w-full space-y-4">
              <div className="font-bold pb-2 border-b border-gray-400 text-purple-400">
                Contact
              </div>
              <div className="space-y-2">
                <div className=" font-thin space-x-2 flex">
                  <div>🏠</div>
                  <div>Dhankawadi,Katraj,Pune</div>
                </div>
                <div className=" font-thin space-x-2 flex">
                  <div>📭︎</div>
                  <div>Support@pictcsi.com</div>
                </div>
                <div className=" font-thin space-x-2 flex">
                  <div>📞</div>
                  <div>+917028929568</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Footer;
