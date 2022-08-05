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
        
        img: {purple1},
        logo: {codestrike},
        event_slogan:
          "Lorem Ipsum is simply dummy typesetting industry ",
      },
      {
        EventName: "Ninja Coding",
        
        img: {purple1},
        logo: {codestrike},
        event_slogan:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Xenathon",
        
        img: {purple1},
        logo: {codestrike},
        event_slogan:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Hacker House",
        
        img: {purple1},
        logo: {codestrike},
        event_slogan:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Data Cup",
        
        img: {purple1},
        logo: {codestrike},
        event_slogan:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Campus to Corporate",
        
        img: {purple1},
        logo: {codestrike},
        event_slogan:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Xe-Natus",
        
        img: {purple1},
        logo: {codestrike},
        event_slogan:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
    ],
    NonTechnical: [
      {
        EventName: "CricWars",
        
        img: {green1},
        logo: {cricwars},
        event_slogan:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Fandom",
        
        img: {green1},
        logo: {cricwars},
        event_slogan:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Treasure Hunt",
        
        img: {green1},
        logo: {cricwars},
        event_slogan:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
    ],
  };

  return (
    <body className="bg-slate-300">
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
    <Link to={`/event-details/`}onClick={() => console.log("heloo")}
                  >
                    
                    
                    <div className="Eventcard_stars pb-32">
          <img src={stars1} alt="str1" className="str1 absolute" />
          <img src={stars2} alt="str2" className="str2 absolute" />
        </div>
        <div className="logo">
          <img src={member.logo} alt="logo" />
        </div>
        <div className="base">
          <img src={member.img} alt="base" />
        </div>
        <h3 className="event_heading text-white text-3xl pt-5">{member.EventName}</h3>
        <h4 className="event_discription text-white pt-1">{member.event_slogan}</h4>
      
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
                  className="cardgreen w-[320px] h-auto transition-all p-3  inline-block m-4 cursor-pointer rounded-xl   "
                >
                  <Link
                    to={`/event-details/`}
                    onClick={() => console.log("heloo")}
                  >
                    <span className="icon ">
                      <li className="carti  ">
                        {/* <article id="date">
                        <aside className="asidegreen">
                          <span className="day">{member.Eventdate}</span>
                          <span className="month">Aug</span>
                        </aside>
                      </article> */}
                        {/* <button onClick={() => console.log("clicked")} className="border-2 border-white"> */}
                        <i class="far fa-shopping-cart text-3xl">
                          {/* console.log("clicked") */}
                        </i>
                        {/* </button> */}
                      </li>
                    </span>

                    <div className="relative   ">
                      <div className="">
                        <img
                          className="Logo max-h-full max-w-full absolute px-12  z-20   "
                          src={member.logo}
                          alt="Logo1"
                        />

                        <img
                          className="base max-h-full max-w-full z-10 pt-16   "
                          src={member.img}
                          alt="Events"
                        />
                      </div>
                    </div>
                    <p className="text_event">
                      <p className="text-white  text-center  p-text-white text-allign:center  rounded-2xl font-bold  cursor-pointer   ">
                        {member.EventName}
                      </p>

                      <p className=" text-white text-center pt-5  p-text-white text-allign:center   font-semibold  cursor-pointer   ">
                        {member.event_slogan}
                      </p>
                    </p>
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
