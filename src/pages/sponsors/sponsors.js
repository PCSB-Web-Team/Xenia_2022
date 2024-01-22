import React from "react";
import cion from "../../assets/images/cion.svg";
import pubmatic from "../../assets/images/PubMatic_Logo.svg";
import algoanalytics from "../../assets/images/algoanalytics.png";
import budhani from "../../assets/images/budhani.jpeg";
import harbinger from "../../assets/images/harbinger.png";
import "./sponsors.css";


const titleSponsors = [
  {
    name: "CION Digital",
    logo: cion,
    website: "https://www.ciondigital.com/",
  },
];

const coSponsors = [
  {
    name: "PubMatic",
    logo: pubmatic,
    website: "https://pubmatic.com/",
    linkedin: "https://www.linkedin.com/company/pubmatic/",
    instagram: "https://www.instagram.com/pubmatic/",
    facebook: "https://www.facebook.com/PubMatic",
    twitter: "https://twitter.com/pubmatic",
    careers: "https://pubmatic.com/careers/engineering/",
  },
];

const educationSponsors = [
  {
    name: "AlgoAnalytics",
    logo: algoanalytics,
    website: "https://www.algoanalytics.com/",
  },
  {
    name: "Harbinger Group",
    logo: harbinger,
    website: "https://harbingergroup.com/",
  }
];

const eventSponsors = [
  {
    name: "CION Digital",
    logo: cion,
    website: "https://www.ciondigital.com/",
  },
];

const foodSponsors = [
  {
    name: "Budhani Bros Waferwala",
    logo: budhani,
    website: "https://www.budhanibros.com/",
    instagram: "https://www.instagram.com/budhanibroswaferwala/"
  }
]

const getList1 = (sponsorsArray) => {
  const list = sponsorsArray.map((sponsor) => {
    return (
      <div className="sponsor-card">
        <div
          className="logo-container"
          style={{ backgroundImage: `url(${sponsor.logo})` }}
        >
          {/* <img src={sponsor.logo}/> */}
        </div>
        <p className="sponsor-name">{sponsor.name}</p>
        <div className="sponsor-social">
          {sponsor.website && (
            <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
              <i className="fas fa-globe"></i>
            </a>
          )}
          {sponsor.linkedin && (
            <a href={sponsor.linkedin} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-linkedin"></i>
            </a>
          )}
          {sponsor.twitter && (
            <a href={sponsor.twitter} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
          )}
          {sponsor.instagram && (
            <a href={sponsor.instagram} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
          )}
          {sponsor.facebook && (
            <a href={sponsor.facebook} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-facebook"></i>
            </a>
          )}
          {sponsor.careers && (
            <a href={sponsor.careers} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-briefcase"></i>
            </a>
          )}
        </div>
      </div>
    );
  });
  return list;
};

const titleSponsorsList = getList1(titleSponsors);
const coSponsorsList = getList1(coSponsors);
const educationSponsorsList = getList1(educationSponsors);
const eventSponsorsList = getList1(eventSponsors);
const foodSponsorsList = getList1(foodSponsors);

export default function Sponsors() {
  return (
    <div className="sponsors">
      <div className="text-6xl font-semibold text-center text-white pb-12">
        Sponsors
      </div>
      <h1 className="sponsors-head">Title Sponsor</h1>
      <div className="sponsors-list title-sponsors">{titleSponsorsList}</div>
      <div className="sponsors-head">Co Sponsors</div>
      <div className="sponsors-list">{coSponsorsList}</div>
      <div className="sponsors-head">Education Partners</div>
      <div className="sponsors-list">{educationSponsorsList}</div>
      <div className="sponsors-head">Event Sponsors</div>
      <div className="sponsors-list">{eventSponsorsList}</div>
      <div className="sponsors-head">Food Partners</div>
      <div className="sponsors-list">{foodSponsorsList}</div>
    </div>
  );
}
