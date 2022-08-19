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
    pic: "https://media-exp1.licdn.com/dms/image/C4D03AQHe3Uo_i2xnsQ/profile-displayphoto-shrink_800_800/0/1658767401227?e=1666224000&v=beta&t=_CFXuM5HYp6FBfDDF80PIrgH-z2a6t4btZsLV6AK3jM",
  },
  {
    name: "Amit Purohit",
    linkedIn: "https://www.linkedin.com/in/amitpurohit47",
    pic: "https://nth22.s3.ap-south-1.amazonaws.com/amit.jpg",
  },
  {
    name: "Aryan Agarwal",
    linkedIn: "https://www.linkedin.com/in/-aryanagrawal/",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657432300507.jpg",
  },
  {
    name: "Abhishek Jadhav",
    linkedIn: "https://www.linkedin.com/in/abhishek-jadhav-292373203",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657451628937.png",
  },
];
let prernaSthhall = [
  {
    name: "Yash Pande",
    linkedIn: "https://www.linkedin.com/in/yash-pande-1a5812206",
    pic: "https://drive.google.com/uc?export=view&id=1LOq2Bb_04Yde_SfUtRs7AGZBekhnxony",
  },
  {
    name: "Gaurav Somani",
    linkedIn: "https://www.linkedin.com/in/gaurav-somani-294233218",
    pic: "https://nth22.s3.ap-south-1.amazonaws.com/GauravSomani_circle.png",
  },
  {
    name: "Neha Pol",
    linkedIn: "https://www.linkedin.com/in/neha-pol-8b9aa6206",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657452277119.jpg",
  },

  {
    name: "Advait Naik",
    linkedIn: "https://www.linkedin.com/in/advait-naik-080439223/",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657705171543.jpg",
  },
];

let team2 = [
  {
    name: "Renuka Saraf",
    linkedIn: "https://www.linkedin.com/in/renuka-saraf-538846240/",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657819990252.jpg",
  },
  {
    name: "Dhiraj Thorat",
    linkedIn: "https://www.linkedin.com/in/dhiraj-thorat-073970215",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1658575296915.jpg",
  },
  {
    name: "Atharva Kinikar",
    linkedIn: "https://www.linkedin.com/in/atharva-kinikar/",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657699710579.jpg",
  },

  {
    name: "Raj Shende",
    linkedIn: "https://www.linkedin.com/in/raj-shende-350718204",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657699545232.jpg",
  },
];

let team3 = [
  {
    name: "Vansh Teppalwar",
    linkedIn: "https://www.linkedin.com/in/vansh-teppalwar-0b60b0217/",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1658743938457.jpg",
  },
  {
    name: "Vaishnavi Katkar",
    linkedIn: "https://www.linkedin.com/in/vaishnavi-katkar-0a61a9211",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1658766834425.jpg",
  },

  {
    name: "Devraj Shetake",
    linkedIn: "https://www.linkedin.com/in/devraj-shetake-439606206/1",
    pic: "https://nth22.s3.ap-south-1.amazonaws.com/devraj.jpg",
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

  let bTeam = team3.map((member) => {
    return (
      <ProfileCard details={member} key={member}>
        {" "}
      </ProfileCard>
    );
  });

  return (
    <div className="webTeam-wb" id="webTeam-wb">
      {/* <header className="page-headers-wb"> */}
      <h1 className="header-name-wb text-4xl p-6">PCSB WEB TEAM</h1>
      {/* </header> */}
      {team}
      <br />
      {teTeam}
      <br />
      {seTeam}
      <br />
      {bTeam}
    </div>
  );
};

export default webTeam;
