import React from "react";
import "./webTeam.css";

// import { Profiler } from 'react';
// import logo from '../../Assets/Images/logo.svg';

const TeamProfile = ({ details }) => {
  return (
    <>
      {/* <div className="profile-wb bg-black/10">
        <a
          className="memberLink"
          href={details.linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          <div className="picNLink">
            <img
              src={details.pic}
              className=" min-w-full min-h-full absolute top-0 left-0 -translate-x-0.5 -translate-y-0.5"
              alt=""
            ></img>
            <div className="absolute top-0 left-0 z-10 -translate-x-0.5 -translate-y-0.5 text-2xl">
              <i className="fa fa-linkedin text-primary" aria-hidden="true" />
            </div>
          </div>

          <div className=" text-xl">{details.name}</div>
        </a>
      </div> */}

      <div className=" bg-black/20 inline-block p-4 m-4 space-y-4">
        <a
          className=" group relative h-[150px] w-[150px] md:h-[300px] md:w-[300px] flex items-center justify-center rounded-full overflow-hidden bg-gray-700 transition-all ease-in-out text-center"
          href={details.linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={details.pic}
            className="min-w-full min-h-full group-hover:blur-lg mx-auto"
            alt=""
          ></img>
          {/* <i className="footerIcon fa fa-linkedin" /> */}
          <i
            className="fa fa-linkedin text-primary absolute invisible group-hover:visible"
            aria-hidden="true"
          />
        </a>
        <div className=" md:text-3xl font-bold text-gray-200">
          {details.name}
        </div>
      </div>
    </>
  );
};

export default TeamProfile;
