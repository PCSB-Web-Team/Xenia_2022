import React from "react";
import { motion, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

function EventDay(props) {
  const navigate = useNavigate();
  const imgVariants: Variants = {
    offscreen: {
      y: 200,
    },
    onscreen: {
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const renderEvents = props.eventsArray.map((event: any) => (
    <motion.div
      className="each-event"
      key={event.name}
      onClick={() => {
        // window.open("http://pcsbxenia.com/events/");
        navigate("")
        
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={imgVariants}>
        <abbr title="A competitive coding event">{event.name}</abbr>
        <p>Time: <span>{event.time}</span></p>
        <p>Platform: <span>{event.platform}</span></p>
      </motion.div>
    </motion.div>
  ));

  return (
    <div className="event-day">
      <div className="event-day-date">
        <p>Day</p>
        <h4>{props.dayNumber}</h4>
      </div>
      <div className="event-date-hex">
        <div className="hex">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="event-date-hex-bg"></div>
        <div className="hex">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="events-row">{renderEvents}</div>
    </div>
  );
}

export default EventDay;
