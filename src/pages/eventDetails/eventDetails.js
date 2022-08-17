// import Suggestion from "./Suggestion/Suggestion";
import "./eventDetails.css";
import DetailsTab from "./DetailsTabs/DetailsTabs";
import Loader from "../../components/loader";
import Request from "../../api/requests";
import PayByRazor from "../../api/payments";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EventDetails = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();

  const userState = useSelector(states => states.user)

  // const eventRegisterHandler = (id, name, mobile, eventName) => {
  //   if (userState.isAuthenticated) {
  //     checkoutHandler(id, name, mobile, eventName)
  //   } else {
  //   }
  // }

  async function fetchEventData() {
    try {
      const eventData = await Request.getEventById(id);

      if (eventData.data.status) {
        setDetails(() => eventData.data.data[0]);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchEventData();
  }, [id])

  return (
    <div className="MoreInfo">
      {
        loading ? (
          <Loader />
        ) :
          (
            <div className="more-info">
              <div className="jumbotron text-center py-2" id="main-detail">
                <img className="logo " src={details.logo} alt="logo"></img>
                <h3 className="name">{details.name}</h3>
                {/* <h5 className="platform"> Platform </h5>
            <div className="platform-details"> {details.platform} </div> */}
                <p className="lead">{details.details}</p>
                {
                  !userState.loggedIn
                    ? <button className="border-4 border-solid"><Link to='/auth'>Login to Register</Link></button>
                    : <PayByRazor
                      className="border-4 border-solid"
                      eventId={id}
                      userDetails={userState?.userDetails}
                      eventName={details.name}
                    />
                }
                <hr className="my-1" />
                <DetailsTab details={details} />
                <div className="fees"> Fees is {details.fees} </div>
              </div>
              {/* <Suggestion suggestions={details.suggestions}></Suggestion> */}
            </div>
          )}
    </div>
  )
}

export default EventDetails;