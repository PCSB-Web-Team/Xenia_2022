// import "./eventDetails.css";
import Request from "../../api/requests";
// import PayByRazor from "../../api/payments";
import { AuthVerify } from "../../utils/authVerify";
import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EventDetails = (props) => {
  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState({});
  const [team, setTeam] = useState({
    id: "",
    name: "",
  });
  // const [joinTeamError, setJoinTeamError] = useState("");

  let id = useParams().id;
  const navigate = useNavigate();

  let userState = useSelector((userState) => userState.user);

  const handleInputChange = (event) => {
    setTeam((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleRegisterEvent = async () => {
    setLoading(true);
    let { data } = await Request.registerEvent({ eventId: id });
    if (data?.status) {
      props.toast.toast.success(
        "Successfully registered for " + eventData?.name || ""
      );
      setLoading(false);
      return;
    }
    setLoading(false);
    props.toast.toast.error("Error: " + data?.error?.message || "");
  };

  const handleCreateTeam = async () => {
    setLoading(true);
    if (team.name === "") {
      props.toast.toast.error("Please enter valid Team Name!");
      setLoading(false);
      return;
    }
    let { data } = await Request.createTeam({
      eventId: id,
      teamName: team?.name,
    });
    if (data?.status) {
      props.toast.toast.success(
        "Successfully registered team '" +
        team?.name +
        "' for " +
        eventData?.name
      );
      setLoading(false);
      return;
    }
    setLoading(false);
    props.toast.toast.error(
      "Error while creating team!, " +
      data?.error?.message || ""
    );
  };

  const handleJoinTeam = async () => {
    setLoading(true);
    if (team.id === "") {
      props.toast.toast.error("Please enter valid Team ID!");
      setLoading(false);
      return;
    }
    await Request.joinTeam({ eventId: id, teamId: team?.id })
      .then((res) => {
        if (res?.data?.status) {
          props.toast.toast.success(
            "Successfully joined team with Team ID: " + team?.id
          );
        } else {
          props.toast.toast.error("Error: " + res?.data?.error?.message || "");
          setLoading(false);
          // setJoinTeamError(res?.data?.error);
        }
      })
      .catch((error) => {
        console.log(error);
        props.toast.toast.error(
          "Error: server unreachable, please try again. " +
          error || ""
        );
      });
    setLoading(false);
  };

  async function fetchEventData() {
    setLoading(true);
    try {
      const data = await Request.getEventById(id);
      if (data.data?.status) {
        setEventData(() => ({ ...data.data?.data }));
      } else navigate("404");
    } catch (error) {
      props.toast.toast.error(
        "Error: server unreachable, at the moment. " +
        error || ""
      );
      navigate("404");
    }
  }

  async function fetchIsUserParticipated() {
    try {
      await AuthVerify({
        getParticipations: true,
      }).then((res) => {
        setTimeout(() => {
          let participatedEvent = res.participations?.find(
            (userParticipatedEvents) => userParticipatedEvents.eventId === id
          );

          if (participatedEvent) {
            setEventData((previousState) => ({
              ...previousState,
              isParticipated: true,
            }));
            if (participatedEvent.teamId) {
              setTeam((previousState) => ({
                ...previousState,
                id: participatedEvent.teamId,
              }));
            }
            if (eventData?.teamSize > 1) {
              props.toast.toast(
                `Registered for the event ${participatedEvent.teamId &&
                `with Team ID ${participatedEvent.teamId}`
                }`
              );
            } else {
              // props.toast.toast(`You have already registered for the event`);
            }
          }
          setLoading(false);
        }, 2500);
      });
    } catch (error) {
      props.toast.toast.error(
        "Error: couldn't fetch participation information." +
        error || ""
      );
    }
  }

  useEffect(() => {
    if (!userState.loggedIn) {
      console.log(userState.loggedIn);
      props.toast.toast.warn("You are not logged in! Login or try refreshing the page.")
    }

    fetchEventData();
    fetchIsUserParticipated();
  }, [id]);

  return (
    <>
      {props.toast.container}
      {loading ? (
        props.loader
      ) : (
        <div className="grid md:grid-cols-2 min-h-screen md:p-8 gap-8 backdrop-blur-xl bg-gradient-to-b from-gray-900/40 to-gray-600/80">
          <div className="my-auto text-center space-y-4 text-white md:h-full p-4 py-8  ">
            <div className=" w-3/4 max-w-[380px] h-[380px] mx-auto">
              <img
                src={eventData?.logo}
                alt="event-logo"
                className="event-logo"
              />
            </div>
            <div className="py-3 text-6xl mx-auto font-bold text-purple-600 border-gray-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              {eventData?.name}
            </div>
            <div className=" border-b border-gray-500"></div>
            <div className="font-light text-gray-400 text-justify">
              {eventData?.details}
            </div>
            <div className="event-fees text-blue-400 text-lg font-bold text-left  tracking-widest grid grid-cols-2 place-items-center">
              <div className="flex space-x-2">
                <div className="text-gray-200 font-thin">Fees: </div>
                {eventData?.fees === 0 || eventData?.fees === "0" ? (
                  <div className="text-green">Free</div>
                ) : (
                  <div>Rs. {eventData?.fees}</div>
                )}
              </div>
              <div className="flex space-x-2">
                <div className="text-gray-200 font-thin">Team Size: </div>
                <div>{eventData?.teamSize}</div>
              </div>
            </div>
            {/* <p className="text-green-400">
              Registrations are currently being done manually. Sorry for
              inconvenience:(
            </p> */}
            {!eventData?.isLive ? (
              <p className="text-red-400 font-medium event-register-buttons disabled">
                Registrations closed! Try with other events.
              </p>
            ) : (
              <></>
              // <>
              //   <div className="event-register-buttons">
              //     {!userState.loggedIn ? (
              //       <Link to="/auth">
              //         <div className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br  focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium  px-5 py-2.5 text-center mx-auto text-lg inline-block">
              //           Login to participate
              //         </div>
              //       </Link>
              //     ) : eventData?.teamSize > 1 ? (
              //       eventData.isParticipated ? (
              //         <div>
              //           <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-2xl tracking-widest">
              //             Successfully Registered
              //           </div>
              //           <span className="text-blue-400">
              //             Team Code : <code>{team.id}</code>
              //           </span>
              //         </div>
              //       ) : (
              //         <div className="grid grid-cols-1 place-items-center gap-2">
              //           {/* <PayByRazor
              //             handleLoading={setLoading}
              //             className="border-2 border-solid p-2"
              //             eventId={id}
              //             userDetails={userState?.userDetails}
              //             eventDetails={eventData}
              //             teamName={team?.name}
              //             buttonName="Register as Team"
              //           /> */}{" "}
              //           {/*//! Team events are made free so no need of Razorpay!*/}
              //           {eventData.fees ? (
              //             <a
              //               href={eventData?.paymentLink || "#/event/"}
              //               rel="noopener noreferrer"
              //               target="_blank"
              //               className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl   focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  px-5 py-2.5 text-center mr-2 mb-2 tracking-widest text-lg"
              //             >
              //               Pay and register
              //             </a>
              //           ) : (
              //             <div className="grid grid-cols-2 gap-2">
              //               <input
              //                 type="text"
              //                 className="p-2 px-4 bg-black/20 outline-none block"
              //                 name="name"
              //                 placeholder="Create Team Name"
              //                 onChange={handleInputChange}
              //                 value={team?.name}
              //               />
              //               <button
              //                 className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  px-5 py-2.5 text-center text-lg"
              //                 onClick={handleCreateTeam}
              //               >
              //                 Register as Team
              //               </button>
              //             </div>
              //           )}
              //           <div className="text-gray-400 font-bold col-span-2">
              //             OR
              //           </div>
              //           <div className="space-x-2 col-span-2">
              //             <input
              //               type="text"
              //               className="p-2 bg-black/20 outline-none"
              //               name="id"
              //               placeholder="Enter Team Code"
              //               onChange={handleInputChange}
              //               value={team?.id}
              //             />
              //             <button
              //               className="col-span-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium  px-5 py-2.5 text-center text-lg"
              //               onClick={handleJoinTeam}
              //             >
              //               Join Team
              //             </button>
              //           </div>
              //         </div>
              //       )
              //     ) : eventData.isParticipated ? (
              //       <div className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-600 font-bold text-2xl tracking-widest">
              //         Registered Successfully
              //       </div>
              //     ) : // <PayByRazor
              //       //   handleLoading={setLoading}
              //       //   className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl   focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  px-5 py-2.5 text-center mr-2 mb-2 tracking-widest text-lg"
              //       //   eventId={id}
              //       //   userDetails={userState?.userDetails}
              //       //   eventDetails={eventData}
              //       //   buttonName={"Participate"}
              //       // />{/*//! Not using embedded Razorpay popup instead using redirects */}
              //       eventData?.fees === 0 ? (
              //         <button
              //           className="border-2 border-solid p-2"
              //           onClick={handleRegisterEvent}
              //         >
              //           Register
              //         </button>
              //       ) : (
              //         <a
              //           href={eventData?.paymentLink || "#/event/"}
              //           rel="noopener noreferrer"
              //           target="_blank"
              //           className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl   focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium  px-5 py-2.5 text-center mr-2 mb-2 tracking-widest text-lg"
              //         >
              //           Register and Pay
              //         </a>
              //       )}
              //   </div>
              // </>
            )}
          </div>
          {/* event details description */}
          <div className="space-y-4  p-8 h-full overflow-auto bg-black/20 shadow-lg border border-gray-700 max-h-screen font-thin text-gray-200">
            <div className="text-4xl font-bold text-purple-400 mb-8 border-b border-purple-400/20 pb-2">
              Description
            </div>
            <div className=" grid md:grid-cols-2 gap-4">
              <div className="">
                <div className="text-2xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 space-x-2">
                  <label>Prizes</label> <i class="far fa-trophy" />
                </div>
                <div className="border-t pt-2 border-slate-600">
                  <ol className="text-gray-300 font-thin  ">
                    {eventData?.prizes?.length ? (
                      eventData?.prizes?.map((data, idex) =>
                        data?.label !== "" ? (
                          <li>
                            {data?.position} {data?.position && ": "}
                            {data?.prize && "Rs."} {data?.prize} (
                            {data?.label && data.label})
                          </li>
                        ) : (
                          <li>
                            {data?.position} : Rs. {data?.prize}
                          </li>
                        )
                      )
                    ) : (
                      <div>Coming Soon...</div>
                    )}
                  </ol>
                </div>
              </div>

              <div className="">
                <div className="text-2xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 space-x-2">
                  <label>Schedule</label>
                  {/* <img
                className="h-[24px] w-[24px] inline-block "
                src={"https://cdn-icons-png.flaticon.com/512/3652/3652191.png"}
                alt=""
              /> */}
                  <i class="far fa-calendar"></i>
                </div>
                <div className="border-t pt-2 border-slate-600">
                  <ol className="text-gray-300 font-thin  list-disc list-inside">
                    {
                      eventData?.schedule?.map((data) => (
                        <li>
                          Round {data.round} : {data.datetime !== "" ? <a href="https://www.pcsbxenia.com/schedule">{data.datetime}</a> : <a href="https://www.pcsbxenia.com/schedule">Check Schedule Page</a>}
                        </li>
                      ))}
                  </ol>
                </div>
              </div>

              <div className="space-y-2 col-span-2">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500 space-x-2">
                  <label>Rules</label>
                  {/* <img
                className="h-[24px] w-[24px] inline-block "
                src={
                  "https://cdn-icons.flaticon.com/png/512/3251/premium/3251560.png?token=exp=1660934349~hmac=38e045e4a5d1f01823b2d0e41a3d8f17"
                }
                alt=""
              /> */}
                  <i class="far fa-clipboard-list-check"></i>
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

              <div className="col-span-2">
                <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500">
                  Platforms :{" "}
                  <div className="mt-2 pt-1 font-light text-blue-200 border-t border-slate-600">
                    {eventData?.platform?.map((data) => (
                      <p>
                        Round {data?.round} :{" "}
                        <strong>
                          <a
                            href={data?.link}
                            rel="noreferrer noopener"
                            target="_blank"
                          >
                            {data?.name}
                          </a>
                        </strong>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-span-2">
                <div className="text-2xl font-bold pb-2 mt-5 bg-clip-text text-transparent bg-gradient-to-r from-green-200 via-green-400 to-green-500">
                  Contact Help
                </div>
                <div className="border-t pt-2 border-slate-600">
                  {eventData?.contact?.map((data) => (
                    <div>
                      <span className="text-blue-300 px-3">
                        {(data?.split(" ")?.[0] || " ") +
                          " " +
                          data?.split(" ")?.[1] || ":"}{" "}
                      </span>
                      <p className="inline-block text-blue-300  font-bold font-xl">
                        <a href={`tel:${data?.split(" ")?.[3]}`}>
                          📞{" "}
                          {(data?.split(" ")?.[2] || "") +
                            data?.split(" ")?.[3] || ""}
                        </a>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventDetails;
