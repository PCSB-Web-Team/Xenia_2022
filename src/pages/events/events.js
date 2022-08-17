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
  const [techEvents, setTechEvents] = useState([]);
  const [nonTechEvents, setNonTechEvents] = useState([]);

  async function fetchEventsData() {
    await Request.getEvents().then((res) => {
      let tech = [];
      let nonTech = [];

      tech = res.data.data.filter((event) => event.isTechnical);
      nonTech = res.data.data.filter((event) => !event.isTechnical);

      setTechEvents(tech);
      setNonTechEvents(nonTech);
    }).catch((err) => {
      console.error("Error in get req:", err);
    })
  }

  useEffect(() => {
    fetchEventsData();
  }, [])

  return (
    <div className="Events">
      <h1
        className="title text-6xl font-semibold text-center text-white pb-12 "
        style={{ fontFamily: "Quicksand" }}
      >
        Events
      </h1>
      <div className="tabs">
        <button
          type="button1"
          onClick={() => {
            setStatus(1);
          }}
          className={status === 1 ? "tabs-btn active-tab1 mb-4" : "tabs-btn "} 
        >
          Technical
        </button>
        <button
          type="button2"
          onClick={() => {
            setStatus(2);
          }}
          className={status === 2 ? "tabs-btn active-tab2 mt-4" : "tabs-btn"}
        >
          Non- Technical
        </button>
      </div>
      <div className="justify-evenly flex-wrap w-full xl:w-6/5 xl:mx-auto text-center">
        {status === 1 ? (
          <div className="text-center">
            {/* <h1 className="text-purple-400 text-center text-2xl text-sebold">
                Technical
              </h1> */}
            {techEvents.map((event) => (
              <div
                key={event._id}
                className="Eventcard w-[320px] h-auto transition-all inline-block m-4 cursor-pointer rounded-xl"
              >
                <Link
                  to={`/events/${event._id}`}
                  // onClick={() => console.log("heloo")}
                  onClick={() => (document.documentElement.scrollTop = 0)}
                >
                  <div className="Eventcard_stars pb-16">
                    <img src={stars1} alt="str1" className="str1 absolute" />
                    <img src={stars2} alt="str2" className="str2 absolute" />
                  </div>
                  <div className="logo pt-12">
                    <img src={event.logo} alt="logo" />
                  </div>
                  <div className="base">
                    <img src={purple1} alt="base" />
                  </div>
                  <h3 className="event_heading text-white text-3xl pt-5">
                    {event.name}
                  </h3>
                  <h4 className="event_discription text-white pt-1">
                    {event.name}
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center">
            {/* <h1 className="text-lime-400 text-center text-2xl text-bold">
                Non-Technical
              </h1> */}
            {nonTechEvents.map((event) => (
              <div
                key={event._id}
                className="Eventcard w-[320px] h-auto transition-all p-3 inline-block m-4 cursor-pointer rounded-xl   "
              >
                <Link
                  to={`/events/${event._id}`}
                  onClick={() => (document.documentElement.scrollTop = 0)}
                >
                  <div className="Eventcard_stars pb-20">
                    <img src={stars1} alt="str1" className="str1 absolute" />
                    <img src={stars2} alt="str2" className="str2 absolute" />
                  </div>
                  <div className="logo pt-12">
                    <img src={event.logo} alt="logo" />
                  </div>
                  <div className="base">
                    <img src={green1} alt="base" />
                  </div>
                  <h3 className="event_heading text-white text-3xl pt-5">
                    {event.name}
                  </h3>
                  <h4 className="event_discription text-white pt-1">
                    {event.name}
                  </h4>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Events;