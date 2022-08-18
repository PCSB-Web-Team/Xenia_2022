// import "./eventDetails.css";
import { Tabs, Tab } from "./DetailsTabs/DetailsTabs";
import Request from "../../api/requests";
import PayByRazor from "../../api/payments";
import { AuthVerify } from "../../utils/authVerify";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EventDetails = () => {
  const [eventData, setEventData] = useState({});
  const [teamCode, setTeamCode] = useState("");
  let id = useParams().id;

  const userState = useSelector((states) => states.user);

  const handleInputChange = (event) => {
    setTeamCode(event.target.value);
  };

  const handleJoinTeam = () => {};

  useEffect(() => {
    async function fetchEventData() {
      try {
        const eventData = await Request.getEventById(id);

        if (eventData.data?.status) {
          setEventData(() => ({ ...eventData.data.data[0] }));
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchEventData();

    async function fetchIsUserParticipated() {
      try {
        await AuthVerify({ getParticipations: true });
        const participatedEvent = await userState?.participations.find(
          (userParticipatedEvents) => userParticipatedEvents.eventId === id
        );
        if (participatedEvent) {
          setEventData((previousEventData) => ({
            ...previousEventData,
            isParticipated: true,
          }));
          if (participatedEvent.teamId) setTeamCode(participatedEvent.teamId);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchIsUserParticipated();
  }, [id]);

  return (
    <div className="grid md:grid-cols-2 min-h-screen md:p-16 gap-8 bg-black/20">
      <div className="my-auto text-center space-y-4 text-white bg-black/40 backdrop-blur-xl md:h-full p-4">
        <div className=" w-full max-w-[400px] h-[400px] mx-auto">
          <img src={eventData?.logo} alt="event-logo" className="event-logo" />
        </div>
        <div className="text-5xl font-bold text-purple-600 border-b pb-4 border-gray-500">
          {eventData.name}
        </div>
        <div className="text-left">{eventData?.details}</div>
        {eventData?.isLive ? (
          <p className="event-register-buttons disabled">
            Registrations closed ! Try with other events.
          </p>
        ) : (
          <>
            <div className="event-register-buttons">
              {!userState.loggedIn ? (
                <Link to="/auth">
                  <div className=" text-red-400 text-2xl hover:bg-red-300 inline-block mx-auto p-2">
                    Login to participate
                  </div>
                </Link>
              ) : eventData.teamSize > 1 ? (
                eventData.isParticipated ? (
                  <span style={{ color: "#16d616" }}>
                    Already participated with Team Code :{" "}
                    <code>{teamCode}</code>
                  </span>
                ) : (
                  <>
                    <PayByRazor
                      className="border-4 border-solid"
                      eventId={id}
                      userDetails={userState?.userDetails}
                      eventDetails={eventData?.details}
                      buttonName="Register as Team"
                    />
                    <span>OR</span>
                    <input
                      type="text"
                      className="event-register-team-box"
                      name="team-code"
                      placeholder="Enter Team Code"
                      onChange={handleInputChange}
                      value={teamCode}
                      maxLength="6"
                    />
                    <button onClick={handleJoinTeam}>Join Team</button>
                  </>
                )
              ) : eventData.isParticipated ? (
                <span style={{ color: "#16d616" }}>
                  Already registered for the event!
                </span>
              ) : (
                <PayByRazor
                  className="border-4 border-solid"
                  eventId={id}
                  userDetails={userState?.userDetails}
                  eventDetails={eventData?.details}
                  buttonName="Participate"
                />
              )}
            </div>
            <h4 className="event-fees">
              Registration Fees : Rs. {eventData.fees}
            </h4>
          </>
        )}
      </div>
      <div className="event-desc">
        <Tabs>
          <Tab
            className="event-desc-tab"
            component={
              <ol className="event-desc-lists">
                <li>First Prize: Rs. </li>
                <li>Second Prize Rs. </li>
                <li>Second Prize Rs. </li>
                <li>Second Prize Rs. </li>
                <li>Second Prize Rs. </li>
                <li>Third Price Rs. </li>
                <li>Other Participants : Participation Certificate</li>
              </ol>
            }
          >
            Prizes
          </Tab>
          <Tab
            className="event-desc-tab"
            component={
              <ol className="event-desc-lists">
                <li>
                  First Round : <date></date>{" "}
                </li>
                <li>
                  Second Round : <date></date>{" "}
                </li>
                <li>
                  Final Round : <date></date>{" "}
                </li>
              </ol>
            }
            active
          >
            Schedule
          </Tab>
          <Tab
            className="event-desc-tab"
            component={
              <ul className="event-desc-lists">
                {eventData?.rules?.map((rule) => (
                  <li>Rs. {rule}</li>
                ))}
              </ul>
            }
          >
            Rules
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default EventDetails;
