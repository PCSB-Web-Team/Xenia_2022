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
    name: "Amit Purohit",
    linkedIn: "https://www.linkedin.com/in/amitpurohit47",
    pic: "https://pbs.twimg.com/profile_images/586541177131773953/W3al0XET_400x400.jpg/",
  },
  {
    name: "Aryan Agarwal",
    linkedIn: "https://www.linkedin.com/in/amitpurohit47",
    pic: "https://pbs.twimg.com/profile_images/586541177131773953/W3al0XET_400x400.jpg",
  },
  {
    name: "Abhishek Jadhav",
    linkedIn: "https://www.linkedin.com/in/atharva-belekar-0121",
    pic: "https://pbs.twimg.com/profile_images/586541177131773953/W3al0XET_400x400.jpg",
  },
];
let prernaSthhall = [
  {
    name: "Yash Pande",
    linkedIn: "https://www.linkedin.com/in/siddhesh-joshi-67615816b",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },
  {
    name: "Gaurav Somani",
    linkedIn: "https://www.linkedin.com/in/pranil-bhosale",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },
  {
    name: "Neha Pol",
    linkedIn: "https://www.linkedin.com/in/kshitij-deshpande/",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },

  {
    name: "Advait Naik",
    linkedIn: "https://www.linkedin.com/in/kshitij-deshpande/",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },
];

let team2 = [
  {
    name: "Renuka Saraf",
    linkedIn: "https://www.linkedin.com/in/siddhesh-joshi-67615816b",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },
  {
    name: "Dhiraj Thorat",
    linkedIn: "https://www.linkedin.com/in/pranil-bhosale",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },
  {
    name: "Atharva Kinikar",
    linkedIn: "https://www.linkedin.com/in/kshitij-deshpande/",
    pic: "https://www.instagram.com/p/CgsGxzgvF2Jv5_l_7Ton2JiH-ljfGeJn9c0vQY0/",
  },

  {
    name: "Raj Shende",
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

  let seTeam = team2.map((member) => {
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
      <br />
      {teTeam}
      <br />
      {seTeam}
      <br />
    </div>
  );
};

export default webTeam;
