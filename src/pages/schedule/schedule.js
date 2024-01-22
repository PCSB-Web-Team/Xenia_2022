import "./schedule.css";
import Timer from "../../components/countdownTimer";
import EventDay from "./scheduleComponents/eventDay.tsx";

function Schedule() {

  const eventsSchedule = [
    [
      {
        name: "Campus to Corporate",
        time: '5:00 pm - 5:30 pm',
        platform: 'IT/ENTC Seminar Hall'
      },
      {
        name: "Decrypto Hunt",
        time: '5:30 pm - 6:30 pm',
        platform: 'Offline'
      },
      {
        name: "CricWars",
        time: '10:00 pm - 11:00 pm',
        platform: 'Online'
      }
    ],//*01st,
    [
      {
        name: "AI Hackathon",
        time: '3:30 pm - 4:30 pm',
        platform: 'Auditorium'
      },
      {
        name: "CricWars",
        time: '4:00 pm - 5:00 pm',
        platform: 'E&TC Classrooms'
      },
      {
        name: "Fandom",
        time: '4:15 pm - 6:15 pm',
        platform: 'IT/E&TC Classrooms'
      },
      {
        name: "Campus to Corporate",
        time: '4:45 pm - 5:45 pm',
        platform: 'Offline'
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
      }
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
        platform: 'E&TC Classrooms'
      },
      {
        name: "Decrypto Hunt",
        time: '11:00 am - 12:00 noon',
        platform: 'Offline'
      },
      {
        name: "Fandom",
        time: '12:00 noon - 1:00 pm',
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
        name: "CricWars",
        time: '10:00 am onwards',
        platform: 'IT/E&TC Seminar Hall'
      }
    ],//*03rd
    [
      {
        name: "AI Hackathon",
        time: '9:00 am - 2:00 pm',
        platform: 'Auditorium'
      },
      {
        name: "Xenathon (ChannelExpo)",
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
        time: 'To Be Decided',
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