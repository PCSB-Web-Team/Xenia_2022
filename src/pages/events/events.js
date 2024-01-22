import "./events.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Request from "../../api/requests";

const Events = (props) => {
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState(1);
  const [techEvents, setTechEvents] = useState([]);
  const [nonTechEvents, setNonTechEvents] = useState([]);
  const [events, setEvents] = useState([]);

  async function fetchEventsData() {
    setLoading(true);
    await Request.getEvents()
      .then((res) => {
        let tech = [];
        let nonTech = [];
        tech = res.data.data.filter((event) => event.isTechnical);
        nonTech = res.data.data.filter((event) => !event.isTechnical);
        setTechEvents(tech);
        setNonTechEvents(nonTech);
        setEvents(tech);
      })
      .catch((err) => {
        props.toast.toast.error("Error while fetching events data! ", err);
      });
    setLoading(false);
  }

  useEffect(() => {
    fetchEventsData();
  }, []);

  return (
    <>
      {loading ? props.loader :
        <div className="Events bg-gradient-to-bl bg-black/40 min-h-screen">
          <div className="text-6xl font-semibold text-center text-white pb-12">
            Events
          </div>
          <div className="flex space-x-8 justify-center  text-2xl font-thin tracking-widest text-white mb-2">
            <button
              onClick={() => {
                setEvents(techEvents);
                setStatus(1);
              }}
              className={` px-4 ${status === 1 && "border-b border-cyan-600"}`}
            >
              Technical
            </button>
            <button
              onClick={() => {
                setEvents(nonTechEvents);
                setStatus(2);
              }}
              className={` px-4 ${status === 2 && "border-b border-cyan-600"}`}
            >
              Non-Technical
            </button>
          </div>
          <div className="text-center place-items-center mx-auto md:w-5/6 p-4 gap-4">
            {events.map((event) => (
              <Link
                to={`/events/${event?._id}`}
                onClick={() => (document.documentElement.scrollTop = 0)}
              >
                <div className="group relative hover:scale-105 ease-in-out transition-all inline-block m-4 align-top">
                  {/* <div className=" flex items-center absolute -top-2 z-20 rounded-full -right-4 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-extralight">
                15 Aug
              </div> */}
                  <div
                    key={event._id}
                    className="event-card shadow-[0_0_2px_#86efac,inset_0_0_2px_#86efac,0_0_5px_#3b82f6,0_0_15px_#3b82f6,0_0_30px_#9333ea] bg-opacity-0 w-full md:w-[400px] flex flex-col rounded-3xl items-center h-auto min-h-[200px] backdrop-blur-xl cursor-pointer overflow-hidden"
                  >
                    <div className=" p-4 col-span-1 flex items-center bg-black/60 h-[150px]">
                      <img src={event.logo} className="max-h-full max-w-full" alt="event-logo" />
                    </div>
                    <div className=" event-card-body bg-transparent p-4 h-full col-span-2 text-left bg-gradient-to-br from-black/10 to-black/50  space-y-2 text-white group-hover:bg-blue-400 ">
                      <div className="border-b border-slate-600 text-transparent font-bold text-lg pb-2 group-hover:text-white bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
                        {event.name}
                      </div>
                      <div className="font-light bg-transparent text-sm h-[100px] overflow-auto text-white group-hover:text-white">
                        {event.details}
                      </div>
                      <div>{event.date}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>}
    </>
  );
};

export default Events;
