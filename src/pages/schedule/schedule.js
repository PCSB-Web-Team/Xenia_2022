import "./schedule.css";
import Timer from "../../components/countdownTimer";
import EventDay from "./scheduleComponents/eventDay.tsx";

function Schedule() {

  const eventsSchedule = [
    [
      {
        name: "Session by Satyajit",
        time: '5:30 pm',
        platform: 'F-Auditorium'
      }
    ],
    [
      {
        name: "Arpit Agarwal Session",
        time: '5:00 pm',
        platform: 'Auditorium'
      }
    ],
    [
      {
        name: "Hacker House",
        time: '4:00 pm - 6:30p pm',
        platform: 'Offline'
      }
    ],
    [
      {
        name: "Flashmob",
        time: '3:00 pm - 3:30 pm',
        platform: 'On Campus'
      },
      {
        name: "Inauguration",
        time: '3:30 pm - 4:00 pm',
        platform: 'Offline'
      },
      {
        name: "Xenathon",
        time: 'Full Day',
        platform: 'Offline'
      },
      {
        name: "Hacker House Session",
        time: '4:00 pm - 6:30 pm',
        platform: 'Auditorium'
      },
      {
        name: "Xenatus Round 1",
        time: '6:45 pm - 7:30 pm',
        platform: 'Online'
      },
      {
        name: "Codestrike Round 1",
        time: '7:45 pm - 8:45 pm',
        platform: 'Online'
      },
      {
        name: "CricWars Round 1",
        time: '9:15 pm - 9:45 pm',
        platform: 'Online'
      },
    ],
    [
      {
        name: "Fandom Round 1",
        time: '3:00 pm - 4:00 pm',
        platform: 'Online'
      },
      {
        name: "Hacker House Session",
        time: '4:00 pm - 7:00 pm',
        platform: 'Offline'
      },
      {
        name: "CricWars Round 2",
        time: '6:00 pm - 8:00 pm',
        platform: 'Offline'
      },
      {
        name: "Xenatus Round 2",
        time: '7:15 pm - 8:00 pm',
        platform: 'Offline'
      },
      {
        name: "Ninja Coding Round 1",
        time: '8:00 pm - 9:00 pm',
        platform: 'Online'
      },
      {
        name: "Campus to Corporate Round 1",
        time: '9:00 pm - 9:45 pm',
        platform: 'Online'
      },
    ],
    [
      {
        name: "CricWars Round 3",
        time: '8:00 am - 6:00 pm',
        platform: 'Offline'
      },
      {
        name: "Fandom Round 2",
        time: '10:00 am - 12:00 pm',
        platform: 'Offline'
      },
      {
        name: "Campus to Corporate Round 2",
        time: '12:30 pm - 1:30 pm',
        platform: 'Offline'
      },
      {
        name: "Treasure Hunt Round 2",
        time: '2:00 pm - 4:00 pm',
        platform: 'Online'
      },
      {
        name: "Ninja Coding Round 2",
        time: '4:15 pm - 5:15 pm',
        platform: 'Online'
      },
      {
        name: "Xenatus Round 3",
        time: '5:30 pm - 6:00 pm',
        platform: 'Offline'
      },
      {
        name: "Codestrike Round 2",
        time: '6:00 pm - 7:00 pm',
        platform: 'Offline'
      },
    ],
    [
      {
        name: "Xenathon",
        time: '8:00 am - 1:00 pm',
        platform: 'Offline'
      },
      {
        name: "Fandom Round 3",
        time: '9:00 am - 12:00 pm',
        platform: 'Offline'
      },
      {
        name: "Campus to Corporate Round 3",
        time: '9:30 am - 1:00 pm',
        platform: 'Offline'
      },
      {
        name: "Hacker House",
        time: '9:30 am - 1:00 pm',
        platform: 'Offline'
      },
      {
        name: "Treasure Hunt Round 2",
        time: '11:00 am - 12:15 pm',
        platform: 'Offline'
      },
    ]
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
    </div>
  );
}

export default Schedule;