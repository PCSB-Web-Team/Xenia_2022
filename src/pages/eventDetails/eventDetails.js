// import "./eventDetails.css";
import Request from "../../api/requests";
import PayByRazor from "../../api/payments";
import { AuthVerify } from "../../utils/authVerify";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const EventDetails = () => {
  const [eventData, setEventData] = useState({});
  const [userState, setUserState] = useState({
    loggedIn: false,
    participations: [],
    isParticipated: false
  });
  const [teamId, setTeamId] = useState("");
  // const [joinTeamError, setJoinTeamError] = useState("");

  let id = useParams().id;
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setTeamId(event.target.value);
  };

  const handleJoinTeam = () => {
    Request.joinTeam({ eventId: id, teamId })
      .then((res) => {
        if (res.data.status) {
        } else {
          // setJoinTeamError(res?.data?.error); //* Me bnata error handling ka component, pure website ke liye common
        }
      })
      .catch((err) => {
        alert(err);
        // handle error
      });
  };

  async function fetchEventData() {
    try {
      const data = await Request.getEventById(id);
      console.log(data);
      if (data.data?.status) {
        setEventData(() => ({ ...data.data?.data[0] }));
      } else navigate("404");
    } catch (error) {
      navigate("404");
      console.error(error);
    }
  }

  async function fetchIsUserParticipated() {
    try {
      let { loggedIn, participations } = await AuthVerify({ getParticipations: true })

      const participatedEvent = participations.find((userParticipatedEvents) => userParticipatedEvents.eventId === id)

      if (participatedEvent) {
        setEventData((previousEventData) => ({ ...previousEventData }));
        setUserState(previousUserState => ({ ...previousUserState, loggedIn, isParticipated: true }));
        if (participatedEvent.teamId) setTeamId(participatedEvent.teamId);
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchEventData();
    fetchIsUserParticipated();
  }, []);

  return (
    <div className="grid md:grid-cols-2 min-h-screen md:p-8 gap-8 backdrop-blur-xl bg-gradient-to-b from-gray-900/40 to-gray-600/80">
      <div className="my-auto text-center space-y-4 text-white md:h-full p-4 py-8  ">
        <div className=" w-full max-w-[400px] h-[400px] mx-auto">
          <img src={eventData?.logo} alt="event-logo" className="event-logo" />
        </div>
        <div className="text-6xl w-min mx-auto font-bold text-purple-600 border-gray-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {eventData?.name}
        </div>
        <div className=" border-b border-gray-500"></div>
        <div className="text-left font-light text-gray-400">
          {eventData?.details}
        </div>
        <div className="event-fees text-blue-400 text-xl font-bold tracking-wider text-left flex space-x-2">
          <div>Fees : Rs.</div>
          <div>{eventData?.fees}</div>
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
                  <div className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium  px-5 py-2.5 text-center mx-auto text-lg inline-block">
                    Login to participate
                  </div>
                </Link>
              ) : eventData.teamSize > 1 ? (
                userState.isParticipated ? (
                  <div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-2xl tracking-widest">
                      Registered Successfully
                    </div>
                    <span className="text-blue-400">
                      Team Code : <code>{teamId}</code>
                    </span>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 place-items-center gap-2">
                    <PayByRazor
                      className="border-4 border-solid"
                      eventId={id}
                      userDetails={userState?.userDetails}
                      eventDetails={eventData?.details}
                      buttonName="Register as Team"
                    />
                    <div className="text-gray-400 font-bold">OR</div>
                    <div className="space-x-2 col-span-2">
                      <input
                        type="text"
                        className="p-2 bg-black/20 outline-none"
                        name="team-code"
                        placeholder="Enter Team Code"
                        onChange={handleInputChange}
                        value={teamId}
                      />
                      <button
                        className="col-span-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  px-5 py-2.5 text-center text-lg"
                        onClick={handleJoinTeam}
                      >
                        Join Team
                      </button>
                    </div>
                  </div>
                )
              ) : userState.isParticipated ? (
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-2xl tracking-widest">
                  Registered Successfully
                </div>
              ) : (
                <PayByRazor
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl   focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  px-5 py-2.5 text-center mr-2 mb-2 tracking-widest text-lg"
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
      <div className="space-y-4  p-8 h-full overflow-auto bg-black/20 shadow-lg border border-gray-700 max-h-screen font-thin text-gray-200">
        <div className="text-4xl font-bold text-purple-400 mb-8 border-b border-purple-400/20 pb-2">
          Description
        </div>
        <div className=" grid md:grid-cols-2 gap-4">
          <div className="">
            <div className="text-2xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 w-min">
              Prizes
            </div>
            <div className="border-t pt-2 border-slate-600">
              <ol className="text-white  ">
                {eventData?.prizes?.length ? (
                  eventData?.prizes?.map((data) => (
                    <li>
                      {data?.position} : Rs.{data?.prize}
                    </li>
                  ))
                ) : (
                  <div>Coming Soon...</div>
                )}
              </ol>
            </div>
          </div>

          <div className="">
            <div className="text-2xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 w-min">
              Schedule
            </div>
            <div className="border-t pt-2 border-slate-600">
              <ol className="text-gray-300 font-thin  list-disc list-inside">
                {
                  eventData?.schedule?.map((data) => (
                    <li>
                      Round {data.round} : <date>{data.datetime}</date>
                    </li>
                  ))
                }
              </ol>
            </div>
          </div>

          <div className="space-y-2 col-span-2">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 w-min">
              Rules
            </div>
            <div className="border-t pt-2 border-slate-600 space-y-2 ">
              {eventData?.rules?.map((data) => (
                <div>
                  <p className="text-blue-300  font-bold font-xl">
                    {data?.roundName}
                  </p>
                  <ul className="text-white list-disc list-inside">
                    {data?.roundRules?.map((s) => (
                      <li>{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
