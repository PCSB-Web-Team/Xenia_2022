import React, { useEffect, useState } from "react";
import "./eventDetails.css";
import Loader from "../../components/loader";
import axios from "axios";

import Suggestion from "./Suggestion/Suggestion";
import DetailsTab from "./DetailsTabs/DetailsTabs";
import { useParams, Link, useHistory } from "react-router-dom";
const EventDetails = (props) => {
  const [details, setDetails] = useState();

  let { id } = useParams();
  // let history = useHistory();
  console.log("Im here");
  // axios
  //   .get("https://xenia-2022.herokuapp.com/api/events/62e3ee205046b9fbe30f0326")
  //   .then((res) => {
  //     console.log("After get request:", res.data);
  //     //  setEvents(res.data.data)
  //     // const respons  e = res;
  //   });
  // useEffect(() => {
  //   fetchData();
  // }, [id]);
  // const fetchData = async (props) => {
  // try {

  // const response = await getEventDetails(id);

  // console.log(response.data);

  // if (response.data.ok) {
  //   setDetails(() => response.data.data);
  //   // console.log(details);
  // }
  // } catch (error) {
  //   console.log(error);
  //   // history.push("/events");
  // }

  // setLoading(false);
  // });
  const getEventDetails = (id) => {
    return axios.get(
      `https://xenia-2022.herokuapp.com/api/events/62e3ee205046b9fbe30f0326`
    );
  };

  useEffect(() => {
    fetchData();
    // checkRegistered();
  }, [id]);

  const fetchData = async (props) => {
    try {
      const response = await getEventDetails(id);

      console.log(response.data);

      if (response.status) {
        setDetails(() => response.data);
        console.log(details);
      }
    } catch (error) {
      // console.log(error);
      // history.push("/events");
    }

    // setLoading(false);
  };

  

  console.log(details);
  return (
    <div className="MoreInfo">
      {
        <div className="more-info">
          <div className="jumbotron text-center py-2" id="main-detail">
            <h3 className="name">{details.name}</h3>
            <h5 className="platform"> Platform </h5>
            <div className="platform-details"> {details.platform} </div>
            <p className="lead">{details.details}</p>
            <button>Add to cart</button>

            <hr className="my-1" />
            <DetailsTab details={details} />
            <div className="fees"> {details.fees} </div>
          </div>
          <Suggestion suggestions={details.suggestions}></Suggestion>
        </div>
      }
    </div>
  );
};

export default EventDetails;
