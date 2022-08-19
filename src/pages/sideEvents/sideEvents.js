import "./sideEvent.css";
import Modal from "./modals/modals";
import Requests from "../../api/requests";
import { useState, useEffect } from "react";

export default function SideEvents() {
  const [eventsData, setEventsData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    try {
      Requests.getSideEvents()
        .then((res) => {
          setEventsData(() => res.data?.data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const EventsInfo = eventsData.map((event) => (
    <div className="bg-opacity-0 grid grid-cols-1 md:grid-cols-4 content-center backdrop-blur-lg bg-gradient-to-tr from-gray-600/20 via-purple-600/10 to-pink-600/20 border border-gray-600/20">
      <div className=" col-span-1 w-full">
        <img
          src={event?.logo}
          alt="event-logo"
          className="rounded-t-lg md:rounded-l-lg md:rounded-t-none w-[210px] h-[220px] w-full"
        />
      </div>
      <div className="p-6 col-span-3 space-y-4">
        <h2 className="font-bold text-xl md:text-3xl pb-2 border-b border-slate-700 text-gray-200 tracking-widest">
          {event?.name}
        </h2>
        <div className="text-white font-light text-justify max-h-[150px] overflow-y-auto">
          {event?.description}
        </div>
        <div
          onClick={() => {
            setModalDetails((previousState) => ({
              ...previousState,
              event,
            }));
            toggleModal();
          }}
          className="text-green-400 px-4 inline-block border border-green-500/20 cursor-pointer hover:bg-green-400/40 transition-all ease-in-out"
        >
          More Info
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className=" w-96 md:w-[900px] max-w-full mx-auto p-4 py-8 min-h-screen space-y-12">
        <div className="text-white font-bold mb-4 text-6xl text-center font-sans">
          BuildUp Events
        </div>
        <div className="space-y-4">{EventsInfo}</div>
      </div>
      <Modal modal={modal} details={modalDetails} toggleModal={toggleModal} />
    </>
  );
}
