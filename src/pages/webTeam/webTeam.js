import "./webTeam.css";
import ProfileCard from "./TeamProfile";

let teamDetails = [
  {
    name: "Aryan Agrawal",
    linkedIn: "https://www.linkedin.com/in/-aryanagrawal/",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657432300507.jpg",
  },
  {
    name: "Atharva Kinikar",
    linkedIn: "https://www.linkedin.com/in/atharva-kinikar/",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657699710579.jpg",
  },
  {
    name: "Abhishek Jadhav",
    linkedIn: "https://www.linkedin.com/in/abhishek-jadhav-292373203",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657451628937.png",
  },

  // {
  //   name: "Yash Pande",
  //   linkedIn: "https://www.linkedin.com/in/yash-pande-1a5812206",
  //   pic: "https://drive.google.com/uc?export=view&id=1LOq2Bb_04Yde_SfUtRs7AGZBekhnxony",
  // },
  {
    name: "Mansi Gundre",
    linkedIn: "https://www.linkedin.com/in/mansi-gundre-a6a722207",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657483448750.jpg",
  },
];
let prernaSthhall = [
  {
    name: "Mansi Gundre",
    linkedIn: "https://www.linkedin.com/in/mansi-gundre-a6a722207",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657483448750.jpg",
  },
  {
    name: "Raj Shende",
    linkedIn: "https://www.linkedin.com/in/raj-shende-350718204",
    pic: "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/files/eb7d93792dc6258a110491d24d9d5f/62ca636b7dffdc1069d3189f/sh_1657699545232.jpg",
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
    name: "Jayesh Pandav",
    linkedIn: "https://www.linkedin.com/in/jayeshpandav/",
    pic: "https://media.licdn.com/dms/image/D4D03AQGQGtPuIzPs2g/profile-displayphoto-shrink_200_200/0/1694241944995?e=1711584000&v=beta&t=LKJJfhsldd_d4yryR4rINs895G3coaoITZ370lWosTM",
  }
  ,
  {
    name: "Pranav Dalvi",
    linkedIn: "https://www.linkedin.com/in/pranav-dalvi-26a37322a/",
    pic: "https://media.licdn.com/dms/image/D4D03AQG5W_fIogUTRw/profile-displayphoto-shrink_200_200/0/1689696111085?e=1711584000&v=beta&t=u2m5dyt1_Ez8v3p7UX_gPURPhWDe26XvK7ZcIvPca3k",
  },
  {
    name: "Manav Mehta",
    linkedIn: "https://www.linkedin.com/in/manav-mehta-05480622a/",
    pic: "https://media.licdn.com/dms/image/D4D35AQEy9gcNlC-RCA/profile-framedphoto-shrink_200_200/0/1704379978035?e=1706666400&v=beta&t=2FvrjBKBt0vwXr-CiChwENvkk0fr8sSezrp2bQGQvxw"

  }
  ,
  {
    name: "Namam",
    linkedIn: "https://www.linkedin.com/in/namam-sharma-5b8a1a1b6/",
    pic: "https://media.licdn.com/dms/image/D4D35AQFy5iX1Q5lq2Q/profile-framedphoto-shrink_200_200/0/1626293676935?e=1626388800&v=beta&t=8mH3wNjZU6qQZqj7qz4zJn4UxX1KX8FqUQb4Jl4c6uQ"
  },
  {
    name: "Manthan Adhav",
    linkedIn: "https://www.linkedin.com/in/manthan-adhav-0289a8230/",
    pic: "https://media.licdn.com/dms/image/D4D03AQHFyWvaWYifPg/profile-displayphoto-shrink_200_200/0/1701004597290?e=1711584000&v=beta&t=G-SV-V9ut5uDV2A1_jVzAE9YkeSkIA64q1txi0zKX40"
  },
  {
    name: "Kavita Thete",
    linkedIn: "https://www.linkedin.com/in/kavitathete/",
    pic: "https://avatars.githubusercontent.com/u/97501836?v=4"
  },
  {
    name: "Soham",
    linkedIn: "https://www.linkedin.com/in/soham-ghosh-4b1a1a1b6/",
    pic: "https://media.licdn.com/dms/image/D4D35AQGy9Y8L5e9vqQ/profile-framedphoto-shrink_200_200/0/1626293676935?e=1626388800&v=beta&t=6XZkK1XyS5dXZa7b5KXtVxZnGzXbQ8P3ZJ8TQzTmMg4"
  },
  {
    name: "Parth Sali",
    linkedIn: "https://www.linkedin.com/in/parthsali/",
    pic: "https://avatars.githubusercontent.com/u/108068631?v=4"
  }
];

let team3 = [
  {
    name: "Devraj Shetake",
    linkedIn: "https://www.linkedin.com/in/devraj-shetake-439606206/1",
    pic: "https://nth22.s3.ap-south-1.amazonaws.com/devraj.jpg",
  },
  {
    name: "Amit Purohit",
    linkedIn: "https://www.linkedin.com/in/amitpurohit47",
    pic: "https://nth22.s3.ap-south-1.amazonaws.com/amit.jpg",
  },
  {
    name: "Vedant Daigavane",
    linkedIn: "https://www.linkedin.com/in/vedant-daigavane-25785315a",
    pic: "https://media-exp1.licdn.com/dms/image/C4D03AQHe3Uo_i2xnsQ/profile-displayphoto-shrink_800_800/0/1658767401227?e=1666224000&v=beta&t=_CFXuM5HYp6FBfDDF80PIrgH-z2a6t4btZsLV6AK3jM",
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
    <div
      className="min-h-screen text-center backdrop-blur-lg bg-gradient-to-b from-gray-900 to-gray-600 p-4 md:px-32"
      id="webTeam-wb"
    >
      {/* <header className="page-headers-wb"> */}
      <h1 className="header-name-wb text-xl md:text-6xl p-6 border-b  border-gray-600 mb-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        PCSB WEB TEAM
      </h1>
      {/* </header> */}
      {team}
      <br />
      {seTeam}


    </div>
  );
};

export default webTeam;
