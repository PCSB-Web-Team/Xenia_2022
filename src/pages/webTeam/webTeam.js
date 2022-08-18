import React from "react";
import "./webTeam.css";
import ProfileCard from "./TeamProfile";
// import Vedant from "../../Assets/Images/WebTeam/vedant.jpeg";
// import Gaurav from "../../Assets/Images/WebTeam/gaurav.jpg";
// import Amit from "../../Assets/Images/WebTeam/amit.jpg";
// import Atharva from "../../Assets/Images/WebTeam/atharva.jpeg";
// import Siddhesh from "../../Assets/Images/WebTeam/siddhesh.jpg";
// import Pranil from "../../Assets/Images/WebTeam/pranil.jpeg";
// import Kshitij from '../../Assets/Images/WebTeam/kshitij.jpg';

let teamDetails = [
  {
    name: "Vedant Daigavane",
    linkedIn: "https://www.linkedin.com/in/vedant-daigavane-25785315a",
    pic: "https://pbs.twimg.com/profile_images/586541177131773953/W3al0XET_400x400.jpg",
  },
  {
    name: "Gaurav Shinde",
    linkedIn: "https://www.linkedin.com/in/gaurav-shinde-658250196/",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },
  {
    name: "Amit Purohit",
    linkedIn: "https://www.linkedin.com/in/amitpurohit47",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },
  {
    name: "Atharva Belekar",
    linkedIn: "https://www.linkedin.com/in/atharva-belekar-0121",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },
];
let prernaSthhall = [
  {
    name: "Siddhesh Joshi",
    linkedIn: "https://www.linkedin.com/in/siddhesh-joshi-67615816b",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },
  {
    name: "Pranil Bhosale",
    linkedIn: "https://www.linkedin.com/in/pranil-bhosale",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },
  {
    name: "Kshitij Deshpande",
    linkedIn: "https://www.linkedin.com/in/kshitij-deshpande/",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },
];

const webTeam = (props) => {
  let team = teamDetails.map((member) => {
    return (
      <ProfileCard details={member} key={member}>
        {" "}
      </ProfileCard>
    );
  });
  let teTeam = prernaSthhall.map((member) => {
    return (
      <ProfileCard details={member} key={member}>
        {" "}
      </ProfileCard>
    );
  });

  return (
    <div className="webTeam-wb" id="webTeam-wb">
      <header className="page-headers-wb">
        <h1 className="header-name-wb">PCSB WEB TEAM</h1>
      </header>
      {team}
      <br/>
      {teTeam}
    </div>
  );
};

export default webTeam;