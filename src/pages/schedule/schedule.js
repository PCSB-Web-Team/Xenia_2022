import "./schedule.css";
import Timer from "../../components/countdownTimer";
import EventDay from "./scheduleComponents/eventDay.tsx";

function Schedule() {

  const eventsSchedule = [
    [
      {
        name: "XENIA Inauguration Ceremony",
        time: '4:00 pm - 4:30 pm',
        platform: 'Auditorium'
      },
      {
        name: "AI Hackathon Workshop",
        time: '4:30 pm - 6:00 pm',
        platform: 'Auditorium'
      },
      {
        name: "Campus to Corporate",
        time: '6:00 pm - 7:00 pm',
        platform: 'Online'
      },
      {
        name: "Fandom",
        time: '7:00 pm - 7:30 pm',
        platform: 'Online'
      },
      {
        name: "Codestrike",
        time: '8:00 pm - 10:00 pm',
        platform: 'Online'
      },
      {
        name: "CricWars",
        time: '10:00 pm - 11:00 pm',
        platform: 'Online'
      }
    ],//*01st,
    [
      {
        name: "Session by IMS",
        time: '3:00 pm - 4:00 pm',
        platform: 'Auditorium'
      },
      {
        name: "Decrypto Hunt",
        time: '4:00 pm - 5:00 pm',
        platform: 'PICT Campus'
      },

      {
        name: "Campus to Corporate",
        time: '5:00 pm - 6:00 pm',
        platform: 'Online '
      },
      {
        name: "Xenathon (Ideathon)",
        time: '5:30 pm - 6:30 pm',
        platform: 'Online'
      },
      {
        name: "Xenogic",
        time: '6:00 pm - 6:30 pm',
        platform: 'Online'
      },
      {
        name: "Ninja Coding",
        time: '7:00 pm - 8:00 pm',
        platform: 'Online'
      },
      {
        name: "Code Strike",
        time: '9:00 pm - 11:00 pm',
        platform: 'Online'
      },
    ],//*02nd,
    [
      {
        name: "AI Hackathon",
        time: 'To Be Decided',
        platform: 'Online'
      },
      {
        name: "Campus to Corporate",
        time: '10:00 am - 11:00 am',
        platform: 'Hybrid'
      },
      {
        name: "CricWars",
        time: '11:00 am - 12:00 noon',
        platform: 'Offline'
      },
      {
        name: "Fandom",
        time: '12:00 noon - 2:00 pm',
        platform: 'E&TC Classrooms'
      },
      {
        name: "Xenogic",
        time: '2:00 pm - 3:00 pm',
        platform: 'F-Building Classroom'
      },
      {
        name: "Xenalytics",
        time: '3:30 pm - 5:30 pm',
        platform: 'F-Building Classroom'
      },
      {
        name: "Decrypto Hunt",
        time: '4:30 pm - 5:30 pm',
        platform: 'Offline'
      },
      {
        name: "Ninja Coding",
        time: '9:00 pm - 11:15 pm',
        platform: 'Online'
      },

    ],//*03rd
    [
      {
        name: "AI Hackathon",
        time: '9:00 am - 2:00 pm',
        platform: 'Auditorium'
      },
      {
        name: "Cricwars",
        time: '9:00 am - 3:00 pm',
        platform: 'IT/E&TC Seminar Hall'
      },
      {
        name: "Xenathon (ChannelExpo)",
        time: '10:00 am - 12:00 noon',
        platform: 'IT/E&TC Seminar Hall'
      },
      {
        name: "Fandom",
        time: '10:00 am - 12:00 noon',
        platform: 'IT/E&TC Seminar Hall'
      },

      {
        name: "Xenogic",
        time: '11:00 am - 12:00 noon',
        platform: 'E&TC Classrooms'
      },
      {
        name: "Xenathon (Ideathon)",
        time: '1:00 pm - 3:00 pm',
        platform: 'IT/E&TC Seminar Hall'
      },
      {
        name: "Closing Ceremony",
        time: '4:00 pm - 5:00 pm',
        platform: 'Auditorium'
      },
    ]//*04th
  ];

  const renderSchedule = eventsSchedule.map((eventDay, index) => (
    <EventDay key={index + 1} dayNumber={index + 1} eventsArray={eventDay} />
  ));

  return (
    <div className="schedule-page">
      <div className="schedule-page-title">
        <p>SCHEDULE</p>
        <Timer />
      </div>
      <div className="events-schedule">{renderSchedule}</div>
      {/* <h1 className="text-white text-4xl text-center">Schedule is being Updated...Stay Tuned!!</h1> */}
    </div>
  );
}

export default Schedule;