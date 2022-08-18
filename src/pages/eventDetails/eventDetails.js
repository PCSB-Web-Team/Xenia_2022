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
    <div className="grid md:grid-cols-2 md:h-screen md:p-8 gap-8 backdrop-blur-xl bg-gradient-to-b from-gray-900/40 to-gray-600/80">
      <div className="my-auto text-center space-y-4 text-white md:h-full p-4 py-8  ">
        <div className=" w-full max-w-[400px] h-[400px] mx-auto">
          <img src={eventData?.logo} alt="event-logo" className="event-logo" />
        </div>
        <div className="text-6xl w-min mx-auto font-bold text-purple-600 border-gray-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {eventData.name}
        </div>
        <div className=" border-b border-gray-500"></div>
        <div className="text-left font-light text-gray-400">
          {eventData?.details}
        </div>
        <div className="event-fees text-green-400 text-xl">
          Fees : Rs. {eventData.fees}
        </div>
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
          </>
        )}
      </div>
      {/* event details description */}
      <div className="space-y-4  p-8 h-full overflow-auto bg-black/20 shadow-lg border border-gray-700">
        <div className="text-center text-4xl font-bold text-purple-400">
          Description
        </div>
        <div className="">
          <div className="text-2xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 w-min">
            Prizes
          </div>
          <div className="border-t pt-2 border-slate-600">
            <ol className="text-gray-300 font-thin  list-decimal list-inside">
              <li>First Prize: Rs. </li>
              <li>Second Prize Rs. </li>
              <li>Second Prize Rs. </li>
              <li>Second Prize Rs. </li>
              <li>Second Prize Rs. </li>
              <li>Third Price Rs. </li>
              <li>Other Participants : Participation Certificate</li>
            </ol>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-2xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 w-min">
            Scedule
          </div>
          <div className="border-t pt-2 border-slate-600">
            <ol className="text-gray-300 font-thin  list-decimal list-inside">
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
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-2xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 w-min">
            Rules
          </div>
          <div className="border-t pt-2 border-slate-600">
            <ol className="text-gray-300 font-thin  list-decimal list-inside">
              <li>First Prize: Rs. </li>
              <li>Second Prize Rs. </li>
              <li>Second Prize Rs. </li>
              <li>Second Prize Rs. </li>
              <li>Second Prize Rs. </li>
              <li>Third Price Rs. </li>
              <li>Other Participants : Participation Certificate</li>
            </ol>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-2xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 w-min">
            Rules
          </div>
          <div className="border-t pt-2 border-slate-600">
            <ol className="text-gray-300 font-thin  list-decimal list-inside">
              <li>First Prize: Rs. </li>
              <li>Second Prize Rs. </li>
              <li>Second Prize Rs. </li>
              <li>Second Prize Rs. </li>
              <li>Second Prize Rs. </li>
              <li>Third Price Rs. </li>
              <li>Other Participants : Participation Certificate</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="event-desc"></div>
    </div>
  );
};

export default EventDetails;
