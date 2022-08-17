import "./eventDetails.css";
import { Tabs, Tab } from "./DetailsTabs/DetailsTabs";
import Request from "../../api/requests";
import PayByRazor from "../../api/payments";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";

const EventDetails = () => {
  const [eventData, setEventData] = useState({})
  const [teamCode, setTeamCode] = useState("")
  let id = useParams().id;

  const userState = useSelector(states => states.user)

  const handleInputChange = (event) => {
    setTeamCode(event.target.value)
  }

  const handleJoinTeam = () => {

  }

  useEffect(() => {
    async function fetchEventData() {
      try {
        const eventData = await Request.getEventById(id);
        console.log(eventData);

        if (eventData.data.status) {
          setEventData(() => eventData.data.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchEventData();
  }, [id])

  return (
    <div className="event-details-page">
      <header className="event-details-title">
        <h1>{eventData?.name}</h1>
        <h3
          className="event-status"
          style={{ color: eventData?.isLive ? "#16d616" : "#f63535" }}
        >
          Registrations {eventData?.isLive ? "Open" : "Closed"}
        </h3>
      </header>
      <div className="event-details-container">
        <h4 className="event-type">{eventData?.teamSize > 1 ? "Team Event" : "Individual Participation"}</h4>
        <div className="event-abstract">
          <img src={eventData?.logo} alt="event-logo" className="event-logo" />
          <hr></hr>
          <p className="event-details">{eventData?.details}</p>
          {eventData?.isLive
            ? <p className="event-register-buttons disabled">Registrations closed ! Try with other events.</p>
            : <>
              <div className="event-register-buttons">
                {
                  !userState.loggedIn
                    ? <Link to='/auth'>Login to Register</Link>
                    : eventData.teamSize > 1
                      ? <>
                        <PayByRazor
                          className="border-4 border-solid"
                          eventId={id}
                          userDetails={userState?.userDetails}
                          eventDetails={eventData?.details}
                          buttonName="Register as Team"
                        />
                        <span>OR</span>
                        <input type="text" className="event-register-team-box" name="team-code" placeholder="Enter Team Code" onChange={handleInputChange} value={teamCode} maxLength="6" />
                        <button onClick={handleJoinTeam}>Join Team</button>
                      </>
                      : <PayByRazor
                        className="border-4 border-solid"
                        eventId={id}
                        userDetails={userState?.userDetails}
                        eventDetails={eventData?.details}
                        buttonName="Register and Pay"
                      />
                }
              </div>
              <h4 className="event-fees">Registration Fees : Rs. {eventData.fees}</h4>
            </>
          }
        </div>
        <div className="event-desc">
          <Tabs>
            <Tab className="event-desc-tab" component={
              <ol className="event-desc-lists">
                <li>First Prize: Rs. </li>
                <li>Second Prize Rs. </li>
                <li>Third Price Rs. </li>
                <li>Other Participants : Participation Certificate</li>
              </ol>
            }>Prizes</Tab>
            <Tab className="event-desc-tab" component={
              <ol className="event-desc-lists">
                <li>First Round : <date></date> </li>
                <li>Second Round : <date></date> </li>
                <li>Final Round : <date></date> </li>
              </ol>
            } active>Schedule</Tab>
            <Tab className="event-desc-tab" component={
              <ul className="event-desc-lists">
                {eventData?.rules?.map((rule) => <li>Rs. {rule}</li>)}
              </ul>
            }>Rules</Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

export default EventDetails;

/**
{
    "_id": "62e3ee205046b9fbe30f0326",
    "name": "Codestrike",
    "details": "Codestrike is a Competitive Programming contest hosted online. Programmers may take up any language of their choice.",
    "fees": 0,
    "teamSize": 1,
    "logo": "https://xeniabackend.herokuapp.com/logos/code-strike.png",
    "isTechnical": true,
    "prizes": [],
    "schedule": [],
    "rules": [],
    "__v": 0
}
 */