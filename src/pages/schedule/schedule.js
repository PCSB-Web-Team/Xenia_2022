import "./schedule.css";
import Timer from "../../components/countdownTimer";
import EventDay from "./scheduleComponents/eventDay.tsx";
import event1Image from "../../assets/images/xeniaLogo.png";
import event2Image from "../../assets/images/xeniaLogo.png";
import event3Image from "../../assets/images/xeniaLogo.png";

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
        platform: ''
      }
    ],
    [
      {
        name: "Hacker House",
        time: '4:00 - 6:30p pm',
        platform: ''
      }
    ],
    [
      {
        name: "Hacker House Session",
        time: '4:00 - 6:30 pm',
        platform: ''
      },
      {
        name: "Event 8",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: event2Image,
      },
      {
        name: "Event 9",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: event3Image,
      },
    ],
  ];

  const renderSchedule = eventsSchedule.map((eventDay, index) => (
    <EventDay key={index + 1} dayNumber={index + 1} eventsArray={eventDay} />
  ));

  return (
    <div className="schedule-page">
      <div className="schedule-page-title">
        <p>COMING SOON</p>
        <Timer />
      </div>
      {/* <div className="events-schedule">{renderSchedule}</div> */}
    </div>
  );
}

export default Schedule;

/*
25th August 2022:

4:00 - 6:30 	Hacker House (Session) Offline
3:00 - 3:30       Flashmob
3:30-4:00 	Inauguration
6:45-7:30  	Xenatus R1 Online
7:45-8:45 	Codestrike R1 Online
9:15-9:45 	CricWars R1 Online
Full day 	Xenathon
	
26th August 2022
3:00-4:00 PM     Fandom  R1 Online	
4:00-7:00 PM 	   Hacker House Session Offline
7:15-8:00 PM 	  Xenatus R2 offline
6:00-8:00 PM 	  CricWars R2 offline
8:00-9:00 PM	  Ninja Coding R1 (online)
9:00-9:45 PM 	  C2C R1 Online
	
27th August 2022	
10:00AM-12:00PM 	Fandom  R2 Offline
12:30 - 1:30 PM 	C2C R2 offline
 2:00-4:00 PM              Treasure Hunt  R1 Online
4:15 - 5:15   PM 	Ninja Coding  R2 Offline
5:30-6:00     PM 	Xenatus  R3 Offline
6:00 -7:00    PM 	Codestrike R2 offline 
8AM -6 PM.  CricWars   R3 offline


	
	
28th August 2022	

9:00AM-12:00 PM.       Fandom  R3 offline
11:00AM-12:15 PM      Treasure Hunt  R2 offline
8:00AM - 1:00 PM 	   Xenathon  
9:30AM - 1:00 PM 	   C2C  R3 offline
9:30 - 1:00 PM 	   Hacker House
*/