import React from "react";
import "./webTeam.css";
// import { Profiler } from 'react';
// import logo from '../../Assets/Images/logo.svg';

const TeamProfile = ({ details }) => {
  return (
    <div className="profile-wb">
      <a
        className="memberLink"
        href={details.linkedIn}
        target="_blank"
        rel="noreferrer"
      >
        <div className="picNLink">
          <img src={details.pic} className="memberPic" alt=""></img>
          {/* <i className="footerIcon fa fa-linkedin" /> */}
          <i
            className="footerIcon fa fa-linkedin text-primary"
            aria-hidden="true"
          />
        </div>

        <div className="memberName">{details.name}</div>
      </a>
    </div>
  );
};

export default TeamProfile;
