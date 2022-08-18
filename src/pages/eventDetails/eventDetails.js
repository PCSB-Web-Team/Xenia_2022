// import "./eventDetails.css";
import Request from "../../api/requests";
import PayByRazor from "../../api/payments";
import { AuthVerify } from "../../utils/authVerify";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const EventDetails = () => {
  const [eventData, setEventData] = useState({});
  const [teamCode, setTeamCode] = useState("");
  const [participated, setParticipated] = useState(false);
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
      console.log("useEffect: fetchIsUserParticipated");
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
          setParticipated(true);
          if (participatedEvent.teamId) setTeamCode(participatedEvent.teamId);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchIsUserParticipated();
  }, [id]);

  return (
    <div className="grid md:grid-cols-2 min-h-screen md:p-8 gap-8 backdrop-blur-xl bg-gradient-to-b from-gray-900/40 to-gray-600/80">
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
        <div className="event-fees text-blue-400 text-xl font-bold tracking-wider text-left flex space-x-2">
          <div>Fees : Rs.</div>
          <div>{eventData.fees}</div>
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
                  <div className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg px-5 py-2.5 text-center mx-auto text-lg inline-block">
                    Login to participate
                  </div>
                </Link>
              ) : eventData.teamSize > 1 ? (
                eventData.isParticipated ? (
                  <div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-2xl tracking-widest">
                      Registered Successfully
                    </div>
                    <span className="text-blue-400">
                      Team Code : <code>{teamCode}</code>
                    </span>
                  </div>
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
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-2xl tracking-widest">
                  Registered Successfully
                </div>
              ) : (
                <PayByRazor
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2 tracking-widest text-lg"
                  eventId={id}
                  userDetails={userState?.userDetails}
                  eventDetails={eventData?.details}
                  buttonName={"Participate"}
                />
              )}
            </div>
          </>
        )}
      </div>
      {/* event details description */}
      <div className="space-y-4  p-8 h-full overflow-auto bg-black/20 shadow-lg border border-gray-700 max-h-screen">
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
