import React, { useState } from "react";
import "./events.css";
import { Link } from "react-router-dom";
const Events = () => {
  const[status,setStatus]=useState(1);
  const events = {
    Technical: [
      {
        EventName: "Event1",
        Eventdate: "25",
        img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
        logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
        team_info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Event2",
        Eventdate: "25",
        img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
        logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
        team_info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Event3",
        Eventdate: "25",
        img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
        logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
        team_info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Event4 ",
        Eventdate: "25",
        img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
        logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
        team_info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Event5",
        Eventdate: "25",
        img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
        logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
        team_info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Event6",
        Eventdate: "25",
        img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
        logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
        team_info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Event7",
        Eventdate: "25",
        img: "https://drive.google.com/uc?export=view&id=1sWjtBMDAZsLxkOAVZ35o8fGLK0CYaVj-",
        logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
        team_info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
    ],
    NonTechnical: [
      {
        EventName: "Event8 ",
        Eventdate: "25",
        img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
        logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
        team_info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Event9",
        Eventdate: "25",
        img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
        logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
        team_info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
      {
        EventName: "Event10",
        Eventdate: "25",
        img: "https://drive.google.com/uc?export=view&id=1kqyU7WUULqPKL8_1TvWt3IuKrWV9akcA",
        logo: "https://drive.google.com/uc?export=view&id=1f_Hr2NYr2XrecCxmIK23fNCLjsJo-ReQ",
        team_info:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown print",
      },
    ],
  };
    

 
  return (
    <body className="bg-black">
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
            className={status === 1  ? "tabs-btn active-tab1" : "tabs-btn"}
            >
            Technical
          </button>
          
          <button
            type="button2"
            onClick={() => {
              setStatus(2);
            }}
            className={status === 2  ? "tabs-btn active-tab2" : "tabs-btn"}
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
                  className="cardpink w-[320px] h-auto transition-all p-3  inline-block m-4 cursor-pointer rounded-xl   "
                >
                  <Link
                    to={`/event-details/`}
                    onClick={() => console.log("heloo")}
                  >
                    <div className="app_tooltip">
                      <span className="icon">
                        <li className="carti">
                          <article id="date">
                            <aside className="asidepink">
                              <span className="day">{member.Eventdate}</span>
                              <span className="month">Aug</span>
                            </aside>
                          </article>
                        </li>
                      </span>
                      {/* <span className="icon ">
                        <li className="carti  ">
                          <i class="far fa-shopping-cart text-3xl"></i>
                        </li>
                      </span> */}
                      {/* <span className=" px-20 text-white ">Add to cart</span> */}
                    </div>
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
                        {member.team_info}
                      </p>
                    </p>
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
                        {member.team_info}
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
