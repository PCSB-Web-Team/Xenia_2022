import React, { useEffect, useState } from "react";
import "./eventDetails.css";
import Loader from "../../components/loader";
import axios from "axios";

import Suggestion from "./Suggestion/Suggestion";
import DetailsTab from "./DetailsTabs/DetailsTabs";
import { useParams, Link, useHistory } from "react-router-dom";
const EventDetails = (props) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  // let history = useHistory();
  console.log("Im here",id);

useEffect(() => {
  fetchData();
  
}, [id]);

const fetchData = async (props) => {
  // axios.get(`https://xenia-2022.herokuapp.com/api/events/${id}`)
  // .then((response)=>{
  //   console.log(response);

  //   if (response.data.status) {
  //     console.log(response.data.data[0]);
  //     let detail=response.data.data[0];
  //     setDetails(detail);
  //     console.log(details);
  //   }
  // })
  // .catch (error =>{
  //   console.log(error);
  // })
  // setLoading(false);
  try {
    const response = await axios.get(`https://xenia-2022.herokuapp.com/api/events/${id}`);

    // console.log("after fetch is: ",response.data);

    if (response.data.status) {
      // console.log("data response is:",response.data.data[0]);
      setDetails(() => response.data.data[0]);
      // console.log("details is: ",details);
    }
  } catch (error) {
    console.log(error);
    // history.push("/events");
  }

  setLoading(false);


};


  // console.log(details);
  return (
    <div className="MoreInfo">
    {
      loading ? (
        <Loader />
      ) : 
      (
        <div className="more-info">
          <div className="jumbotron text-center py-2" id="main-detail">
          <img className="logo" src={details.logo} alt="logo"></img>
            <h3 className="name">{details.name}</h3>
            {/* <h5 className="platform"> Platform </h5>
            <div className="platform-details"> {details.platform} </div> */}
            <p className="lead">{details.details}</p>
            <button className="border-4 border-solid">Click here to Register</button>

            <hr className="my-1" />
            <DetailsTab details={details} />
            <div className="fees"> Fees is {details.fees} </div>
          </div>
          {/* <Suggestion suggestions={details.suggestions}></Suggestion> */}
        </div>
      )}
    </div>
  // <div>HELOO{details.name}</div>
  );
};

export default EventDetails;
