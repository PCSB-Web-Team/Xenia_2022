import React, { useEffect, useState } from "react";
import "./eventDetails.css";
import Loader from "../../components/loader";
import Suggestion from "./Suggestion/Suggestion";
import DetailsTab from "./DetailsTabs/DetailsTabs";

const EventDetails = (props) => {
  const [details, setDetails] = useState({
    platform: "Xenia",
    name: "Codestrike",
    details: "details of events",
    rules:["Google not allowed"],
    prizes:["Cash prize"],
    contacts:[9876543210],
    fees:"registration fees"
  });
  
  console.log(details);
  return (
    <div className="MoreInfo">
      {
          <div className="more-info">

          <div className="jumbotron text-center py-2" id="main-detail">
            <h3 className="name">{details.name}</h3>
            <h5 className='platform'> Platform </h5>
            <div className='platform-details'> {details.platform} </div>
            <p className="lead">{details.details}</p>
            <button>
              Add to cart
            </button>  
            

            <hr className="my-1" />
          <DetailsTab details={details} />
          <div className='fees'> {details.fees} </div>
          </div>
          <Suggestion suggestions={details.suggestions}></Suggestion>
          
        </div>
      }
    </div>
  );
};


export default  EventDetails;
