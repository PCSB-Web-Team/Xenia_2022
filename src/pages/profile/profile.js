import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Requests from "../../api/requests";
import { AuthVerify } from "../../utils/authVerify";

function RegisteredEventCard(eve) {
  const [details, setDetails] = useState({});

  useEffect(() => {
    Requests.getEventById(eve.details?.eventId).then((res) => {
      res = res.data;
      if (res.status) {
        setDetails(res.data);
        // window.location.reload();
      } else {
        alert(res.error);
      }
    });
  }, []);

  return (
    <div className="p-4 bg-gray-200/20 backdrop-blur space-y-4 hover:bg-gray-200/10 transition">
      <div className="text-lg md:text-3xl text-blue-400 font-bold">
        {details?.name}
      </div>
      {details?.teamSize > 1 && (
        <>
          <div className="text-white">
            Team ID: {eve.details?.teamId || "N.A"}
          </div>
        </>
      )}
      <div className="text-gray-300 font-thin">
        {details?.platform?.map(platform => (
          <div>
            <span>Round {platform?.round}</span>{": "}
            <a href={platform?.link} target="_blank" rel="noopener noreferrer">{platform?.name}</a>
          </div>
        ))}
      </div>
      <div className="grid gap-2 text-sm">
        <div className="text-blue-500 font-bold">Date and Time</div>{" "}
        {details?.schedule &&
          details?.schedule.map((round, i) => {
            return (
              <div className=" space-y-2 md:flex md:space-x-2 md:space-y-0">
                <div className="font-bold">Round {i + 1}: </div>
                <div>{round?.datetime}</div>
              </div>
            );
          })}
      </div>
      {details?.link && (
        <div className="w-min">
          <Link to={details?.link}>
            <div className=" text-sky-400">Link</div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default function Profile(props) {
  const [loading, setLoading] = useState(false);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  async function setParticipations() {
    await AuthVerify({
      getParticipations: true,
    }).then(async res => {
      setTimeout(() => {
        setRegisteredEvents(res?.participations);
        setLoading(false);
      }, 1000);
    });
  }
  
  useEffect(() => {
    setLoading(true)
    if (!props?.loggedIn) {
      setLoading(false);
      navigate("/auth");
    }
    Requests.getUserProfile().then(({ data: { status, error, data } }) => {
      if (status) {
        setUserData(data);
      } else {
        props.toast.toast.error("Error retrieving user data! Check if your Logged in correctly", error);
      }
      setLoading(false)
    }).catch(error =>
      props.toast.toast.error("Error: Server unreachable, please try again.", error)
    )
    setParticipations();
  }, []);

  return (
    <>
      {props.toast.container}
      {loading ? props.loader :
        <div className="md:p-4">
          <div className="min-h-screen max-w-6xl mx-auto my-8 p-4 md:p-16 space-y-8 text-gray-200 tracking-widest bg-black/40 backdrop-blur-xl">
            <div className=" font-bold text-3xl md:text-6xl text-purple-600">
              {userData?.name}
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-lg">
              <div className="flex space-x-4">
                <div className="font-bold text-sm">Email: </div>
                <div className="text-sm">{userData?.email}</div>
              </div>
              <div className=" flex space-x-4">
                <div className="font-bold text-sm">Mobile: </div>
                <div className="text-sm">{userData?.mobile}</div>
              </div>
              <div className=" flex space-x-4">
                <div className="font-bold text-sm">College:</div>
                <div className="text-sm">{userData?.college || "N.A"}</div>
              </div>
              <div className=" flex space-x-4">
                <div className="font-bold text-sm">Branch:</div>
                <div className="text-sm">{userData?.branch || "N.A"}</div>
              </div>
            </div>

            <div className=" text-base md:text-3xl text-purple-400 border-b pb-2 border-gray-600">
              Registered Events
            </div>

            <div className=" grid md:grid-cols-2 gap-4">
              {registeredEvents?.length > 0 ? (
                registeredEvents?.map((event) => {
                  return (
                    <RegisteredEventCard details={event}></RegisteredEventCard>
                  );
                })
              ) : (
                <div className="text-2xl">
                  You have not registered to any event !!
                </div>
              )}
            </div>
          </div>
        </div>}
    </>
  );
}
