import React, { useState } from "react";
import "./events.css";
import purple1 from "../../assets/images/purple_base.png";
import green1 from "../../assets/images/green_base.png";
import codestrike from "../../assets/images/code_strike.png";
import cricwars from "../../assets/images/cricwars.png";
import stars1 from "../../assets/images/stars1.png";
import stars2 from "../../assets/images/stars2.png";

import { Link } from "react-router-dom";
const Events = () => {
  const [status, setStatus] = useState(1);
  const events = {
    Technical: [
      {
        EventName: "Codestrike",

        img: { purple1 },
        logo: { codestrike },
        event_slogan: "Lorem Ipsum is simply dummy text ",
      },
      {
        EventName: "Ninja Coding",

        img: { green1 },
        logo: { codestrike },
        event_slogan: "Lorem Ipsum is simply dummy text ",
      },
      {
        EventName: "Xenathon",

        img: { purple1 },
        logo: { codestrike },
        event_slogan: "Lorem Ipsum is simply dummy text ",
      },
      {
        EventName: "Hacker House",

        img: { green1 },
        logo: { codestrike },
        event_slogan: "Lorem Ipsum is simply dummy text ",
      },
      {
        EventName: "Data Cup",

        img: { purple1 },
        logo: { codestrike },
        event_slogan: "Lorem Ipsum is simply dummy text ",
      },
      {
        EventName: "Campus to Corporate",

        img: { green1 },
        logo: { codestrike },
        event_slogan: "Lorem Ipsum is simply dummy text ",
      },
      {
        EventName: "Xe-Natus",

        img: { purple1 },
        logo: { codestrike },
        event_slogan: "Lorem Ipsum is simply dummy text ",
      },
    ],
    NonTechnical: [
      {
        EventName: "CricWars",

        img: { green1 },
        logo: { cricwars },
        event_slogan: "Lorem Ipsum is simply dummy text ",
      },
      {
        EventName: "Fandom",

        img: { purple1 },
        logo: { cricwars },
        event_slogan: "Lorem Ipsum is simply dummy text ",
      },
      {
        EventName: "Treasure Hunt",

        img: { green1 },
        logo: { cricwars },
        event_slogan: "Lorem Ipsum is simply dummy text ",
      },
    ],
  };

  return (
    <body className="bg-slate-800">
      <div className="Events">
        <h1
          className="title text-6xl font-semibold text-center text-white pb-12 "
          style={{ fontFamily: "Quicksand" }}
        >
          Events
        </h1>
        <div className="tabs">
          <button
            type="button1"
            onClick={() => {
              setStatus(1);
            }}
            className={status === 1 ? "tabs-btn active-tab1" : "tabs-btn"}
          >
            Technical
          </button>

          <button
            type="button2"
            onClick={() => {
              setStatus(2);
            }}
            className={status === 2 ? "tabs-btn active-tab2" : "tabs-btn"}
          >
            Non- Technical
          </button>
        </div>
        <div className="  justify-evenly flex-wrap w-full xl:w-6/5 xl:mx-auto  text-center">
          {status === 1 ? (
            <div className="text-center">
              {/* <h1 className="text-purple-400 text-center text-2xl text-sebold">
                Technical
              </h1> */}
              {events.Technical.map((member, i) => (
                <div
                  key={`member${i}`}
                  className="Eventcard w-[320px] h-auto transition-all   inline-block m-4 cursor-pointer rounded-xl   "
                >
                  <Link
                    to={`/event-details/`}
                    onClick={() => console.log("heloo")}
                  >
                    <div className="Eventcard_stars pb-32">
                      <img src={stars1} alt="str1" className="str1 absolute" />
                      <img src={stars2} alt="str2" className="str2 absolute" />
                    </div>
                    <div className="logo">
                      <img src={codestrike} alt="logo" />
                    </div>
                    <div className="base">
                      <img src={purple1} alt="base" />
                    </div>
                    <h3 className="event_heading text-white text-3xl pt-5">
                      {member.EventName}
                    </h3>
                    <h4 className="event_discription text-white pt-1">
                      {member.event_slogan}
                    </h4>
                  </Link>{" "}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center">
              {/* <h1 className="text-lime-400 text-center text-2xl text-bold">
                Non-Technical
              </h1> */}
              {events.NonTechnical.map((member, i) => (
                <div
                  key={`member${i}`}
                  className="Eventcard w-[320px] h-auto transition-all p-3  inline-block m-4 cursor-pointer rounded-xl   "
                >
                  <Link
                    to={`/event-details/`}
                    onClick={() => console.log("heloo")}
                  >
                    <div className="Eventcard_stars pb-32">
                      <img src={stars1} alt="str1" className="str1 absolute" />
                      <img src={stars2} alt="str2" className="str2 absolute" />
                    </div>
                    <div className="logo ">
                      <img
                        src={cricwars}
                        alt="logo"
                      />
                    </div>
                    <div className="base">
                      <img src={green1} alt="base" />
                    </div>
                    <h3 className="event_heading text-white text-3xl pt-5">
                      {member.EventName}
                    </h3>
                    <h4 className="event_discription text-white pt-1">
                      {member.event_slogan}
                    </h4>
                  </Link>
                </div>
              ))}{" "}
            </div>
          )}
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.11.2/css/all.css"
      />
    </body>
  );
};

export default Events;
