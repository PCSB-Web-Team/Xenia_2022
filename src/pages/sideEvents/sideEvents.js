import "./sideEvent.css";
import Modal from "./modals/modals";
import Requests from "../../api/requests";
import { useState, useEffect } from "react";

export default function SideEvents(props) {
  const [loading, setLoading] = useState(false)
  const [eventsData, setEventsData] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalDetails, setModalDetails] = useState({});

  const toggleModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    setLoading(true)
    try {
      Requests.getSideEvents()
        .then((res) => {
          setEventsData(() => res.data?.data);
          setLoading(false)
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }, []);

  const EventsInfo = eventsData.map((event) => (
    <div className="bg-opacity-0 grid grid-cols-1 md:grid-cols-4 content-center backdrop-blur-lg bg-gradient-to-tr from-gray-600/20 via-purple-600/20 to-pink-600/40 border border-gray-600/20">
      <div className=" col-span-1 w-full h-full items-center justify-center flex">
        <img
          src={event?.logo}
          alt="event-logo"
          className="rounded-t-lg md:rounded-l-lg md:rounded-t-none max-h-full max-w-full"
        />
      </div>
      <div className="p-6 col-span-3 space-y-4">
        <h2 className="font-bold text-xl md:text-3xl pb-2 border-b border-slate-500 tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-auto">
          {event?.name}
        </h2>
        <div className="text-justify max-h-[150px] overflow-y-auto text-gray-300 font-thin">
          {event?.description}
        </div>
        <button
          onClick={() => {
            setModalDetails((previousState) => ({
              ...previousState,
              event,
            }));
            toggleModal();
          }}
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-5 py-2.5 text-center transition-colors ease-in-out"
        >
          More Info
        </button>
      </div>
    </div>
  ));

  return (
    <>
      {loading ? props.loader :
        <>
          <div className=" w-96 md:w-[900px] max-w-full mx-auto p-4 py-8 min-h-screen space-y-12">
            <div className="text-white font-bold mb-4 text-6xl text-center font-sans">
              BuildUp Events
            </div>
            <div className="space-y-4">{EventsInfo}</div>
          </div>
          <Modal modal={modal} details={modalDetails} toggleModal={toggleModal} />
        </>
      }
    </>
  );
}
