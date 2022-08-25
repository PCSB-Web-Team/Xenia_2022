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
    ],//*22nd,
    [
      {
        name: "Arpit Agarwal Session",
        time: '5:00 pm',
        platform: 'Auditorium'
      }
    ],//*23rd,
    [
      {
        name: "Hacker House Introductory Session",
        time: '4:00 pm - 6:30 pm',
        platform: 'Offline'
      }
    ],//*24th
    [
      {
        name: "Inauguration Ceremony",
        time: '3:30 pm - onwards',
        platform: 'Offline'
      },
      {
        name: "Hacker House Session 1",
        time: '5:00 pm - 7:00 pm',
        platform: 'Offline'
      },
    ],//*25th
    [
      {
        name: "AlgoAnalytics Session",
        time: '4:30 pm - 4:30 pm',
        platform: 'Offline'
      },
      {
        name: "Hacker House Session 1",
        time: '4:30 pm - 7:00 pm',
        platform: 'Offline'
      },
      {
        name: "Xenatus Round 1",
        time: '5:00 pm - 5:45 pm',
        platform: 'Online'
      },
      {
        name: "Fandom Round 1",
        time: '7:00 pm - 8:00 pm',
        platform: 'Online'
      },
      {
        name: "C2C Round 1",
        time: '8:00 pm - 9:00 pm',
        platform: 'Online'
      },
      {
        name: "CricWars Round 1",
        time: '9:00 pm - 10:00 pm',
        platform: 'Online'
      },
      {
        name: "Xenathon (Ideathon) Round 1",
        time: 'To be scheduled',
        platform: 'Online'
      },
      {
        name: "Codestrike Round 1",
        time: '10:00 pm - 11:59 pm',
        platform: 'Online'
      },
    ],//*26th
    [
      {
        name: "Xenatus Round 2",
        time: '10:00 am - 11:00 am',
        platform: 'Offline'
      },
      {
        name: "Fandom Round 2",
        time: '11:00 am - 1:00 pm',
        platform: 'Offline'
      },
      {
        name: "C2C Round 2",
        time: '2:00 pm - 4:00 pm',
        platform: 'Offline'
      },
      {
        name: "CricWars Round 2",
        time: '4:00 pm - 6:00 pm',
        platform: 'Offline'
      },
      {
        name: "Treasure Hunt Round 1",
        time: '6:00 pm - 7:30 pm',
        platform: 'Online'
      },
      {
        name: "Ninja Coding Round 1",
        time: '9:30 pm - 9:30 pm',
        platform: 'Online'
      },
    ],//*27th
    [
      {
        name: "CricWars Round 3",
        time: '8:00 am - 4:00 pm',
        platform: 'Offline'
      },
      {
        name: "Fandom Round 3",
        time: '9:00 am - 12:00 pm',
        platform: 'Offline'
      },
      {
        name: "C2C Round 3",
        time: '10:00 am - onwards',
        platform: 'Offline'
      },
      {
        name: "Codestrike Round 2",
        time: '11:00 am - 1:00 pm',
        platform: 'Offline'
      },
      {
        name: "Xenatus Round 3",
        time: '12:00 pm - 1:00 pm',
        platform: 'Offline'
      },
      {
        name: "Hacker House Final",
        time: '12:00 pm - onwards',
        platform: 'Offline'
      },
      {
        name: "Ninja Coding Round 2",
        time: '2:00 pm - 3:30 pm',
        platform: 'Offline'
      },
      {
        name: "Treasure Hunt Round 2",
        time: '3:15 pm - 4:45 pm',
        platform: 'Offline'
      },
      {
        name: "Xenathon (Ideathon) Round 2",
        time: 'To be scheduled',
        platform: 'Offline'
      },
    ]//*28th
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