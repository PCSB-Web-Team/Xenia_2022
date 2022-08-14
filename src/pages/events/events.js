import "./events.css";
import { useEffect, useState } from "react";
import purple1 from "../../assets/images/purple_base.png";
import green1 from "../../assets/images/green_base.png";
import stars1 from "../../assets/images/stars1.png";
import stars2 from "../../assets/images/stars2.png";
import { Link } from "react-router-dom";
import Request from "../../api/requests";

const Events = () => {
  const [status, setStatus] = useState(1);
  const [techEvents, setTechEvents] = useState([
    {
      title: "Event",
      description:
        "description tech = res.data.data.filter((event) => event.isTechnical); nonTech = res.data.data.filter((event) => !event.isTechnical);",
    },
  ]);
  const [nonTechEvents, setNonTechEvents] = useState([]);
  const [events, setEvents] = useState([]);

  async function fetchEventsData() {
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
        console.error("Error in get req:", err);
      });
  }

  useEffect(() => {
    fetchEventsData();
  }, []);

  return (
    <div className="Events bg-gradient-to-bl from-black to-slate-800">
      <h1
        className="title text-6xl font-semibold text-center text-white pb-12 "
        style={{ fontFamily: "Quicksand" }}
      >
        Events
      </h1>
      <div className="flex space-x-8 justify-center  text-2xl font-thin tracking-widest text-gray-400 mb-2">
        <button
          type="button1"
          onClick={() => {
            setEvents(techEvents);
            setStatus(1);
          }}
          className={` px-4 ${status === 1 && "border-b border-cyan-600"}`}
        >
          Technical
        </button>
        <button
          type="button2"
          onClick={() => {
            setEvents(nonTechEvents);
            setStatus(2);
          }}
          className={` px-4 ${status === 2 && "border-b border-cyan-600"}`}
        >
          Non-Technical
        </button>
      </div>
      <div className="text-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mx-auto md:w-5/6 p-4 gap-4">
        {events.map((event) => (
          <Link
            to={`/events/${event._id}`}
            onClick={() => (document.documentElement.scrollTop = 0)}
          >
            <div
              key={event._id}
              className="event-card group w-[450px] grid grid-cols-3 items-center h-auto min-h-[200px] backdrop-blur-md transition-all cursor-pointer overflow-hidden hover:scale-105 ease-in-out"
            >
              <div className=" p-4 col-span-1 flex items-center bg-black/10 h-[150px]">
                <img src={event.logo} className="max-h-full max-w-full"></img>
              </div>
              <div className=" event-card-body p-4 h-full col-span-2 text-left bg-gradient-to-br from-cyan-800/10 to-black/80 space-y-2 text-gray-400 group-hover:bg-cyan-700 ">
                <div className="border-b border-slate-600 text-cyan-400 font-bold text-lg pb-2 group-hover:text-black">
                  {event.name}
                </div>
                <div className="font-light text-sm h-[100px] overflow-auto group-hover:text-white">
                  {event.details}
                </div>
                <div>{event.date}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
